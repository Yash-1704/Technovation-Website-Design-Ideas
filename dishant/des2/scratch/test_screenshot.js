const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tmpDir = path.join(os.tmpdir(), 'chrome_test_' + Date.now());

const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--disable-gpu',
  '--user-data-dir=' + tmpDir,
  '--window-size=1440,900',
  'http://localhost:3000'
]);

async function run() {
  await new Promise(r => setTimeout(r, 2000));
  const listRes = await fetch('http://127.0.0.1:9222/json/list');
  const tabs = await listRes.json();
  const wsUrl = tabs[0]?.webSocketDebuggerUrl;
  if (!wsUrl) throw new Error('No webSocketDebuggerUrl');

  const ws = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });

  let id = 1;
  const send = (method, params = {}) => new Promise((resolve) => {
    const curId = id++;
    const handler = (evt) => {
      const data = JSON.parse(evt.data);
      if (data.id === curId) {
        ws.removeEventListener('message', handler);
        resolve(data.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  // Open book reader on 'about' department and turn to Page 2
  await send('Runtime.evaluate', {
    expression: `
      window.FullScreenBookReader.open('about');
      setTimeout(() => {
        window.FullScreenBookReader.nextPage();
      }, 300);
    `
  });

  // Wait for 3D turn and layout to settle
  await new Promise(r => setTimeout(r, 1800));

  // Capture screenshot
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  const buf = Buffer.from(shot.data, 'base64');
  const outPath = 'C:/Users/disha/.gemini/antigravity/brain/596323c0-7652-4d1b-927d-7a2f2cf9fb7e/screenshot_matched_font.png';
  fs.writeFileSync(outPath, buf);
  console.log('Saved screenshot to:', outPath);

  ws.close();
  chrome.kill();
  try {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  } catch (e) {}
}

run().catch(err => {
  console.error(err);
  chrome.kill();
});

/**
 * TECHNOVATION STORY ARCHIVES - SHELF SPRITESHEET & CROP ASSETS
 * Contains the exact spritesheets, crop coordinates, and helper functions
 * used by the bookshelf and physical 3D book reader to ensure 100% visual fidelity.
 */

export const SHEET = {
  covers: [
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_010644_837e04ca-2418-45c1-b8e0-0233265c4cd5.png&w=1744&q=85',
    1744,
    2336
  ],
  spines: [
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_010738_a3e47ead-18f2-4974-9468-06d16a25edc5.png&w=2688&q=85',
    2688,
    1152
  ],
  fix: [
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_010831_3ebb874b-93dc-433e-87ed-6299aba720f0.png&w=1520&q=85',
    1520,
    2688
  ],
  fix2: [
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261029_092020_f96bc094-db7b-46de-9298-074a24e0a3b8.png&w=1520&q=85',
    1520,
    2688
  ]
};

export const CROP = {
  'spine-noon': ['spines', 44, 32, 184, 1088],
  'cover-noon': ['covers', 74, 72, 347, 659],

  'spine-green': ['spines', 1157, 31, 185, 1090],
  'cover-green': ['covers', 497, 815, 344, 674],

  'spine-graphics': ['spines', 1600, 31, 188, 1089],
  'cover-graphics': ['covers', 497, 72, 344, 659],

  'spine-storm': ['fix2', 808, 15, 347, 2656],
  'cover-storm': ['covers', 74, 1571, 345, 681],

  'spine-events': ['spines', 715, 31, 188, 1089],
  'cover-events': ['covers', 1331, 72, 344, 659],

  'spine-bluehour': ['spines', 492, 31, 189, 1089],
  'cover-bluehour': ['covers', 914, 72, 342, 659],

  'spine-observer': ['fix2', 371, 15, 349, 2655],
  'cover-observer': ['covers', 915, 815, 342, 675],

  'spine-door': ['spines', 2462, 31, 188, 1089],
  'cover-door': ['covers', 1331, 1579, 344, 677]
};

export const DEPT_TO_SHELF_KEY = {
  about: 'noon',
  noon: 'noon',
  technical: 'green',
  green: 'green',
  graphics: 'graphics',
  production: 'storm',
  storm: 'storm',
  events: 'events',
  pr: 'bluehour',
  bluehour: 'bluehour',
  team: 'observer',
  observer: 'observer',
  legacy: 'door',
  door: 'door'
};

/**
 * Computes the exact CSS background properties to render the cropped book artwork
 * @param {string} cropKey - Key such as 'cover-green' or 'spine-green'
 * @returns {string} Inline CSS style string
 */
export function getCropBackgroundStyle(cropKey) {
  const crop = CROP[cropKey];
  if (!crop) return '';

  const [sheetKey, x, y, w, h] = crop;
  const sheet = SHEET[sheetKey];
  if (!sheet) return '';

  const [url, W, H_sheet] = sheet;
  const bgSizeX = ((W / w) * 100).toFixed(4);
  const bgSizeY = ((H_sheet / h) * 100).toFixed(4);
  const bgPosX = ((x / (W - w)) * 100).toFixed(4);
  const bgPosY = ((y / (H_sheet - h)) * 100).toFixed(4);

  return `background-image: url('${url}'); background-size: ${bgSizeX}% ${bgSizeY}%; background-position: ${bgPosX}% ${bgPosY}%; background-repeat: no-repeat;`;
}

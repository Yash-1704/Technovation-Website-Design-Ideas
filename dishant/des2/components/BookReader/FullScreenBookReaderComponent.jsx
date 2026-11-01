/**
 * TECHNOVATION STORY ARCHIVES - REACT FULL-SCREEN BOOK READER COMPONENT
 * Reusable React component: <FullScreenBookReader department="technical" onClose={() => {}} />
 * Renders 100vw × 100vh physical page turning using React state and CSS3 3D physics.
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FULLSCREEN_DEPARTMENT_PAGES } from '../../data/fullScreenDepartmentPages.js';
import { FullScreenPages } from './FullScreenPages.js';
import { PageTurnAnimator } from './PageTurnAnimator.js';

export function FullScreenBookReader({
  department = 'technical',
  initialPage = 1,
  isOpen = true,
  onClose = () => {},
  soundEnabled = true
}) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isSoundOn, setIsSoundOn] = useState(soundEnabled);
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const animatorRef = useRef(null);

  const deptKey = department.toLowerCase();
  const deptData = FULLSCREEN_DEPARTMENT_PAGES[deptKey] || FULLSCREEN_DEPARTMENT_PAGES.technical;
  const totalPages = (deptData.pages || []).length + 1;

  const getPageData = useCallback((index) => {
    const pages = deptData.pages || [];
    if (index < pages.length) return pages[index];
    return { pageNumber: pages.length + 1, type: 'completed', chapterLabel: 'CHAPTER ARCHIVE CONCLUDED' };
  }, [deptData]);

  // Initialize 3D Animator
  useEffect(() => {
    if (!stageRef.current) return;

    animatorRef.current = new PageTurnAnimator(stageRef.current, {
      onTurnComplete: (direction) => {
        // State update handled before turn starts
      }
    });

    const pageData = getPageData(currentPage - 1);
    const initialHtml = FullScreenPages.renderPage(pageData, deptData, totalPages);
    animatorRef.current.renderBasePage(initialHtml);
  }, [deptData, totalPages, getPageData, currentPage]);

  // Turn to Next Page
  const handleNextPage = useCallback(() => {
    if (!animatorRef.current || animatorRef.current.isAnimating) return;
    if (currentPage >= totalPages) {
      // Already on completed page: stay here!
      return;
    }

    const currentHtml = FullScreenPages.renderPage(getPageData(currentPage - 1), deptData, totalPages);
    const nextHtml = FullScreenPages.renderPage(getPageData(currentPage), deptData, totalPages);

    setCurrentPage(prev => prev + 1);
    animatorRef.current.turnForward(currentHtml, nextHtml, deptData, 820);
  }, [currentPage, totalPages, deptData, getPageData]);

  // Turn to Previous Page
  const handlePrevPage = useCallback(() => {
    if (!animatorRef.current || animatorRef.current.isAnimating) return;
    if (currentPage <= 1) return;

    const currentHtml = FullScreenPages.renderPage(deptData.pages[currentPage - 1], deptData, totalPages);
    const prevHtml = FullScreenPages.renderPage(deptData.pages[currentPage - 2], deptData, totalPages);

    setCurrentPage(prev => prev - 1);
    animatorRef.current.turnBackward(currentHtml, prevHtml, deptData, 820);
  }, [currentPage, totalPages, deptData]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        handleNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrevPage();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNextPage, handlePrevPage, onClose]);

  if (!isOpen) return null;

  const formattedNum = String(currentPage).padStart(2, '0');
  const formattedTotal = String(totalPages).padStart(2, '0');

  return (
    <div
      ref={containerRef}
      id="fullscreen-book-reader"
      className="fullscreen-book-reader fsp-active"
      role="dialog"
      aria-modal="true"
      aria-label={`${deptData.department} Story Archives`}
      style={{
        '--fsp-dept-color': deptData.color || '#1F3FB0',
        '--fsp-dept-accent': deptData.accentColor || '#38BDF8'
      }}
    >
      {/* 3D Perspective Stage */}
      <div ref={stageRef} className="fsp-stage" id="fsp-stage" />

      {/* Left Edge Chevron */}
      <button
        type="button"
        className={`fsp-edge-nav fsp-nav-left ${currentPage <= 1 ? 'is-disabled' : ''}`}
        onClick={handlePrevPage}
        aria-label="Previous Page"
        title="Previous Page (←)"
      >
        <svg viewBox="0 0 24 24" className="fsp-nav-icon">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right Edge Chevron */}
      <button
        type="button"
        className="fsp-edge-nav fsp-nav-right"
        onClick={handleNextPage}
        aria-label="Next Page"
        title={currentPage >= totalPages ? 'Finish Chapter & Return' : 'Next Page (→)'}
      >
        <svg viewBox="0 0 24 24" className="fsp-nav-icon">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Top Controls */}
      <div className="fsp-top-controls">
        <button
          type="button"
          className="fsp-sound-toggle-btn"
          onClick={() => {
            if (animatorRef.current) {
              animatorRef.current.soundEnabled = !isSoundOn;
              if (!isSoundOn) animatorRef.current.playRustleSound();
            }
            setIsSoundOn(!isSoundOn);
          }}
          title="Toggle Paper Sounds"
        >
          {isSoundOn ? (
            <svg viewBox="0 0 24 24">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          )}
        </button>

        <button
          type="button"
          className="fsp-close-btn"
          onClick={onClose}
          aria-label="Close Reader"
          title="Exit to Department (ESC)"
        >
          <span className="fsp-close-label">ESC</span>
          <svg viewBox="0 0 24 24" className="fsp-close-icon">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Bottom Floating Folio HUD */}
      <div className="fsp-bottom-hud">
        <span className="fsp-hud-dept">{deptData.department}</span>
        <span className="fsp-hud-separator">·</span>
        <span className="fsp-hud-folio">PAGE {formattedNum} / {formattedTotal}</span>
      </div>
    </div>
  );
}

export default FullScreenBookReader;

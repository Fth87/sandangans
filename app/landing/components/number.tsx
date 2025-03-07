'use client'
import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Odometer without CSS import
const Odometer = dynamic(() => import('react-odometerjs'), {
  ssr: false,
  loading: () => <span>0</span>,
});

interface NumberAnimationProps {
  value: number;
  duration?: number;
  format?: string;
  theme?: 'minimal' | 'car' | 'default' | 'digital' | 'plaza' | 'slot-machine';
  className?: string;
  fontSize?: string;
  color?: string;
  threshold?: number; // Visibility threshold (0-1)
  rootMargin?: string; // Margin around the root
}

const NumberAnimation: React.FC<NumberAnimationProps> = ({
  value,
  duration = 1000,
  format = '(,ddd).dd',
  theme = 'minimal',
  className = '',
  fontSize = '2rem',
  color = 'inherit',
  threshold = 0.1, // Element is considered visible when 10% is in view
  rootMargin = '0px',
}) => {
  const [odometerValue, setOdometerValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    // Skip if SSR
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true; 
        }
      },
      {
        root: null, 
        rootMargin,
        threshold,
      }
    );
    
    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [rootMargin, threshold]);
  
  useEffect(() => {
    // Only trigger animation when element becomes visible
    if (isVisible) {
      setTimeout(() => {
        setOdometerValue(value);
      }, 100);
    }
  }, [isVisible, value]);

  // Custom CSS for the odometer themes
  const getThemeStyles = () => {
    switch (theme) {
      case 'minimal':
        return `
          .odometer.odometer-auto-theme, .odometer.odometer-theme-minimal {
            display: inline-block;
            position: relative;
          }
          .odometer.odometer-auto-theme .odometer-digit, .odometer.odometer-theme-minimal .odometer-digit {
            display: inline-block;
            position: relative;
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer, .odometer.odometer-theme-minimal .odometer-digit .odometer-digit-spacer {
            display: inline-block;
            visibility: hidden;
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner, .odometer.odometer-theme-minimal .odometer-digit .odometer-digit-inner {
            text-align: left;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon, .odometer.odometer-theme-minimal .odometer-digit .odometer-ribbon {
            display: block;
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner, .odometer.odometer-theme-minimal .odometer-digit .odometer-ribbon-inner {
            display: block;
            backface-visibility: hidden;
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-value, .odometer.odometer-theme-minimal .odometer-digit .odometer-value {
            display: block;
            transform: translateZ(0);
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value, .odometer.odometer-theme-minimal .odometer-digit .odometer-value.odometer-last-value {
            position: absolute;
          }
          .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner, .odometer.odometer-theme-minimal.odometer-animating-up .odometer-ribbon-inner {
            transition: transform ${duration/1000}s;
          }
          .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner, .odometer.odometer-theme-minimal.odometer-animating-up.odometer-animating .odometer-ribbon-inner {
            transform: translateY(-100%);
          }
          .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner, .odometer.odometer-theme-minimal.odometer-animating-down .odometer-ribbon-inner {
            transform: translateY(-100%);
          }
          .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner, .odometer.odometer-theme-minimal.odometer-animating-down.odometer-animating .odometer-ribbon-inner {
            transition: transform ${duration/1000}s;
            transform: translateY(0);
          }
        `;
      case 'digital':
        return `
          .odometer.odometer-auto-theme, .odometer.odometer-theme-digital {
            display: inline-block;
            position: relative;
            background: #000;
            color: #fff;
            padding: 0.1em 0.3em;
            border-radius: 0.2em;
            font-family: "Courier New", monospace;
          }
          .odometer.odometer-auto-theme .odometer-digit, .odometer.odometer-theme-digital .odometer-digit {
            display: inline-block;
            position: relative;
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer, .odometer.odometer-theme-digital .odometer-digit .odometer-digit-spacer {
            display: inline-block;
            visibility: hidden;
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner, .odometer.odometer-theme-digital .odometer-digit .odometer-digit-inner {
            text-align: left;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon, .odometer.odometer-theme-digital .odometer-digit .odometer-ribbon {
            display: block;
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner, .odometer.odometer-theme-digital .odometer-digit .odometer-ribbon-inner {
            display: block;
            backface-visibility: hidden;
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-value, .odometer.odometer-theme-digital .odometer-digit .odometer-value {
            display: block;
            transform: translateZ(0);
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value, .odometer.odometer-theme-digital .odometer-digit .odometer-value.odometer-last-value {
            position: absolute;
          }
          .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner, .odometer.odometer-theme-digital.odometer-animating-up .odometer-ribbon-inner {
            transition: transform ${duration/1000}s;
          }
          .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner, .odometer.odometer-theme-digital.odometer-animating-up.odometer-animating .odometer-ribbon-inner {
            transform: translateY(-100%);
          }
          .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner, .odometer.odometer-theme-digital.odometer-animating-down .odometer-ribbon-inner {
            transform: translateY(-100%);
          }
          .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner, .odometer.odometer-theme-digital.odometer-animating-down.odometer-animating .odometer-ribbon-inner {
            transition: transform ${duration/1000}s;
            transform: translateY(0);
          }
        `;
      default:
        return `
          .odometer.odometer-auto-theme, .odometer.odometer-theme-default {
            display: inline-block;
            position: relative;
          }
          .odometer.odometer-auto-theme .odometer-digit, .odometer.odometer-theme-default .odometer-digit {
            display: inline-block;
            position: relative;
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer, .odometer.odometer-theme-default .odometer-digit .odometer-digit-spacer {
            display: inline-block;
            visibility: hidden;
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner, .odometer.odometer-theme-default .odometer-digit .odometer-digit-inner {
            text-align: left;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon, .odometer.odometer-theme-default .odometer-digit .odometer-ribbon {
            display: block;
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner, .odometer.odometer-theme-default .odometer-digit .odometer-ribbon-inner {
            display: block;
            backface-visibility: hidden;
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-value, .odometer.odometer-theme-default .odometer-digit .odometer-value {
            display: block;
            transform: translateZ(0);
          }
          .odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value, .odometer.odometer-theme-default .odometer-digit .odometer-value.odometer-last-value {
            position: absolute;
          }
          .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-up .odometer-ribbon-inner {
            transition: transform ${duration/1000}s;
          }
          .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-up.odometer-animating .odometer-ribbon-inner {
            transform: translateY(-100%);
          }
          .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-down .odometer-ribbon-inner {
            transform: translateY(-100%);
          }
          .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-down.odometer-animating .odometer-ribbon-inner {
            transition: transform ${duration/1000}s;
            transform: translateY(0);
          }
        `;
    }
  };

  return (
    <div 
      ref={elementRef} 
      className={`odometer-container ${className}`}
    >
      <style jsx global>{`
        ${getThemeStyles()}
        
        .odometer-container {
          display: inline-block;
          font-size: ${fontSize};
          font-weight: bold;
          color: ${color};
        }
      `}</style>
      <Odometer
        value={odometerValue}
        format={format}
        duration={duration}
        theme={theme}
      />
    </div>
  );
};

export default NumberAnimation;
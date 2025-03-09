'use client';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';

interface ParallaxSectionProps {
  image: string;
  alt: string;
  speed?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  imgClassName?:string
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ image, alt, speed = 0.5, children, style, imageStyle, imgClassName }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const ticking = useRef(false);

  const handleScroll = React.useCallback(() => {
    if (imageRef.current && imageRef.current.parentElement) {
      // Dapatkan posisi kontainer relatif terhadap dokumen
      const containerRect = imageRef.current.parentElement.getBoundingClientRect();
      const containerOffset = containerRect.top + window.scrollY;
      const scrollTop = window.scrollY;
      const distance = scrollTop - containerOffset;
      // Update posisi gambar menggunakan transform untuk performa yang lebih baik
      imageRef.current.style.transform = `translateY(${distance * speed}px)`;
    }
    ticking.current = false;
  }, [speed]);

  const onScroll = React.useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(handleScroll);
      ticking.current = true;
    }
  }, [handleScroll]);

  useEffect(() => {
    // Hitung posisi awal
    handleScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll, onScroll]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }}>
      <Image
        ref={imageRef}
        src={image}
        alt={alt}
        width={1920}
        height={1080}
        className={imgClassName}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          ...imageStyle,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default ParallaxSection;

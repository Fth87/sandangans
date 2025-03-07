'use client';
import Image from 'next/image';
// import React, { useRef, useEffect } from 'react';

// interface ParallaxImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
//   src: string;
//   alt: string;
//   speed?: number;
// }

// const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, speed = 0.5, style, ...props }) => {
//   const imageRef = useRef<HTMLImageElement | null>(null);
//   const ticking = useRef(false);

//   const handleScroll = () => {
//     if (imageRef.current) {
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       const offsetTop = imageRef.current.offsetTop;
//       const distance = scrollTop - offsetTop;
//       // Menggunakan transform untuk performa yang lebih baik
//       imageRef.current.style.transform = `translateY(${distance * speed}px)`;
//     }
//     ticking.current = false;
//   };

//   const onScroll = () => {
//     if (!ticking.current) {
//       window.requestAnimationFrame(handleScroll);
//       ticking.current = true;
//     }
//   };

//   useEffect(() => {
//     // Inisialisasi posisi saat komponen dipasang
//     handleScroll();
//     window.addEventListener('scroll', onScroll);

//     // Bersihkan event listener ketika komponen di-unmount
//     return () => {
//       window.removeEventListener('scroll', onScroll);
//     };
//   }, [speed]);

//   return <img ref={imageRef} src={src} alt={alt} style={{ position: 'relative', ...style }} {...props} />;
// };

// export default ParallaxImage;

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
          width: '100%',
          height: 'auto',
          zIndex: 0,
          ...imageStyle,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default ParallaxSection;

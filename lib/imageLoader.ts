export default function myImageLoader({ src, width, quality }: {src: string, width: number, quality: number}) {
  return `https://res.cloudinary.com/dfhxl1ruc/image/upload/v1741621368${src}?w=${width}&q=${quality || 100}`
}

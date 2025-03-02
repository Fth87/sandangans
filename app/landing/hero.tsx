import Image from 'next/image';
import CardHero from './components/hero-card';

export default function Hero() {
  return (
    <div className="container mx-auto xl:max-w-7xl">
      <div className="flex flex-row items-center justify-center h-screen w-full">
        <div className=" text-start max-w-xl">
          <p className=" text-xl font-semibold font-sans  text-brown">East 2025</p>
          <div className="text-brown text-5xl font-bold font-title leading-tight mb-3">
            Sandangans: <br />
            Where Style Meets Sustainability
          </div>
          <div className=" text-brown text-lg font-light font-sans">Every stitch tells a story of recycled materials given new life. Discover fashion collections that are not only stylish but also kind to the planet.</div>
        </div>
        <div className="flex  justify-end items-end h-full relative ">
          <div className="relative pr-20">
            <CardHero title="Black Shoes" description="We recycling polyester to make the outsole of this shoes" image="/images/hero/sepatu.png" className="-left-[15%] bottom-[15%]" />
            <CardHero title="Beige Hat" description="Handwoven from leftover fabric, this hat is as eco-friendly as it is stylish." image="/images/hero/hat.png" className="right-[16%] top-[2%]" />
            <CardHero title="Woman Outer" description="Handwoven from leftover fabric, this hat is as eco-friendly as it is stylish." image="/images/hero/outer.png" className="right-[0%] bottom-[40%]" />
            <Image className="max-w-[1400px]" width={540} height={544} src="/images/hero/mascot.png" alt="hero mascott" />
          </div>
        </div>
      </div>
    </div>
  );
}

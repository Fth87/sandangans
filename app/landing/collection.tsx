import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Collection() {
  return (
    <div className="container mx-auto ">
      {/* Title */}
      <div className="relative my-20 mx-16">
        <div data-svg-wrapper className="left-0 top-[37.95px] absolute">
          <Image className="animate-spin duration-5000" width={80} height={80} alt={'star decoration'} src={'/images/hero/bintangkiri.svg'} />
        </div>
        <div data-svg-wrapper className="right-0 top-[49px] absolute">
          <Image className="animate-spin duration-6000 ease-linear" width={80} height={80} alt={'star decoration'} src={'/images/hero/bintangkanan.svg'} />
        </div>
        <div className=" text-center text-brown text-6xl font-bold font-title">
          Crafted from Waste, <br /> Designed for You
        </div>
      </div>

      {/* first collection */}
      <div className="flex-col justify-start items-start gap-10 inline-flex my-28">
        <div className=" justify-between items-center inline-flex">
          <div className=" text-brown-900 text-xl font-light font-sans">Made from post-consumer cotton waste, we recycled cotton into collection includes tees, dresses, and loungewear.</div>
          <div className="text-right text-brown-500 text-5xl font-bold font-sans uppercase">Breathable, Comfortable, AND Sustainable</div>
        </div>
        <div className=" justify-between items-center gap-28 inline-flex w-full">
          <Image alt="Cotton Shirt" width={428} height={642} className="w-[428px] h-[642px] " src="/images/hero/young-teenage-boy-wearing-denim-outfit 1.png" />
          <div className=" flex-col justify-start items-center gap-12 inline-flex">
            <div className="w-48 h-48 rounded-[999px] border-2 border-brown-300 flex-col justify-center items-center gap-1 flex">
              <div data-svg-wrapper className="relative">
                <ArrowUpRight size={64} className="text-brown" />
              </div>
              <div className="text-right text-brown border-brown-300 text-2xl font-medium font-sans">DISCOVER</div>
            </div>
            <div className=" h-[382px] flex-col justify-start items-start gap-3 flex">
              <Image alt="Cotton Dress" className="w-60 h-80" width={240} height={320} src="/images/hero/sewing-denim-jacket-buttons.png" />
              <div className="h-[50px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-brown-600 text-xl font-medium font-title">Cotton Dress</div>
                <div className="justify-start items-end gap-2 inline-flex">
                  <div className="text-right text-brown-500 text-base font-normal font-sans">Rp75.000</div>
                  <div className="p-0.5 bg-brown-300 justify-center items-center gap-2.5 flex">
                    <div className="text-right text-brown-50 text-xs font-normal font-sans line-through">Rp100.000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-16 inline-flex">
            <div className=" flex-col justify-start items-start gap-1 flex">
              <Image alt="abstract T shirt" className=" h-80 " width={240} height={320} src="/images/hero/details-blue-jeans-fabric.png" />
              <div className=" flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-brown-600 text-xl font-medium font-title">Abstract Tshirt</div>
                <div className="justify-start items-end gap-2 inline-flex">
                  <div className=" text-right text-brown-500 text-base font-normal font-sans">Rp82.000</div>
                  <div className="p-0.5 bg-brown-300 justify-center items-center gap-2.5 flex">
                    <div className="text-right text-brown-50 text-xs font-normal font-sans line-through">Rp122.000</div>
                  </div>
                </div>
              </div>
            </div>
            <div data-svg-wrapper className="relative">
              <Image src={'/images/hero/star.svg'} className="" width={192} height={136} alt={'star decoration'} />
            </div>
          </div>
        </div>
      </div>

      {/* second collection */}
      <div className="flex-col justify-start items-start gap-10 inline-flex my-28">
        <div className=" justify-between items-center inline-flex">
          <div className=" text-brown-500 text-5xl font-bold font-sans uppercase">From Old Jeans to Timeless FASHION</div>
          <div className="text-right text-brown-900 text-xl font-light font-sans">Our upcycled denim collection breathes new life into stylish jackets, skirts, hats, and more.</div>
        </div>
        <div className=" justify-between items-center gap-28 inline-flex w-full">
          <div className="flex-col justify-start items-center gap-16 inline-flex">
            <div className=" flex-col justify-start items-start gap-1 flex">
              <Image alt="abstract T shirt" className=" h-80 " width={240} height={320} src="/images/hero/jeans.png" />
              <div className=" flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-brown-600 text-xl font-medium font-title">Abstract Tshirt</div>
                <div className="justify-start items-end gap-2 inline-flex">
                  <div className=" text-right text-brown-500 text-base font-normal font-sans">Rp82.000</div>
                  <div className="p-0.5 bg-brown-300 justify-center items-center gap-2.5 flex">
                    <div className="text-right text-brown-50 text-xs font-normal font-sans line-through">Rp122.000</div>
                  </div>
                </div>
              </div>
            </div>
            <div data-svg-wrapper className="relative">
              <Image src={'/images/hero/star.svg'} className="" width={192} height={136} alt={'star decoration'} />
            </div>
          </div>

          <div className=" flex-col justify-start items-center gap-12 inline-flex">
            <div className="w-48 h-48 rounded-[999px] border-2 border-brown-300 flex-col justify-center items-center gap-1 flex">
              <div data-svg-wrapper className="relative">
                <ArrowUpRight size={64} className="text-brown" />
              </div>
              <div className="text-right text-brown border-brown-300 text-2xl font-medium font-sans">DISCOVER</div>
            </div>
            <div className=" h-[382px] flex-col justify-start items-start gap-3 flex">
              <Image alt="Cotton Dress" className="w-60 h-80" width={240} height={320} src="/images/hero/jeans-shirt.png" />
              <div className="h-[50px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-brown-600 text-xl font-medium font-title">Cotton Dress</div>
                <div className="justify-start items-end gap-2 inline-flex">
                  <div className="text-right text-brown-500 text-base font-normal font-sans">Rp75.000</div>
                  <div className="p-0.5 bg-brown-300 justify-center items-center gap-2.5 flex">
                    <div className="text-right text-brown-50 text-xs font-normal font-sans line-through">Rp100.000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image alt="Cotton Shirt" width={428} height={642} className="w-[428px] h-[642px] " src="/images/hero/denim-boy.png" />
        </div>
      </div>
    </div>
  );
}

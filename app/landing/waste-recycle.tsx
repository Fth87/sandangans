import NumberAnimation from './components/number';
import ParallaxSection from './components/parallax-image';

export default function WasteRecycle() {
  return (
    <>
      <div className="h-[340px] object-cover overflow-hidden ">
        <ParallaxSection
          image="/images/hero/waste-recycle.jpg"
          alt="Deskripsi Gambar"
          speed={0.2}
          style={{ height: '500px' }} // Atur tinggi sesuai kebutuhan
        >
          <div className="w-full h-[340px] px-20 py-8 shadow-[inset_0px_0px_60px_0px_rgba(0,0,0,1.00)] flex-col justify-start items-center gap-8 inline-flex overflow-hidden">
            <div className="flex-col justify-start items-center flex">
              <div className="text-brown-50 text-2xl font-normal font-sans">Waste recycled since 2025</div>
              <div className="text-brown-50 text-6xl font-bold font-sans">
                <NumberAnimation duration={3000} value={212767334} theme="minimal" fontSize="3.75rem" />
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="flex-col justify-center items-start gap-4 inline-flex">
                <div className="w-[370px] text-brown-50 text-4xl font-bold font-title">Recycle Your Style, Save the Planet</div>
                <div className="px-5 py-2 bg-brown-50 flex-col justify-start items-start gap-2.5 flex overflow-hidden">
                  <div className="text-brown text-base font-normal font-sans">Join Our Movement</div>
                </div>
              </div>
              <div className="w-[295px] text-right text-brown-50 text-xl font-light font-['Lato']">Get your special voucher by send your pre-loved fashion items. Let your waste become part of our eco-friendly collections.</div>
            </div>
          </div>
        </ParallaxSection>
      </div>
    </>
  );
}

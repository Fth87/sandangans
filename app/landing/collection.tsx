// import { ArrowUpRight } from 'lucide-react';
// import Image from 'next/image';
// import React from 'react';

// export default function Collection() {
//   return (
//     <div className="container mx-auto ">
//       {/* Title */}
//       <div className="relative my-20 mx-16">
//         <div data-svg-wrapper className="left-0 top-[37.95px] absolute">
//           <Image className="animate-spin duration-5000" width={80} height={80} alt={'star decoration'} src={'/images/hero/bintangkiri.svg'} />
//         </div>
//         <div data-svg-wrapper className="right-0 top-[49px] absolute">
//           <Image className="animate-spin duration-6000 ease-linear" width={80} height={80} alt={'star decoration'} src={'/images/hero/bintangkanan.svg'} />
//         </div>
//         <div className=" text-center text-brown text-6xl font-bold font-title">
//           Crafted from Waste, <br /> Designed for You
//         </div>
//       </div>

//       {/* first collection */}
//       <div className="flex-col justify-start items-start gap-10 inline-flex my-28">
//         <div className=" justify-between items-center inline-flex">
//           <div className=" text-brown-900 text-xl font-light font-sans">Made from post-consumer cotton waste, we recycled cotton into collection includes tees, dresses, and loungewear.</div>
//           <div className="text-right text-brown-500 text-5xl font-bold font-sans uppercase">Breathable, Comfortable, AND Sustainable</div>
//         </div>
//         <div className=" justify-between items-center gap-28 inline-flex w-full">
//           <Image alt="Cotton Shirt" width={428} height={642} className="w-[428px] h-[642px] " src="/images/hero/young-teenage-boy-wearing-denim-outfit 1.png" />
//           <div className=" flex-col justify-start items-center gap-12 inline-flex">
//             <div className="w-48 h-48 rounded-[999px] border-2 border-brown-300 flex-col justify-center items-center gap-1 flex">
//               <div data-svg-wrapper className="relative">
//                 <ArrowUpRight size={64} className="text-brown" />
//               </div>
//               <div className="text-right text-brown border-brown-300 text-2xl font-medium font-sans">DISCOVER</div>
//             </div>
//             <div className=" h-[382px] flex-col justify-start items-start gap-3 flex">
//               <Image alt="Cotton Dress" className="w-60 h-80" width={240} height={320} src="/images/hero/sewing-denim-jacket-buttons.png" />
//               <div className="h-[50px] flex-col justify-start items-start gap-1 flex">
//                 <div className="self-stretch text-brown-600 text-xl font-medium font-title">Cotton Dress</div>
//                 <div className="justify-start items-end gap-2 inline-flex">
//                   <div className="text-right text-brown-500 text-base font-normal font-sans">Rp75.000</div>
//                   <div className="p-0.5 bg-brown-300 justify-center items-center gap-2.5 flex">
//                     <div className="text-right text-brown-50 text-xs font-normal font-sans line-through">Rp100.000</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex-col justify-start items-center gap-16 inline-flex">
//             <div className=" flex-col justify-start items-start gap-1 flex">
//               <Image alt="abstract T shirt" className=" h-80 " width={240} height={320} src="/images/hero/details-blue-jeans-fabric.png" />
//               <div className=" flex-col justify-start items-start gap-1 flex">
//                 <div className="self-stretch text-brown-600 text-xl font-medium font-title">Abstract Tshirt</div>
//                 <div className="justify-start items-end gap-2 inline-flex">
//                   <div className=" text-right text-brown-500 text-base font-normal font-sans">Rp82.000</div>
//                   <div className="p-0.5 bg-brown-300 justify-center items-center gap-2.5 flex">
//                     <div className="text-right text-brown-50 text-xs font-normal font-sans line-through">Rp122.000</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div data-svg-wrapper className="relative">
//               <Image src={'/images/hero/star.svg'} className="" width={192} height={136} alt={'star decoration'} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* second collection */}
//       <div className="flex-col justify-start items-start gap-10 inline-flex my-28">
//         <div className=" justify-between items-center inline-flex">
//           <div className=" text-brown-500 text-5xl font-bold font-sans uppercase">From Old Jeans to Timeless FASHION</div>
//           <div className="text-right text-brown-900 text-xl font-light font-sans">Our upcycled denim collection breathes new life into stylish jackets, skirts, hats, and more.</div>
//         </div>
//         <div className=" justify-between items-center gap-28 inline-flex w-full">
//           <div className="flex-col justify-start items-center gap-16 inline-flex">
//             <div className=" flex-col justify-start items-start gap-1 flex">
//               <Image alt="abstract T shirt" className=" h-80 " width={240} height={320} src="/images/hero/jeans.png" />
//               <div className=" flex-col justify-start items-start gap-1 flex">
//                 <div className="self-stretch text-brown-600 text-xl font-medium font-title">Abstract Tshirt</div>
//                 <div className="justify-start items-end gap-2 inline-flex">
//                   <div className=" text-right text-brown-500 text-base font-normal font-sans">Rp82.000</div>
//                   <div className="p-0.5 bg-brown-300 justify-center items-center gap-2.5 flex">
//                     <div className="text-right text-brown-50 text-xs font-normal font-sans line-through">Rp122.000</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div data-svg-wrapper className="relative">
//               <Image src={'/images/hero/star.svg'} className="" width={192} height={136} alt={'star decoration'} />
//             </div>
//           </div>

//           <div className=" flex-col justify-start items-center gap-12 inline-flex">
//             <div className="w-48 h-48 rounded-[999px] border-2 border-brown-300 flex-col justify-center items-center gap-1 flex">
//               <div data-svg-wrapper className="relative">
//                 <ArrowUpRight size={64} className="text-brown" />
//               </div>
//               <div className="text-right text-brown border-brown-300 text-2xl font-medium font-sans">DISCOVER</div>
//             </div>
//             <div className=" h-[382px] flex-col justify-start items-start gap-3 flex">
//               <Image alt="Cotton Dress" className="w-60 h-80" width={240} height={320} src="/images/hero/jeans-shirt.png" />
//               <div className="h-[50px] flex-col justify-start items-start gap-1 flex">
//                 <div className="self-stretch text-brown-600 text-xl font-medium font-title">Cotton Dress</div>
//                 <div className="justify-start items-end gap-2 inline-flex">
//                   <div className="text-right text-brown-500 text-base font-normal font-sans">Rp75.000</div>
//                   <div className="p-0.5 bg-brown-300 justify-center items-center gap-2.5 flex">
//                     <div className="text-right text-brown-50 text-xs font-normal font-sans line-through">Rp100.000</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Image alt="Cotton Shirt" width={428} height={642} className="w-[428px] h-[642px] " src="/images/hero/denim-boy.png" />
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Collection() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [firstCollectionRef, firstCollectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [secondCollectionRef, secondCollectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const collectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const discoverButtonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
  }

  return (
    <div className="container mx-auto px-4">
      {/* Title */}
      <motion.div
        ref={titleRef}
        className="relative my-12 md:my-20 mx-4 md:mx-16"
        variants={titleVariants}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
      >
        <motion.div
          className="left-0 top-[37.95px] absolute hidden md:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Image width={80} height={80} alt={"star decoration"} src={"/images/hero/bintangkiri.svg"} />
        </motion.div>
        <motion.div
          className="right-0 top-[49px] absolute hidden md:block"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Image width={80} height={80} alt={"star decoration"} src={"/images/hero/bintangkanan.svg"} />
        </motion.div>
        <div className="text-center text-brown text-3xl md:text-5xl lg:text-6xl font-bold font-title">
          Crafted from Waste, <br /> Designed for You
        </div>
      </motion.div>

      {/* first collection */}
      <motion.div
        ref={firstCollectionRef}
        className="flex-col justify-start items-start gap-10 inline-flex my-12 md:my-28"
        variants={collectionVariants}
        initial="hidden"
        animate={firstCollectionInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 w-full">
          <motion.div
            className="text-brown-900 text-lg md:text-xl font-light font-sans text-center md:text-left md:max-w-[40%]"
            variants={itemVariants}
          >
            Made from post-consumer cotton waste, we recycled cotton into collection includes tees, dresses, and
            loungewear.
          </motion.div>
          <motion.div
            className="text-center md:text-right text-brown-500 text-2xl md:text-4xl lg:text-5xl font-bold font-sans uppercase md:max-w-[60%]"
            variants={itemVariants}
          >
            Breathable, Comfortable, AND Sustainable
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 lg:gap-16 w-full">
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <Image
              alt="Cotton Shirt"
              width={428}
              height={642}
              className="w-full max-w-[428px] h-auto"
              src="/images/hero/young-teenage-boy-wearing-denim-outfit 1.png"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-start items-center gap-8 md:gap-12 order-1 md:order-2"
            variants={itemVariants}
          >
            <motion.div
              className="w-32 h-32 md:w-48 md:h-48 rounded-[999px] border-2 border-brown-300 flex-col justify-center items-center gap-1 flex"
              variants={discoverButtonVariants}
              whileHover="hover"
              initial="rest"
            >
              <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                <ArrowUpRight size={48} className="text-brown" />
              </motion.div>
              <div className="text-right text-brown border-brown-300 text-xl md:text-2xl font-medium font-sans">
                DISCOVER
              </div>
            </motion.div>

            <div className="flex-col justify-start items-start gap-3 flex">
              <Image
                alt="Cotton Dress"
                className="w-48 md:w-60 h-auto aspect-[3/4]"
                width={240}
                height={320}
                src="/images/hero/sewing-denim-jacket-buttons.png"
              />
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
          </motion.div>

          <motion.div className="flex-col justify-start items-center gap-8 md:gap-16 order-3" variants={itemVariants}>
            <div className="flex-col justify-start items-start gap-1 flex">
              <Image
                alt="abstract T shirt"
                className="h-auto aspect-[3/4] w-48 md:w-auto md:h-80"
                width={240}
                height={320}
                src="/images/hero/details-blue-jeans-fabric.png"
              />
              <div className="flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-brown-600 text-xl font-medium font-title">Abstract Tshirt</div>
                <div className="justify-start items-end gap-2 inline-flex">
                  <div className="text-right text-brown-500 text-base font-normal font-sans">Rp82.000</div>
                  <div className="p-0.5 bg-brown-300 justify-center items-center gap-2.5 flex">
                    <div className="text-right text-brown-50 text-xs font-normal font-sans line-through">Rp122.000</div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="hidden md:block"
            >
              <Image src={"/images/hero/star.svg"} width={192} height={136} alt={"star decoration"} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* second collection */}
      <motion.div
        ref={secondCollectionRef}
        className="flex-col justify-start items-start gap-10 inline-flex my-12 md:my-28"
        variants={collectionVariants}
        initial="hidden"
        animate={secondCollectionInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 w-full">
          <motion.div
            className="text-brown-500 text-2xl md:text-4xl lg:text-5xl font-bold font-sans uppercase md:max-w-[60%] text-center md:text-left"
            variants={itemVariants}
          >
            From Old Jeans to Timeless FASHION
          </motion.div>
          <motion.div
            className="text-center md:text-right text-brown-900 text-lg md:text-xl font-light font-sans md:max-w-[40%]"
            variants={itemVariants}
          >
            Our upcycled denim collection breathes new life into stylish jackets, skirts, hats, and more.
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 lg:gap-16 w-full">
          <motion.div className="flex-col justify-start items-center gap-8 md:gap-16 order-1" variants={itemVariants}>
            <div className="flex-col justify-start items-start gap-1 flex">
              <Image
                alt="Jeans"
                className="h-auto aspect-[3/4] w-48 md:w-auto md:h-80"
                width={240}
                height={320}
                src="/images/hero/jeans.png"
              />
              <div className="flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-brown-600 text-xl font-medium font-title">Denim Jeans</div>
                <div className="justify-start items-end gap-2 inline-flex">
                  <div className="text-right text-brown-500 text-base font-normal font-sans">Rp82.000</div>
                  <div className="p-0.5 bg-brown-300 justify-center items-center gap-2.5 flex">
                    <div className="text-right text-brown-50 text-xs font-normal font-sans line-through">Rp122.000</div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
             
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="hidden md:block"
            >
              <Image src={"/images/hero/star.svg"} width={192} height={136} alt={"star decoration"} />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-start items-center gap-8 md:gap-12 order-2"
            variants={itemVariants}
          >
            <motion.div
              className="w-32 h-32 md:w-48 md:h-48 rounded-[999px] border-2 border-brown-300 flex-col justify-center items-center gap-1 flex"
              variants={discoverButtonVariants}
              whileHover="hover"
              initial="rest"
            >
              <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                <ArrowUpRight size={48} className="text-brown" />
              </motion.div>
              <div className="text-right text-brown border-brown-300 text-xl md:text-2xl font-medium font-sans">
                DISCOVER
              </div>
            </motion.div>

            <div className="flex-col justify-start items-start gap-3 flex">
              <Image
                alt="Jeans Shirt"
                className="w-48 md:w-60 h-auto aspect-[3/4]"
                width={240}
                height={320}
                src="/images/hero/jeans-shirt.png"
              />
              <div className="h-[50px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-brown-600 text-xl font-medium font-title">Denim Shirt</div>
                <div className="justify-start items-end gap-2 inline-flex">
                  <div className="text-right text-brown-500 text-base font-normal font-sans">Rp75.000</div>
                  <div className="p-0.5 bg-brown-300 justify-center items-center gap-2.5 flex">
                    <div className="text-right text-brown-50 text-xs font-normal font-sans line-through">Rp100.000</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-3">
            <Image
              alt="Denim Boy"
              width={428}
              height={642}
              className="w-full max-w-[428px] h-auto"
              src="/images/hero/denim-boy.png"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}


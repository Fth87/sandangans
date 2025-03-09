'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ArrowLeft } from 'lucide-react';
import ProgressIndicator from './progress-indicator';
import ReviewForm from './form-steps/review-detail';
import PersonalDetailsForm from './form-steps/personal-details';
import ItemDetailsForm from './form-steps/item-details';
import Image from 'next/image';

export type FormData = {
  personalDetails: {
    fullName: string;
    email: string;
    phoneNumber: string;
    shippingAddress: string;
  };
  items: Array<{
    id: number;
    name: string;
    type: string;
    fabricComposition: string;
    condition: string;
    quantity: number;
    images: string[];
  }>;
};

export default function DonationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    personalDetails: {
      fullName: '',
      email: '',
      phoneNumber: '',
      shippingAddress: '',
    },
    items: [
      {
        id: 1,
        name: 'Item 1',
        type: '',
        fabricComposition: '',
        condition: '',
        quantity: 1,
        images: [],
      },
    ],
  });

  const updatePersonalDetails = (details: typeof formData.personalDetails) => {
    setFormData((prev) => ({
      ...prev,
      personalDetails: details,
    }));
  };

  const updateItems = (items: typeof formData.items) => {
    setFormData((prev) => ({
      ...prev,
      items,
    }));
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setDirection(1);
  }, []);

  const handleStepChange = (newStep: number) => {
    setDirection(newStep > step ? 1 : -1);
    setStep(newStep);
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block w-2/3 bg-black ">
        <Image src={'/images/contribute/bg-form-contribute.jpg'} className="object-cover h-full object-right" alt={'background'} width={4470} height={3576} />
      </div>
      <div className="relative z-10 flex flex-col w-full  mx-auto py-8  overflow-hidden">
        {/* Back Button */}
        <button onClick={prevStep} className={`absolute top-4 left-4 text-white bg-brown p-2 rounded-full z-20 transition-opacity ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <ArrowLeft size={20} />
        </button>

        {/* Form Header */}
        <div className=" p-6 rounded-t-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-brown">Send Your Old Clothes</h1>
          <p className="text-center text-brown-700 mt-1 text-sm">Send us your pre-loved fashion, earn rewards, and help us close the loop on fashion waste.</p>

          {/* Progress Indicator */}
          <div className="mt-6">
            <ProgressIndicator currentStep={step} totalSteps={3} onStepClick={handleStepChange} />
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1  rounded-b-lg">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="h-full"
            >
              {step === 1 && <PersonalDetailsForm data={formData.personalDetails} updateData={updatePersonalDetails} onNext={nextStep} />}
              {step === 2 && <ItemDetailsForm items={formData.items} updateItems={updateItems} onNext={nextStep} onBack={prevStep} />}
              {step === 3 && <ReviewForm formData={formData} onSubmit={handleSubmit} onBack={prevStep} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

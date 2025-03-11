'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: 'What happens to unusable items?',
      answer: 'Less than 5% of items are unusable. These are shredded and recycled into industrial materials like insulation or cleaning rags through partnerships with eco-innovators. Nothing goes to landfills.',
    },
    {
      question: 'How is my voucher value calculated?',
      answer: "Voucher values are based on the item's condition, brand, and current market value. Premium brands and like-new conditions receive higher values.",
    },
    {
      question: 'How long does it take to receive my voucher after sending items?',
      answer: 'Usually within 5-7 business days after we receive your items. This includes inspection, processing, and voucher generation time.',
    },
    {
      question: 'Can I send damaged or stained clothing?',
      answer: 'Yes, we accept items with minor damage or stains. However, severely damaged items may receive lower voucher values or be redirected to recycling.',
    },
    {
      question: "What items do you accept, and what's rejected?",
      answer: 'We accept most clothing items, accessories, and shoes in any condition. We cannot accept items that are wet, moldy, or contaminated with hazardous materials.',
    },
  ];

  return (
    <section className="py-24 px-4" id="faq">
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brown-900 mb-4">FAQ</h2>
          <p className="text-brown-600">Your Questions, Answered</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-brown hover:text-brown-400">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-brown-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

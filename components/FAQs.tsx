"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import SlideReveal from "@/components/ui/slidereveal";
import Link from "next/link";

// Load custom fonts
const clashDisplay = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const clashDisplay2 = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Regular.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const FAQs = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <SlideReveal direction='up' duration={0.9}>
        <section
          className={`${clashDisplay.className} flex flex-col pt-10 px-6 sm:px-8 lg:pt-[80px] lg:px-12`}>
          <div className='flex flex-col items-center text-left'>
            <h1 className='text-[28px] sm:text-4xl lg:text-5xl text-black'>
              Questions People Ask Us
            </h1>
            <h4
              className={`${clashDisplay2.className} text-sm sm:text-lg lg:text-xl mt-4 text-gray-800 w-full sm:w-[80%] lg:w-[60%]`}>
              We know your time is precious, so we&apos;ve collected answers to
              some key questions you may have about working with us.
            </h4>
          </div>

          <div className='mt-8 sm:mt-12 flex flex-col sm:flex-row sm:justify-between'>
            {/* Accordion FAQ section */}
            <div className='w-full sm:w-[70%]'>
              <Accordion type='multiple' className='space-y-4'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='text-[#F56E0F] text-left text-[16px] sm:text-[18px] lg:text-[20px] font-medium'>
                    How long has Kulmi Digital been in business?
                  </AccordionTrigger>
                  <AccordionContent className='text-gray-700 text-[14px] sm:text-[16px] lg:text-[18px]'>
                    As an agency, we&apos;ve been delivering our expert digital
                    marketing service since 2018.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger className='text-[#F56E0F] text-[16px] sm:text-[18px] lg:text-[20px] font-medium'>
                    What services does Kulmi Digital offer?
                  </AccordionTrigger>
                  <AccordionContent className='text-gray-700 text-[14px] sm:text-[16px] lg:text-[18px]'>
                    We&apos;re an integrated digital marketing agency. Our
                    services include SEO, PPC & both Organic + Paid Social
                    Media, Content Marketing, Digital Strategy, and Data &
                    Analytics. We offer flexible digital marketing packages for
                    every business need.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger className='text-[#F56E0F] text-left text-[16px] sm:text-[18px] lg:text-[20px] font-medium'>
                    My business is located outside Kulmi&apos;s locale. Does
                    that matter?
                  </AccordionTrigger>
                  <AccordionContent className='text-gray-700 text-[14px] sm:text-[16px] lg:text-[18px]'>
                    Where your business is located doesn&apos;t really matter
                    when it comes to the work that we do. In fact, we work with
                    clients across Africa and globally. We arrange regular calls
                    and travel for face-to-face meetings as needed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-4'>
                  <AccordionTrigger className='text-[#F56E0F] text-[16px] sm:text-[18px] lg:text-[20px] font-medium'>
                    How do I get started with Kulmi Digital?
                  </AccordionTrigger>
                  <AccordionContent className='text-gray-700 text-[14px] sm:text-[16px] lg:text-[18px]'>
                    Getting started is simple. Get in touch via email, phone, or
                    by filling out a form on our website. We&apos;ll then
                    discuss your requirements and help you with a custom
                    solution tailored to your needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Contact section */}
            <div className='w-full sm:w-[20%] flex flex-col items-center bg-[#dddddd] py-6 sm:py-8 lg:py-12 rounded-[20px] mb-8 sm:mb-0'>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl text-black text-center'>
                More <br /> Questions? <br /> Reach out to <br /> us
              </h1>
              <Link
                className='mt-6 text-sm sm:text-[18px] lg:text-[20px] text-center w-[70%] p-4 rounded-[40px] flex items-center justify-center space-x-2 bg-[#F56E0F] text-white hover:bg-transparent border border-[#F56E0F]  hover:border-black hover:text-black'
                href='/contact'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <span>Get Started</span>
                {isHovered ? (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5'>
                    <path
                      d='M6 12H18M18 12L13 7M18 12L13 17'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox='0 0 1024 1024'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    className='w-5 h-5'>
                    <path d='M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z'></path>
                    <path d='M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z'></path>
                  </svg>
                )}
              </Link>
            </div>
          </div>
        </section>
      </SlideReveal>
    </>
  );
};

export default FAQs;

"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import React from "react";

const logos = [
  "/logos/apple.svg",
  "/logos/google.svg",
  "/logos/microsoft.svg",
  "/logos/amazon.svg",
  "/logos/meta.svg",
  "/logos/amazon.svg",
  "/logos/microsoft.svg",
  "/logos/google.svg",
  "/logos/apple.svg",
  "/logos/meta.svg",
  "/logos/microsoft.svg",
  "/logos/google.svg",
  "/logos/apple.svg",
  "/logos/meta.svg",
];

export default function LogoMarqueeSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Join Thousands of Schools Already Transforming Education
        </h2>

        {/* Marquee Section */}
        <div className="mt-20">
          <Marquee speed={50} gradient={false}>
            {logos.map((logo, i) => (
              <div key={i} className="mx-8 flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`logo-${i}`}
                  width={150}
                  height={60}
                  className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

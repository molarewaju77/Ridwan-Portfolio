import React, { useState } from "react";
import ridoxImg from "../assets/ridox.png";

const About = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ridorolukoya@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="mt-[100px] mb-[120px] mx-auto px-4 md:px-[60px]">
      {/* Title */}
      <h1 className="text-[40px] md:text-[40px] font-[400] text-[#191919] mb-[28px] tracking-tight">
        About me
      </h1>

      {/* Paragraphs */}
      <div className="space-y-6 text-[18px] md:text-[20px] leading-[1.6] text-[#191919] font-normal">
        <p>
          I am a multidisciplinary designer with over 7 years of experience in the design industry.
          My career journey began in graphic and print design, where I developed a strong foundation in
          visual communication and brand storytelling. Over time, I transitioned into Brand Identity
          design, expanded into frontend development, and eventually specialized in product/ux design.
        </p>
        <p>
          With a strong eye for detail and a passion for creativity, I create experiences that
          balance aesthetics with functionality. I believe great design goes beyond visuals; it is a
          powerful tool for solving complex problems, creating meaningful user experiences, and
          helping brands stand out in competitive markets. My approach combines strategic thinking,
          creativity, and user-centered design to build impactful and engaging digital and
          brand experiences.
        </p>
      </div>

      {/* Email & Copy Button */}
      <div className="mt-[32px] mb-[64px] flex items-center gap-2 text-[18px] md:text-[20px]">
        <span className="text-[#8B8A8A]">ridorolukoya@gmail.com</span>
        <button
          onClick={handleCopy}
          className="text-[#0066FF] hover:underline transition-all cursor-pointer font-medium"
        >
          {copied ? "copied!" : "copy"}
        </button>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center md:justify-end mb-[80px]">
        <img
          src={ridoxImg}
          alt="Ridwan Olukoya"
          className="max-w-full md:max-w-[560px] h-auto object-cover shadow-sm"
        />
      </div>

      {/* Work Experience Section */}
      <div className="border-t border-[#E5E5E5] pt-[48px] pb-[48px] grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-12">
        <div className="text-[#191919] text-[24px] font-normal lowercase md:col-span-1">
          work experience
        </div>
        <div className="md:col-span-2 space-y-8">
          {/* Edmoss Global */}
          <div className="space-y-1">
            <p className="text-[18px] font-semibold text-[#191919]">
              Edmoss Global LTD <span className="text-[#8B8A8A] font-normal">/ Product Designer</span>
            </p>
            <p className="text-[14px] text-[#191919]">
              Lagos, Nigeria | Jan 2023 – present
            </p>
          </div>

          {/* Agromall */}
          <div className="space-y-1">
            <p className="text-[18px] font-semibold text-[#191919]">
              AgroMall <span className="text-[#8B8A8A] font-normal">/ Product Designer</span>
            </p>
            <p className="text-[14px] text-[#191919]">
              Lagos, Nigeria | Oct 2024 – Feb 2025
            </p>
          </div>

          {/* Yayyu Lifestyle */}
          <div className="space-y-1">
            <p className="text-[18px] font-semibold text-[#191919]">
              Yayyu Lifestyle <span className="text-[#8B8A8A] font-normal">/ UIUX Designer</span>
            </p>
            <p className="text-[14px] text-[#191919]">
              Nigeria | Sep 2024 – Dec 2024
            </p>
          </div>

          {/* Kodek innovations */}
          <div className="space-y-1">
            <p className="text-[18px] font-semibold text-[#191919]">
              Kodek Innovations <span className="text-[#8B8A8A] font-normal">/ Content developer and eLearning content creator/ UIUX Design</span>
            </p>
            <p className="text-[14px] text-[#191919]">
              Lagos, Nigeria | Jul 2023 – Oct 2024
            </p>
          </div>

          {/* Argetam Technologies */}
          <div className="space-y-1">
            <p className="text-[18px] font-semibold text-[#191919]">
              Argetam Technologies <span className="text-[#8B8A8A] font-normal">/ Visual & Marketing Designer</span>
            </p>
            <p className="text-[14px] text-[#191919]">
              Freetown, Sierra Leone | 2021 – 2023
            </p>
          </div>

          {/* Ridolxskills */}
          <div className="space-y-1">
            <p className="text-[18px] font-semibold text-[#191919]">
              Ridolxskills <span className="text-[#8B8A8A] font-normal">/ Creative director</span>
            </p>
            <p className="text-[14px] text-[#191919]">
              Lagos, Nigeria | 2014 – Present
            </p>
          </div>
        </div>
      </div>

      {/* Companies Worked With Section */}
      <div className="border-t border-[#E5E5E5] pt-[48px] flex flex-col gap-6">
        <div className="text-[#191919] text-[24px] font-normal">
          Companies I've Worked With
        </div>
        <div className="text-[24px] md:text-[40px] font-[400] leading-[1.4] text-[#191919] tracking-tight">
          Edmoss Global, Kodek Innovations , Nile university, UBA, FCMB, Heritage Bank , Agromall ,Plover, SYUR, Monet, Aellpr, Ballot Money , Stokertim
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import AvatarImg from "../assets/ridwan.svg";
import { Link } from "react-router-dom";

import stockertimImg from "../assets/projects/stockertim.png";
import aellprImg from "../assets/projects/aellpr.png";
import ballotMoneyImg from "../assets/projects/ballotMoney.png";
import bloomingBetImg from "../assets/projects/bloomingBet.png";
import ploverImg from "../assets/projects/plover.png";
import ratioImg from "../assets/projects/ratio.png";
import spilmateImg from "../assets/projects/spilmate.png";
import syurImg from "../assets/projects/syur.png";

export const projects = [
  {
    id: 1,
    title: "Plover",
    year: "2025",
    description: "A Modern Digital Finance Platform for Smart Money Management",
    image: ploverImg,
    slug: "plover",
    link: "/work/plover",
  },
  {
    id: 2,
    title: "Stockertim",
    year: "2025",
    description:
      "Designed a Mobile-First Investment Education Platform for Everyday Investors",
    image: stockertimImg,
    slug: "stockertim",
    link: "/work/stockertim",
  },
  {
    id: 3,
    title: "betting platform",
    year: "2025",
    description: "Work in progress - Designing and Development",
    image: bloomingBetImg,
    slug: "betting-platform",
    link: "/work/betting-platform",
  },
  {
    id: 4,
    title: "Syur",
    year: "2023",
    description:
      "An app that allows users to invest and manage their Investment portfolio at a glance.",
    image: syurImg,
    slug: "syur",
    link: "/work/syur",
  },
  {
    id: 5,
    title: "Ballot Money",
    year: "2023",
    description:
      "Designed a web application that provides users with credit scores and enables them to borrow from lenders.",
    image: ballotMoneyImg,
    slug: "ballot-money",
    link: "/work/ballot-money",
  },
  {
    id: 6,
    title: "Ratio",
    year: "2025",
    description:
      "Transforming expense sharing among groups of friends, family and colleagues",
    image: ratioImg,
    slug: "ratio",
    link: "/work/ratio",
  },
  {
    id: 7,
    title: "Spilmate",
    year: "2023",
    description:
      "A convenient movie ticketing app designed for busy individuals, allowing them to book tickets online.",
    image: spilmateImg,
    slug: "spilmate",
    link: "/work/spilmate",
  },
  {
    id: 8,
    title: "Aellpr",
    year: "2023",
    description: "A Revolutionize peer to peer logistics mobile app",
    image: aellprImg,
    slug: "aellpr",
    link: "/work/aellpr",
  },
];

const Home = () => {
  return (
    <div className="mt-[140px]">
      <img src={AvatarImg} alt="" className="rounded-[50%]" />
      <p className="lg:text-[48px] text-[30px]">
        Hello👋🏼, I’m Ridwan Olukoya, A Product (UX) and Brand Identity Designer
        .
        <span className="text-[#8B8A8A]">
          {" "}
          Crafting User-Centered Experiences and Transforming Ideas into
          Seamless Interactions
        </span>
      </p>

      <div className="flex gap-5 mt-[34px] items-center">
        <button className=" bg-[#191919] text-white rounded-full px-[20px] py-[20px] flex items-center gap-2 text-[24px] ">
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2V10H2V2H12ZM13 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H13C13.2652 12 13.5196 11.8946 13.7071 11.7071C13.8946 11.5196 14 11.2652 14 11V7.5L18 11.5V0.5L14 4.5V1C14 0.734784 13.8946 0.48043 13.7071 0.292893C13.5196 0.105357 13.2652 0 13 0Z"
              fill="white"
            />
          </svg>
          Book a call
        </button>
        {/* Second Button - Circle on small, Pill on large */}
        <button className=" flex items-center bg-[#F4F4F4] text-[#191919] rounded-[24px] md:rounded-full w-[70px] h-[70px] md:w-auto md:h-auto md:px-8 md:py-5 justify-center flex items-center gap-2 text-[24px] transition-all active:scale-95">
          <svg
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0C15.7956 0 16.5587 0.316071 17.1213 0.87868C17.6839 1.44129 18 2.20435 18 3V15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.316071 16.5587 0 15.7956 0 15V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H15ZM15 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V15C2 15.2652 2.10536 15.5196 2.29289 15.7071C2.48043 15.8946 2.73478 16 3 16H15C15.2652 16 15.5196 15.8946 15.7071 15.7071C15.8946 15.5196 16 15.2652 16 15V3C16 2.73478 15.8946 2.48043 15.7071 2.29289C15.5196 2.10536 15.2652 2 15 2ZM5 7C5.24493 7.00003 5.48134 7.08996 5.66437 7.25272C5.84741 7.41547 5.96434 7.63975 5.993 7.883L6 8V13C5.99972 13.2549 5.90212 13.5 5.72715 13.6854C5.55218 13.8707 5.31305 13.9822 5.05861 13.9972C4.80416 14.0121 4.55362 13.9293 4.35817 13.7657C4.16271 13.6021 4.0371 13.3701 4.007 13.117L4 13V8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7ZM8 6C8.23419 5.99996 8.46097 6.08213 8.6408 6.23216C8.82062 6.3822 8.94208 6.59059 8.984 6.821C9.18542 6.70468 9.39344 6.60017 9.607 6.508C10.274 6.223 11.273 6.066 12.175 6.349C12.648 6.499 13.123 6.779 13.475 7.256C13.79 7.681 13.96 8.198 13.994 8.779L14 9V13C13.9997 13.2549 13.9021 13.5 13.7272 13.6854C13.5522 13.8707 13.313 13.9822 13.0586 13.9972C12.8042 14.0121 12.5536 13.9293 12.3582 13.7657C12.1627 13.6021 12.0371 13.3701 12.007 13.117L12 13V9C12 8.67 11.92 8.516 11.868 8.445C11.7933 8.35226 11.6904 8.28629 11.575 8.257C11.227 8.147 10.726 8.205 10.393 8.347C9.893 8.561 9.435 8.897 9.123 9.208L9 9.34V13C8.99972 13.2549 8.90212 13.5 8.72715 13.6854C8.55218 13.8707 8.31305 13.9822 8.05861 13.9972C7.80416 14.0121 7.55362 13.9293 7.35817 13.7657C7.16271 13.6021 7.0371 13.3701 7.007 13.117L7 13V7C7 6.73478 7.10536 6.48043 7.29289 6.29289C7.48043 6.10536 7.73478 6 8 6ZM5 4C5.26522 4 5.51957 4.10536 5.70711 4.29289C5.89464 4.48043 6 4.73478 6 5C6 5.26522 5.89464 5.51957 5.70711 5.70711C5.51957 5.89464 5.26522 6 5 6C4.73478 6 4.48043 5.89464 4.29289 5.70711C4.10536 5.51957 4 5.26522 4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4Z"
              fill="black"
            />
          </svg>
          Connect with me
        </button>
      </div>
      {/* my works div */}
      <div className="mt-[80px] mb-[120px]">
        <h2 className="text-[32px] mb-[32px]">My work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[20px] gap-y-[48px]">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col">
              {/* Image Container */}
              <div className="rounded-[12px] overflow-hidden bg-[#F4F4F4]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="mt-[16px]">
                <div className="flex items-center gap-2 text-[14px] text-[#8B8A8A] uppercase tracking-wider">
                  <span className="font-semibold text-black">
                    {project.title}
                  </span>
                  <span>/</span>
                  <span>{project.year}</span>
                </div>

                <p className="mt-[8px] text-[18px] text-[#191919] leading-tight">
                  {project.description}
                </p>

                <Link
                  to={project.link}
                  className="inline-flex items-center gap-1 mt-[12px] text-[14px] font-medium hover:underline"
                >
                  View project
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L11 1M11 1H3M11 1V9"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

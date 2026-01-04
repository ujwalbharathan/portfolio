"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import thumbnail from "../../components/assets/project1.png";
import thumbnail2 from "../../components/assets/project2.jpeg";
import thumbnail3 from "../../components/assets/project3.jpeg";
import thumbnail4 from "../../components/assets/project4.jpeg";
import thumbnail5 from "../../components/assets/project5.jpeg";
import thumbnail6 from "../../components/assets/project6.png";
import thumbnail7 from "../../components/assets/project7.png";
import thumbnail8 from "../../components/assets/project8.png";
import WorkSliderBtns from "../../components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Project Management System (PMS)",
    description:
      "Developed a comprehensive Project Management System designed to streamline project planning, execution, monitoring, and control. The system provides a centralised platform to manage resources, releases, sprints, and timesheets, ensuring efficient and successful project delivery.",
    stack: [
      { name: "Nest.js" },
      { name: "React" },
      { name: "RESTful APIs" },
      { name: "MongoDB" },
    ],
    image: thumbnail,
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Backend",
    title: "Tutorial App",
    description:
      "Developed an online course platform offering a structured learning experience with videos and text notes, featuring distinct user roles: super admin, institute, and student.",
    stack: [
      { name: "Keycloak" },
      { name: "Postgres" },
      { name: "RabbitMQ" },
      { name: "Microservices" },
    ],
    image: thumbnail2,
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Seaga Vending Machine Project",
    description:
      "Developed an inventory control solution, Scrub Station, providing secure access for authorized users to perform actions such as checkout, return, and product refills. The system includes both machine-side and web application components. ability to perform actions such as checkout, return, and product refills.",
    stack: [
      { name: "Next.js" },
      { name: "Redux" },
      { name: "Bootstrap" },
      // { name: ".NET" },
      { name: "IndexedDB" },
    ],
    image: thumbnail3,
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Frontend",
    title: "HiL10 Vending Machine",
    description:
      "Developed an application using React Native, integrated with REST API for data management, MQTT for real-time communication, and serial communication for hardware interactions. Enhanced the user interface to be dynamic and interactive, ensuring a seamless user experience.",
    stack: [
      { name: "React Native" },
      { name: "Redux" },
      // { name: "Bootstrap" },
      // { name: "CSS" },
      { name: "Serial Port Communication" },
      { name: "MQTT" },
    ],
    image: thumbnail4,
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Otohom Website",
    description:
      "Built a comprehensive Otohom website with an integrated admin panel. The admin panel allows for easy uploading and management of blogs and gallery images, which are dynamically reflected on the website. Ensured a user-friendly interface and smooth functionality, enhancing the overall user experience.",
    stack: [
      { name: "Next.js" },
      { name: "Redux" },
      { name: "Bootstrap" },
      { name: "CSS" },
      // { name: "TypeScript" },
      // { name: ".NET" },
    ],
    image: thumbnail5,
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "Backend",
    title: "Otohom Pro",
    description:
      "Developed REST APIs for a home automation app using a microservice architecture with Node.js.",
    stack: [{ name: "Node.js" }, { name: "Microservices" }],
    image: thumbnail6,
    live: "",
    github: "",
  },
  {
    num: "07",
    category: "Frontend",
    title: "Call Management Software",
    description:
      "Built and maintained cloud telephony and call management applications using Next.js. Implemented real-time features with Socket.IO, enabling live call updates and event-driven workflows. Integrated secure authentication using NextAuth with session handling and role-based access control.",
    stack: [{ name: "Next js"},{ name: "Node Js js" }],
    image: thumbnail7,
    live: "",
    github: "",
  },
    {
    num: "08",
    category: "Frontend",
    title: "Agent Mobile App",
    description:
      "Developed a mobile application using React Native, focusing on UI design, contact import, and media integration.Implemented push notifications to keep users informed of updates and activities",
    stack: [{ name: "React Native" }],
    image: thumbnail8,
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}

                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              {/* <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider defaultDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"></BsArrowUpRight>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider defaultDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"></BsGithub>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

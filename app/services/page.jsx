"use client";
import {BsArrowDownRight} from 'react-icons/bs'
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "Building comprehensive web applications using the MERN stack, ensuring seamless integration between frontend and backend technologies.",
    href: "",
  },
  {
    num: "02",
    title: "Frontend Development",
    description:
      "Creating responsive and dynamic user interfaces with React.js, focusing on performance, accessibility, and user experience.",
    href: "",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "Developing robust and scalable server-side applications with Node.js and Express.js, handling data operations and business logic efficiently.",
    href: "",
  },
  {
    num: "04",
    title: "API Development & Integration",
    description:
      "Designing and implementing RESTful APIs for data exchange between different systems, ensuring security and performance.",
    href: "",
  },
  {
    num: "05",
    title: "Database Design & Management",
    description:
      "Setting up and managing MongoDB databases, optimizing queries, and ensuring data integrity and security.",
    href: "",
  },
];


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return (
              <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                  <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                    <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                <p className='text-white/60'>{service.description}</p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

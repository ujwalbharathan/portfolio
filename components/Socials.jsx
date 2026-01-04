import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/anaswara-rajesh-u-177272217",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/Anaswara-Rajesh",
  },
  // {
  //   icon: <FaLinkedinIn />,
  //   path: "https://www.naukri.com/mnjuser/profile?id=&altresid",
  // },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

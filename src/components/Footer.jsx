import React from "react";
import FooterBg from "../assets/website/coffee-footer.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLink = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Reviews",
    link: "/#reviews",
  },
];

const bgImg = {
  backgroundImage: `url(${FooterBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImg} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5 ">
          {/* detail */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold font-gupter tracking-widest text-2xl sm:text-3xl"
            >
              Phakkapon Cafe ♥
            </a>
            <p className="pt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium atque nesciunt dolorum aspernatur maiores temporibus
              iste non, qui eligendi itaque eos, laudantium nisi iusto
              exercitationem consequuntur ab voluptatibus aliquam ut.
            </p>
            <a
              href="https://portfoliophakkapon.netlify.app/"
              target="blank"
              className=" inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full"
            >
              Visit my Portfolio Website
            </a>
          </div>
          {/* links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                FooterLink
              </h1>
              <ul className="space-y-3">
                {FooterLink.map((data, index) => {
                  return (
                    <li
                      key={index}
                      className="py-2 text-sm font-medium hover:text-white"
                    >
                      <a
                        href={data.link}
                        className=" inline-block hover:scale-105 duration-200"
                      >
                        {data.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLink.map((data, index) => {
                  return (
                    <li
                      key={index}
                      className="py-2 text-sm font-medium hover:text-white"
                    >
                      <a
                        href={data.link}
                        className=" inline-block hover:scale-105 duration-200"
                      >
                        {data.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className=" text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <p className=" mb-3 ">Phakkapon Pumpour, Thailand</p>
              <p className=" mb-3">phakkaponpumpour@gmail.com</p>
              <div className="space-x-3 mt-6">
                <a href="">
                  <FaFacebook className=" text-3xl inline-block hover:scale-105 duration-200" />
                </a>
                <a href="">
                  <FaInstagram className=" text-3xl inline-block hover:scale-105 duration-200" />
                </a>
                <a href="">
                  <FaLinkedin className=" text-3xl inline-block hover:scale-105 duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import detailImg from "../assets/coffee-white.png";
import BgTexture from "../assets/website/coffee-texture.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Detail = () => {
  return (
    <>
      <div style={bgImage} id="about">
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            {/* Image section */}
            <div data-aos="zoom-in">
              <img
                src={detailImg}
                alt="detailImg"
                className="max-w-[430px] w-full mx-auto spin drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] "
              />
            </div>
            {/* Text section */}
            <div
              className="flex flex-col justify-center gap-6 sm:pt-0"
              data-aos="fade-up"
            >
              <h1 className="text-3xl sm:text-4xl font-bold font-gupter">
                Premium Blen Coffee
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ex
                hic quibusdam distinctio in aliquam a, inventore unde temporibus
                sapiente adipisci facilis facere voluptates eius consequatur
                neque ratione quasi exercitationem.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                    <span>Premium Coffee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100" />
                    <span>Hot Coffee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GiFoodTruck className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                    <span>Cold Coffee</span>
                  </div>
                </div>
                <div
                  className="border-t-4 md:border-t-0 md:border-l-4 border-primary/50 pt-6 md:pt-0 md:pl-6 space-y-3"
                  data-aos="fade-right"
                >
                  <h1 className="text-2xl font-semibold font-gupter">
                    Tea Lover
                  </h1>
                  <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Beatae aliquid ullam perspiciatis est eligendi eaque tenetur
                    doloremque repellat voluptate quaerat consequuntur ea omnis
                    alias velit rerum, culpa ratione, expedita odio!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;

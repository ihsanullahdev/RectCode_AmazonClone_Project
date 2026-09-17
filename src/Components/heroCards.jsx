import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import image4 from "../assets/image-4.jpg";
import image5 from "../assets/image-5.jpg";

function Hero() {
  return (
    <>
      <div className="hero object-cover relative ">
        <img src="src/assets/background-image.jpg" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 -mt-10 md:-mt-24 md:-mt-32 ">
          {/* ====card 1 ==== */}
          <div className="bg-white p-5 shadow">
            <h2 className="text-lg font-bold mb-4 text-[#0F1111]">
              Elevate your everyday jewelry
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <img src={image1} />
                <p className="text-[12px] text-[#0F1111]">Van Cleef</p>
              </div>

              <div>
                <img src={image2} />
                <p className="text-[12px] text-[#0F1111]">Cartier</p>
              </div>

              <div>
                <img src={image3} />
                <p className="text-[12px] text-[#0F1111]">Tiffany</p>
              </div>

              <div>
                <img src={image4} />
                <p className="text-[12px] text-[#0F1111]">BVLGARI</p>
              </div>
            </div>

            <p className="text-[#2162A1] text-[14px] mt-4">Shop now</p>
          </div>

          {/* ====card 2 ==== */}

          <div className="bg-white p-5 shadow">
            <h2 className="text-lg font-bold mb-4 text-[#0F1111] ">
              Elevate your everyday jewelry
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <img src={image1} />
                <p className="text-[12px] text-[#0F1111]">Van Cleef</p>
              </div>

              <div>
                <img src={image2} />
                <p className="text-[12px] text-[#0F1111]">Cartier</p>
              </div>

              <div>
                <img src={image3} />
                <p className="text-[12px] text-[#0F1111]">Tiffany</p>
              </div>

              <div>
                <img src={image4} />
                <p className="text-[12px] text-[#0F1111]">BVLGARI</p>
              </div>
            </div>

            <p className="text-[#2162A1] text-[14px] mt-4">Shop now</p>
          </div>

          {/* ====card 3 ==== */}

          <div className="bg-white p-5 shadow">
            <h2 className="text-lg font-bold mb-4 text-[#0F1111] ">
              Elevate your everyday jewelry
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <img src={image1} />
                <p className="text-[12px] text-[#0F1111]">Van Cleef</p>
              </div>

              <div>
                <img src={image2} />
                <p className="text-[12px] text-[#0F1111]">Cartier</p>
              </div>

              <div>
                <img src={image3} />
                <p className="text-[12px] text-[#0F1111]">Tiffany</p>
              </div>

              <div>
                <img src={image4} />
                <p className="text-[12px] text-[#0F1111]">BVLGARI</p>
              </div>
            </div>

            <p className="text-[#2162A1] text-[14px] mt-4">Shop now</p>
          </div>

          {/* ==== card 4 ==== */}
          <div className="bg-white p-5 shadow">
            <h2 className="font-bold mb-4 text-[#0F1111]">
              Elevate your everyday jewelry
            </h2>

            <div className="grid ">
              <div>
                <img src={image1} className="w-[100%]" />
                <p className="text-[12px] text-[#0F1111] ">Van Cleef</p>
              </div>
              <p className="text-[#2162A1] text-[14px] mt-10">Shop now</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;

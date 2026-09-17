import amazonLogo from "../assets/amazon_logo.png";
import amazonIcon from "../assets/website icon.png";
import engFlag from "../assets/Eng-flag.png";

function FooterBottom() {
  return (
    <div className="bg-[#232f3e] border-t border-gray-600 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Amazon Logo */}
        <div className="text-white text-2xl font-bold">
          <img src={amazonLogo} className="w-25" />
        </div>

        {/* Selectors */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="border border-gray-500 text-gray-300 px-4 py-2 text-[14px] rounded flex items-center gap-2">
            <img src={amazonIcon} className="w-4" />
            English
          </div>

          <div className="border border-gray-500 text-gray-300 px-4 py-2 text-[14px] rounded flex items-center gap-2">
            $ USD - U.S. Dollar
          </div>

          <div className="border border-gray-500 text-gray-300 px-4 py-2 text-[14px] rounded flex items-center gap-2">
            <img src={engFlag} className="w-5" />
            United States
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;

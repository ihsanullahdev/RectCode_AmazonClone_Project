function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-2 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="w-30">
          <img src="src/assets/amazon logo.png" className="nav-hover" />
        </div>

        {/* Deliver */}
        <div className="hidden md:flex flex items-center gap-1 text-xs nav-hover">
          <img src="src/assets/location.png" className="w-7" />
          <div className="w-15">
            <span className="text-gray-400 text-[12px]">Deliver to </span>
            <span className="font-bold ml-0 text-[14px] ">Pakistan</span>
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-1 max-w-3xl border-3 border-transparent hover:border-[#FF9900] hover:rounded-xl ">
          <select className="bg-gray-200 text-black px-2 rounded-l-md text-sm">
            <option>All</option>
          </select>

          <input
            type="text"
            placeholder="Search Amazon"
            className="flex-1 px-3 text-black outline-none w-[100%] h-[40px] bg-white"
          />

          <button className="bg-[#F3A847] px-2 rounded-r-md ">
            <img src="src/assets/search-icon.png" className="w-8" />
          </button>
        </div>

        {/* Language */}
        <div className="hidden lg:flex items-center gap-1 nav-hover">
          <img src="src/assets/Eng-flag.png" className="w-7" />
          <span className="font-bold text-[14px]">EN</span>
          <img src="src/assets/arrow.png" className="w-2 mt-1 " />
        </div>

        {/* Account */}

        <div className="hidden md:flex flex-col text-[12px] nav-hover">
          <span>Hello, sign in</span>
          <div className="flex items-center ">
            <span className="font-bold text-[14px]">Account & Lists</span>
            <img src="src/assets/arrow.png" className="w-2 ml-1 " />
          </div>
        </div>

        {/* Orders */}
        <div className="hidden md:flex flex-col text-[12px] nav-hover">
          <span>Returns</span>
          <span className="font-bold text-[14px]">& Orders</span>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-1 nav-hover">
          <img src="src/assets/shopping-cart.png" className="w-6" />
          <span className="font-bold text-[14px]">Cart</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

function Subnavbar() {
  return (
    <div>
      <nav className="md:w-[100%] md:h-[45px] md:flex md:gap-2 bg-[#232F3E] hidden ">
        <ul className="flex gap-6 justify-center items-center text-white ">
          <div className="flex gap-2 ml-5 subNav-hover text-[14px]">
            <h2>All</h2>
            <span>&#9776;</span>
          </div>
          <li className="subNav-hover text-[14px]">
            <a href="#">Amazon Haul</a>
          </li>
          <li className="subNav-hover text-[14px]">
            <a href="#">Medical Care</a>
          </li>
          <li className="subNav-hover text-[14px]">
            <a href="#">Amazon Basics</a>
          </li>
          <li className="subNav-hover text-[14px]">
            <a href="#">Best Sellers</a>
          </li>
          <li className="subNav-hover text-[14px]">
            <a href="#">Book</a>
          </li>
          <li className="subNav-hover text-[14px]">
            <a href="#">Prime</a>
          </li>
          <li className="subNav-hover text-[14px]">
            <a href="#">Gift Cards</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Subnavbar;

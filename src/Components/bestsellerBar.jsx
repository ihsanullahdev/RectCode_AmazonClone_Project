import bestSeller1 from "../assets/bestSeller-1.jpg";
import bestSeller2 from "../assets/bestSeller-2.jpg";
import bestSeller3 from "../assets/bestSeller-3.jpg";
import bestSeller4 from "../assets/bestSeller-4.jpg";
import bestSeller5 from "../assets/bestSeller-5.jpg";
import bestSeller6 from "../assets/bestSeller-6.jpg";
import bestSeller7 from "../assets/bestSeller-7.jpg";
import bestSeller8 from "../assets/bestSeller-8.jpg";

function BestSeller() {
  return (
    <div className="bg-[#fff] p-6 mt-6">
      {/* Heading */}
      <h2 className="text-lg font-bold mb-4 ">Best Sellers in Books</h2>

      {/* Books Row */}
      <div className="flex gap-4 overflow-x-auto">
        <img src={bestSeller1} className="w-36" />
        <img src={bestSeller2} className="w-36" />
        <img src={bestSeller3} className="w-36" />
        <img src={bestSeller4} className="w-36" />
        <img src={bestSeller5} className="w-36" />
        <img src={bestSeller6} className="w-36" />
        <img src={bestSeller7} className="w-36" />
        <img src={bestSeller8} className="w-36" />
      </div>
    </div>
  );
}

export default BestSeller;

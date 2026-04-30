function BestSeller() {
  return (
    <div className="bg-[#fff] p-6 mt-6">
      {/* Heading */}
      <h2 className="text-lg font-bold mb-4 ">Best Sellers in Books</h2>

      {/* Books Row */}
      <div className="flex gap-4 overflow-x-auto">
        <img src="src/assets/bestSeller-1.jpg" className="w-36" />
        <img src="src/assets/bestSeller-2.jpg" className="w-36" />
        <img src="src/assets/bestSeller-3.jpg" className="w-36" />
        <img src="src/assets/bestSeller-4.jpg" className="w-36" />
        <img src="src/assets/bestSeller-5.jpg" className="w-36" />
        <img src="src/assets/bestSeller-6.jpg" className="w-36" />
        <img src="src/assets/bestSeller-7.jpg" className="w-36" />
        <img src="src/assets/bestSeller-8.jpg" className="w-36" />
      </div>
    </div>
  );
}

export default BestSeller;

function Recommendation() {
  return (
    <div className="flex justify-center py-8 bg-white mt-6">
      <div className="w-[100%] border-t border-b border-gray-300 text-center p-4 rounded ">
        <h2 className="text-lg font-semibold mb-4">
          See personalized recommendations
        </h2>

        <button className="bg-yellow-400 px-25 py-1 rounded-full tex-[14px]">
          Sign in
        </button>

        <p className="text-[12px] mt-3">
          New customer?
          <span className="text-blue-600 ml-1 cursor-pointer hover:underline text-[12px]">
            Start here.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Recommendation;

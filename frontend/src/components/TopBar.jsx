const TopBar = () => (
    <div className="flex flex-wrap justify-between gap-3 p-4">
      <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
        Your Automation Rules
      </p>
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal">
        <span className="truncate">+ New Rule</span>
      </button>
    </div>
  );
  
  export default TopBar;
  
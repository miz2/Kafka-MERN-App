const Tabs = ({ active }) => (
    <div className="flex border-b border-[#dbe0e6] px-4 gap-8">
      <a
        className={`flex flex-col items-center justify-center border-b-[3px] ${
          active === "list"
            ? "border-b-[#111418] text-[#111418]"
            : "border-b-transparent text-[#60758a]"
        } pb-[13px] pt-4`}
        href="#"
      >
        <p className="text-sm font-bold leading-normal tracking-[0.015em]">
          List View
        </p>
      </a>
      <a
        className={`flex flex-col items-center justify-center border-b-[3px] ${
          active === "card"
            ? "border-b-[#111418] text-[#111418]"
            : "border-b-transparent text-[#60758a]"
        } pb-[13px] pt-4`}
        href="#"
      >
        <p className="text-sm font-bold leading-normal tracking-[0.015em]">
          Card View
        </p>
      </a>
    </div>
  );
  
  export default Tabs;
  
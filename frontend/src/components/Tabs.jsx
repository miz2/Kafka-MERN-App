const Tabs = ({ active, setActive }) => (
  <div className="flex border-b border-[#dbe0e6] px-4 gap-8">
    <button
      className={`flex flex-col items-center justify-center border-b-[3px] ${
        active === "list"
          ? "border-b-[#111418] text-[#111418]"
          : "border-b-transparent text-[#60758a]"
      } pb-[13px] pt-4`}
      onClick={() => setActive("list")}
    >
      <p className="text-sm font-bold leading-normal tracking-[0.015em]">
        List View
      </p>
    </button>

    <button
      className={`flex flex-col items-center justify-center border-b-[3px] ${
        active === "card"
          ? "border-b-[#111418] text-[#111418]"
          : "border-b-transparent text-[#60758a]"
      } pb-[13px] pt-4`}
      onClick={() => setActive("card")}
    >
      <p className="text-sm font-bold leading-normal tracking-[0.015em]">
        Card View
      </p>
    </button>
  </div>
);

export default Tabs;

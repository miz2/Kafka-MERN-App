export const RuleCard = ({ title, trigger, imageUrl }) => (
    <div className="flex items-stretch justify-between gap-4 rounded-xl">
      <div className="flex flex-col gap-1 flex-[2_2_0px]">
        <p className="text-[#60758a] text-sm">Rule Name</p>
        <p className="text-[#111418] text-base font-bold">{title}</p>
        <p className="text-[#60758a] text-sm">{trigger}</p>
      </div>
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
  );
  
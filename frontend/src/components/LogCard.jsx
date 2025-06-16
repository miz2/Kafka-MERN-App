import IconWrapper from './IconWrapper';

const LogCard = ({ title, subtitle, icon }) => (
  <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
    <IconWrapper>{icon}</IconWrapper>
    <div className="flex flex-col justify-center">
      <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">{title}</p>
      <p className="text-[#60758a] text-sm font-normal leading-normal line-clamp-2">{subtitle}</p>
    </div>
  </div>
);

export default LogCard;

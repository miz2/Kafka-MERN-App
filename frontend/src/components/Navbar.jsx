import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <header className="flex items-center justify-between border-b border-[#f1f2f4] px-6 md:px-10 py-3">
      {/* Title */}
      <div className="flex items-center gap-2 text-[#121416] font-semibold text-lg">
        <svg className="size-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
            fill="currentColor"
          />
        </svg>
        <span>Automation Rules</span>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="p-2 rounded-xl bg-[#f8f8f8] hover:bg-[#f0f0f0]">
          <svg
            className="size-5 text-[#121416]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        {/* Avatar (logout on click) */}
        <div
          onClick={handleLogout}
          title="Click to logout"
          className="size-9 rounded-full bg-cover bg-center cursor-pointer hover:opacity-80 transition-opacity"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcLICt-3sNaBJZBSz1TD6SeWreEqY0DnBS-J9N_jzPH6UjSgj1J3EOrIgOGp_i0hfww2VzKx74GXbRSjl-l3JMcDUw67_7bxLNVSyJt3rQu53G2n6QNmm2e9svqVoRL-sPpPrKFjVQYvQkKG9xJG0906_MwuWjxxlQyQGYBD2WnxVrvSizzVFTJhOIaS8HPFoUQd0NDuh_zm1G6kFLRhj3sabA0-1W99yM4JCC7nqfnyFqCPEMpA0VhpW2Z73jC2Jnj-IDJ-PO9To")',
          }}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;

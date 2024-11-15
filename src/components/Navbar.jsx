import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="drawer sticky top-0 z-[1000]">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-[#F9FFF5] border-b w-full px-4 ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2 text-primary text-xl font-bold heading-font">
              <Link to={"/"}>
                GREEN<span className="text-neutral">INSIGHT</span>
              </Link>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal text-primary font-semibold">
                {/* Navbar menu content here */}
                <li className="hover:text-neutral">
                  <Link to={"/article"}>List Article</Link>
                </li>
                <li className="hover:text-neutral">
                  <Link to={"/login"}>Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-secondary min-h-full w-80 p-4 font-bold text-lg text-primary">
            {/* Sidebar content here */}
            <li className="hover:text-neutral">
              <Link to={"/article"}>List Article</Link>
            </li>
            <li className="hover:text-neutral">
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
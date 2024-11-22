// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPowerOff,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Loading } from "./Loading";
import logo from "../assets/images/logo.png";
import { userStore } from "../store/userStore";
export const WrapperDashboard = ({
  children,
  tabActive,
  itemTabActive = "",
}) => {
  const [isLoading, setIsloading] = useState(false);
  const {name} = userStore()
  console.log(name)
  const handleLogout = async () => {
    setIsloading(true);
    localStorage.removeItem("Autentication");
    localStorage.removeItem('name');
    window.location.href = "/login";
    setIsloading(false);
    return;
  };

  return (
    <>
      <>
        <div className="bg-secondary max-h-screen flex ">
          {/* Sidebar */}
          <div className="min-w-[17rem] min-h-screen md:block text-gray-700 border bg-secondary overflow-y-auto hidden">
            <div className=" text-center py-1">
              <Link to={"/"}>
                <img
                  src={logo}
                  alt=""
                  className="object-contain w-[11rem] mx-auto pt-5"
                />
              </Link>
            </div>
            <div className="text-lg">
              <h2 className="text-xl font-bold pt-4 pl-3">Home</h2>
              <>
                <ListMenuDashboard
                  text={"Dashboard"}
                  icon={faHouse}
                  href={"/dashboard"}
                  active={tabActive == "dashboard" ? true : false}
                />
                <ListMenuDropdown
                  text={"Content"}
                  icon={faTableList}
                  active={tabActive == "konten" ? true : false}
                >
                  <ItemListMenu
                    text={"Article"}
                    href={"/dashboard/content/article"}
                    active={
                      tabActive == "konten" && itemTabActive == "article"
                        ? true
                        : false
                    }
                  />
                </ListMenuDropdown>
                <div className="" onClick={handleLogout}>
                  <ListMenuDashboard
                    href={""}
                    icon={faPowerOff}
                    text={"Logout"}
                  />
                </div>
              </>
            </div>
          </div>

          <div className="drawer drawer-end font-[Public Sans] sticky top-0 z-[1000]">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col max-h-screen">
              {/* Navbar */}

              <div className="navbar bg-secondary w-full flex justify-between items-center md:px-7 border-b">
                {name && (
                  <div className="navbar-start flex-1 md:navbar-end">
                    <div className=" flex-row-reverse md:flex-row flex gap-2">
                      <h1 className="text-lg font-bold md:text-right text-primary">
                        {name}
                      </h1>
                    </div>
                  </div>
                )}

                {/* icon Burger button untuk tampilan mobile */}
                <div className="navbar-end flex-1 md:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current text-black"
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
              </div>

              <div className="max-h-screen overflow-y-auto">{children}</div>
              {/* Page content here */}
            </div>

            {/* Sidebar in Mobile device */}
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-3"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="min-w-[17rem] min-h-screen block text-primary border bg-gray-50 overflow-y-auto">
                <div className=" text-center py-1">
                  <img
                    src=""
                    alt=""
                    className="object-contain w-[11rem] mx-auto pt-5"
                  />
                </div>
                <div className="text-lg">
                  <>
                    <ListMenuDashboard
                      text={"Dashboard"}
                      icon={faHouse}
                      href={"/dashboard"}
                      active={tabActive == "dashboard" ? true : false}
                    />
                    <ListMenuDropdown
                      text={"Content"}
                      icon={faTableList}
                      active={tabActive == "konten" ? true : false}
                    >
                      <ItemListMenu
                        text={"Article"}
                        href={"/dashboard/konten/article"}
                        active={
                          tabActive == "konten" && itemTabActive == "article"
                            ? true
                            : false
                        }
                      />
                    </ListMenuDropdown>
                    <div className="" onClick={handleLogout}>
                      <ListMenuDashboard
                        href={""}
                        icon={faPowerOff}
                        text={"Logout"}
                      />
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
          {isLoading ? <Loading /> : ""}
        </div>
      </>
    </>
  );
};

const ListMenuDashboard = ({ text, icon, href, active = false }) => {
  return (
    <>
      <Link to={href}>
        <div
          className={`flex items-center justify-start py-4 pl-3 hover:bg-neutral hover:text-white ${
            active ? "bg-neutral text-white" : ""
          }`}
        >
          <FontAwesomeIcon icon={icon} />
          <p className="pl-3">{text}</p>
        </div>
      </Link>
    </>
  );
};

const ListMenuDropdown = ({ children, icon, text, active }) => {
  return (
    <div className={`collapse collapse-arrow`}>
      <input type="checkbox" />
      <div
        className={`flex collapse-title pl-3 items-center ${
          active ? "bg-neutral text-white" : ""
        }`}
      >
        <FontAwesomeIcon icon={icon} className="" />
        <p className="pl-3">{text}</p>
      </div>
      <ul className="collapse-content !pt-0">{children}</ul>
    </div>
  );
};

const ItemListMenu = ({ text, active = false, href }) => {
  return (
    <>
      <Link to={href}>
        <li
          className={`pl-4 px-2 pb-2 hover:border-l-2 hover:border-black ${
            active ? "border-l-2 border-neutral font-bold" : ""
          }`}
        >
          {text}
        </li>
      </Link>
    </>
  );
};

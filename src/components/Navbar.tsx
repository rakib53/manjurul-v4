import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between py-3 mt-3">
      <div>
        <ul className="flex items-center gap-1">
          <li>
            <NavLink
              to={"/"}
              className="py-2 px-4 font-rocMid text-base text-item hover:bg-white hover:text-black hover:rounded-md duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className="py-2 px-4 font-rocMid text-base text-item hover:bg-white hover:text-black hover:rounded-md duration-300"
            >
              My story
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className="py-2 px-4 font-rocMid text-base text-item hover:bg-white hover:text-black hover:rounded-md duration-300"
            >
              Project library
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className="py-2 px-4 font-rocMid text-base text-item hover:bg-white hover:text-black hover:rounded-md duration-300"
            >
              UI kits
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className="py-2 px-4 font-rocMid text-base text-item hover:bg-white hover:text-black hover:rounded-md duration-300"
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-item font-rocMid">Contact me</span>
        <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-primary">
          <svg
            stroke="#ffff"
            fill="#ffff"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="m268 112 144 144-144 144m124-144H100"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
}

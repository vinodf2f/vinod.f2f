import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { routes } from "../constants/routes";

function Header({ href }) {
  const router = useRouter();

  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="lg:px-16 px-6 bg-white lg:py-0 py-0 ">
      <div className="flex   py-2 md:py-24 md:justify-center ">
        <nav className=" flex-row md:justify-between ">
          <div
            className="bg-blue-300  rounded  md:hidden cursor-pointer"
            onClick={() => {
              toggleExpansion(!isExpanded);
            }}
          >
            menu
          </div>
          <ul
            className={
              isExpanded ? "block md:flex" : "hidden md:flex md:flex-row	"
            }
            x
          >
            {routes.map((route) => (
              <li className={`my-2 md:mx-10 md:my-0  `}>
                <Link href={route.route}>
                  <a>{route.title}</a>
                </Link>
                <div
                  className={`${
                    router.pathname === route.route &&
                    "h-1 w-14 bg-blue-400   transition "
                  }`}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const { id } = useParams();
  console.log(pathname);
  return (
    <nav>
      <ul className="flex gap-10 mt-10 text-lg">
        <li>
          <Link
            className={pathname === "/" ? "font-bold border-b-4" : ""}
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/about" ? "font-bold border-b-4" : ""}
            href={"/about"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/blogs" || pathname == `/blogs/${id}`
                ? "font-bold border-b-4"
                : ""
            }
            href={"/blogs"}
          >
            Blogs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

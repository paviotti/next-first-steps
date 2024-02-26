import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItens = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    // cria o menu texto para navegação
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      {/* coloca o menu na direita */}
      <div className="flex flex-1"></div>

      {navItens.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}

      {/* <Link className="mr-2" href="/about">
        {"About"}
      </Link>
      <Link className="mr-2" href="/pricing">
        {"Pricing"}
      </Link>
      <Link className="mr-2" href="contact">
        {"Contact"}
      </Link> */}
    </nav>
  );
};

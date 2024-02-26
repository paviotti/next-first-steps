"use client";
import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}
// ambos são obrigatórios, caso não seja, usar  (text?: string;)
export const ActiveLink = ({ path, text }: Props) => {
  // ilumina o link ativo
  const pathName = usePathname();

  return (
    <Link
      className={`${style.link} ${pathName === path && style["active-link"]}`}
      href={path}
    >
      {text}
    </Link>
  );
};

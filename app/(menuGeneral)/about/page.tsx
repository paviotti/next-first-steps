import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Page about my site",
  keywords: ["about, page", "Paviotti", "information of page"],
};

export default function AboutPage() {
  return <span className="text-7xl">About Page</span>;
}

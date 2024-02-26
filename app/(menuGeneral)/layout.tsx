import { Navbar } from "@/components";

export default function MenuGeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Secund Layout</span>
        {children}
      </main>
    </>
  );
}

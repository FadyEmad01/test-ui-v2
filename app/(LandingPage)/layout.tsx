import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      <Navbar />
      <main className='flex-1'>{children}</main>
      <Footer/>
      {/* <div className='before:animate-rainbow pointer-events-none absolute inset-0 h-24 w-full before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-4/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:opacity-20 before:[filter:blur(calc(4*1rem))]' /> */}
    </>
  );
}

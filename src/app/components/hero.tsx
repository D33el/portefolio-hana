import FractalTree from "./fractal";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import heroData from "@/data/hero.json";
import Link from "next/link";

export default function Hero({ lang }: { lang: "fr" | "eng" }) {
  const data = heroData[lang];
  return (
    <section id="hero" className="flex flex-col items-center px-5 sm:p-0">
      <FractalTree></FractalTree>
      <h1 className="text-4xl font-bold text-heading sm:text-7xl">
        Hi, it&apos;s <span className="text-primary">me</span>.
      </h1>
      <h2 className="text-center text-2xl sm:text-5xl">{data.subtitle}</h2>
      <p className="my-5 max-w-[600px] text-center text-lg sm:text-2xl">
        {data.description}
      </p>
      <Link
        className="rounded-md border border-primary p-5 text-2xl text-primary hover:bg-secondaryLight"
        href={`mailto:${data.email}`}
      >
        <EmailRoundedIcon className="mr-2"></EmailRoundedIcon>
        {lang === "fr" ? "Passer le bonjour" : "Say hello"}
      </Link>
    </section>
  );
}

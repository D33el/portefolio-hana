import Image from "next/image";
import Section from "./section";
import aboutData from "@/data/about.json";

export default function About({ lang }: { lang: "fr" | "eng" }) {
  const data = aboutData[lang];
  return (
    <Section id="about" title="A propos de moi">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr,.5fr] lg:grid-cols-[1fr,max-content]">
        <div className="flex flex-col gap-3 text-xl">
          <p className="">{data.technicPresentation}</p>
          <ul className="grid list-none grid-cols-[repeat(2,minmax(150px,10px))]">
            {data.technicSkills.map((sk) => (
              <li
                key={sk}
                data-before="▹"
                className="relative pl-5 before:absolute before:left-0 before:text-primary before:content-[attr(data-before)]"
              >
                {sk}
              </li>
            ))}
          </ul>
          <p>{data.secondaryPresentation}</p>
        </div>
        <Image
          src={"/img/hana.png"}
          width={300}
          height={300}
          alt=""
          className="hidden aspect-square rounded-full shadow-2xl sm:block"
        />
      </div>
    </Section>
  );
}

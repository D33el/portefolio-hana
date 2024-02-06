"use client";
import Image from "next/image";
import Section from "./section";
import { useState } from "react";
import experienceData from "@/data/experience.json";

export default function Experience({ lang }: { lang: "fr" | "eng" }) {
  const data = experienceData[lang];
  const [selectedTab, setSelectedTab] = useState(data[0].id);

  function handleTabChange(tab: number) {
    setSelectedTab(tab);
  }

  return (
    <Section id="experience" title="Mon expérience">
      <div className="grid grid-cols-[250px,1fr] gap-10">
        <nav className="">
          {data.map((d) => {
            return (
              <div
                key={d.id}
                className={`relative cursor-pointer px-5 py-2.5 text-xl font-thin ${selectedTab === d.id ? "after:absolute after:right-0 after:top-0 after:h-full after:border after:border-primary after:content-['']" : ""}`}
                onClick={() => handleTabChange(d.id)}
              >
                {d.title}
              </div>
            );
          })}
        </nav>
        {data
          .filter((d) => d.id === selectedTab)
          .map((d) => {
            return (
              <div key={d.title} className="">
                <h2 className="text-3xl text-heading">
                  {d.jobName}
                  {" - "}
                  <span className="text-primary">{d.title}</span>
                </h2>
                <h3 className="text-xl">{d.time}</h3>
                <ul className=" text-lg">
                  {d.description.map((ds) => {
                    return (
                      <li
                        key={ds}
                        data-before="▹"
                        className="relative mb-2 pl-5 before:absolute before:left-0 before:text-primary before:content-[attr(data-before)]"
                      >
                        {ds}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </Section>
  );
}

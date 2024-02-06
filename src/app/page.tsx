"use client";
import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import { useState } from "react";
import Projects from "./components/projects";
import Credits from "./components/credits";

export default function Home() {
  const [language, setLanguage] = useState<"fr" | "eng">("fr");
  function handleLanguage(lang: "fr" | "eng") {
    setLanguage(lang);
  }
  return (
    <div className=" bg-background">
      <Header onLanguageChange={handleLanguage} />
      <main className="flex flex-col items-center">
        <Hero lang={language} />
        <About lang={language} />
        <Experience lang={language} />
        <Projects lang={language} />
        <Credits lang={language} />
      </main>
    </div>
  );
}

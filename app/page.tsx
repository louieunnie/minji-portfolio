"use client";

import { useEffect, useState } from "react";
import Profile from "@/sections/Profile";
import Skills from "@/sections/Skills";
import Research from "@/sections/Research";
import Industry from "@/sections/Industry";
import Engineering from "@/sections/Engineering";
import Publication from "@/sections/Publication";
import Hero from "@/sections/Hero";

export default function Home() {
  const [lang, setLang] = useState<"ko" | "en">("en");

  // 처음 로딩 시 localStorage에서 언어 불러오기
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as "ko" | "en" | null;
    if (savedLang) setLang(savedLang);
  }, []);

  // 언어 바뀔 때마다 저장
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <main className="pt-16 max-w-5xl mx-auto px-4">
      <Hero />
      <Skills lang={lang} />
      <Research lang={lang} />
      <Industry lang={lang} />
      <Engineering lang={lang} />
      <Publication lang={lang} />
      <Profile lang={lang} />
    </main>
  );
}

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // 페이지 이동 시 모바일 메뉴 자동 닫기
  // (anchor 이동은 pathname 안 바뀌므로 영향 없음)
  if (open && typeof window !== "undefined") {
    // noop: 상태 유지를 위해 useEffect 대신 아래 방식 사용 안 함
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* 왼쪽: 이름 */}
        <div
          className="text-base sm:text-lg font-semibold font-sans tracking-tight cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
        >
          {/* 모바일 */}
          <span className="block sm:hidden">Minji Kim</span>

          {/* 데스크탑 */}
          <span className="hidden sm:block">
            Minji Kim’s Portfolio
          </span>
        </div>

        {/* 데스크탑 메뉴 */}
        <div className="hidden sm:flex gap-6 text-sm">
          <a href="#skills" className="hover:underline">SKILLS</a>
          <a href="#research" className="hover:underline">RESEARCH</a>
          <a href="#industry" className="hover:underline">INDUSTRY</a>
          <a href="#engineering" className="hover:underline">ENGINEERING</a>
          <a href="#publication" className="hover:underline">PUBLICATION</a>
          <a href="#profile" className="hover:underline">PROFILE</a>
        </div>

        {/* 모바일 햄버거 */}
        <button
          className="sm:hidden text-2xl"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* 모바일 메뉴 (토글) */}
      {open && (
        <div className="sm:hidden border-t bg-white">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm">
            <a href="#skills" onClick={() => setOpen(false)}>SKILLS</a>
            <a href="#research" onClick={() => setOpen(false)}>RESEARCH</a>
            <a href="#industry" onClick={() => setOpen(false)}>INDUSTRY</a>
            <a href="#engineering" onClick={() => setOpen(false)}>ENGINEERING</a>
            <a href="#publication" onClick={() => setOpen(false)}>PUBLICATION</a>
            <a href="#profile" onClick={() => setOpen(false)}>PROFILE</a>
          </div>
        </div>
      )}
    </header>
  );
}

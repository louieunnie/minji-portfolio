"use client";

type Props = {
  lang: "ko" | "en";
  setLang: (lang: "ko" | "en") => void;
};

const menus = [
  { id: "skills", label: "SKILLS" },
  { id: "research", label: "RESEARCH" },
  { id: "industry", label: "INDUSTRY" },
  { id: "engineering", label: "ENGINEERING" },
  { id: "publication", label: "PUBLICATION" },
  { id: "profile", label: "PROFILE" },
];

export default function Header({ lang, setLang }: Props) {
  return (
    <header className="fixed top-0 w-full bg-white border-b z-50">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* 왼쪽: 이름 */}
        <div
          className="text-lg font-bold font-serif cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Minji Kim's Portfolio
        </div>

        {/* 오른쪽: 메뉴 + 언어 토글 */}
        <div className="flex items-center gap-6">
          <div className="flex gap-6">
            {menus.map(menu => (
              <button
                key={menu.id}
                onClick={() =>
                  document
                    .getElementById(menu.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-base font-semibold hover:text-red-800"
              >
                {menu.label}
              </button>
            ))}
          </div>

          {/* 언어 토글 */}
          <button
            onClick={() => setLang(lang === "ko" ? "en" : "ko")}
            className="text-sm border px-2 py-1 rounded hover:bg-gray-100"
          >
            {lang === "ko" ? "EN" : "KR"}
          </button>
        </div>
      </nav>
    </header>
  );
}

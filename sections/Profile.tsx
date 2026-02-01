type Props = {
  lang: "en" | "ko";
};

export default function Profile({ lang }: Props) {
  const info = {
    ko: [
      { label: "이름", value: "김민지" },
      { label: "생년", value: "1999.12" },
      { label: "위치", value: "서울특별시 서대문구" },
      { label: "연락처", value: "010-5590-1082" },
      { label: "이메일", value: "mjluckk@gmail.com" },
      {
        label: "학력",
        value: [
          "홍익대학교 (컴퓨터공학부 학사, 2019-2024)",
          "연세대학교 (인공지능학과 석사, 2024-현재)",
        ],
      },
    ],
    en: [
      { label: "Name", value: "Minji Kim" },
      { label: "Birth", value: "1999.12" },
      { label: "Location", value: "Seodaemun-gu, Seoul" },
      { label: "Phone", value: "+82 10-5590-1082" },
      { label: "Email", value: "mjluckk@gmail.com" },
      {
        label: "Education",
        value: [
          "Hongik University -  Computer Engineering (B.E., 2019-2024)",
          "Yonsei University - Artificial Intelligence (M.S. 2024-Present)",
        ],
      },
    ],
  };
  const valueClass =
    lang === "en"
      ? "whitespace-normal break-words"
      : "whitespace-normal break-keep";

  return (
    <section id="profile" className="py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">
        PROFILE
      </h2>
      {/* 카드 */}
      <div className="max-w-3xl mx-auto rounded-2xl border border-gray-200 bg-white shadow-sm p-10">
        <div className="space-y-6">
          {info[lang].map((item, idx) => (
            <div key={idx} className="flex gap-6">
              {/* 라벨 */}
              <div className="w-28 shrink-0 font-semibold text-gray-800">
                {item.label}
              </div>

              {/* 값 */}
              <div className={`flex-1 text-gray-700 ${valueClass}`}>
                {Array.isArray(item.value)
                  ? item.value.map((v, i) => (
                      <p key={i} className="leading-relaxed">
                        {v}
                      </p>
                    ))
                  : (
                      <p>{item.value}</p>
                    )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
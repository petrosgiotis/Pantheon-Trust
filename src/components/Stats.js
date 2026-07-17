import { useLang } from "../context/LanguageContext";

export default function Stats() {
  const { t } = useLang();
  return (
    <div className="stats">
      {t.stats.map(s => (
        <div className="stat" key={s.label}>
          <div className="stat-n">{s.num}</div>
          <div className="stat-l">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

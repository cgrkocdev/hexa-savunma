import type { NextPageContext } from "next";

/**
 * Pages Router yedek hata sayfası. App Router kullanılsa bile Next, geliştirme
 * modunda bazı hata yollarında `/_error` bileşenini arar; proje içinde tanımlı
 * olmazsa `.next` bozulduğunda "missing required error components" döngüsüne
 * düşülebilir.
 */
type HexaPagesErrorProps = {
  statusCode?: number;
};

export default function HexaPagesError({ statusCode }: HexaPagesErrorProps) {
  return (
    <div
      style={{
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        padding: "2rem",
        maxWidth: "32rem",
        margin: "0 auto",
        lineHeight: 1.5,
      }}
    >
      <h1 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Beklenmeyen hata</h1>
      <p style={{ color: "#333", marginTop: "0.75rem" }}>
        {typeof statusCode === "number"
          ? `Sunucu ${statusCode} yanıtı. Ayrıntılar için geliştirme terminalindeki günlüğe bakın.`
          : "Sayfa yüklenirken bir hata oluştu."}
      </p>
      <p style={{ color: "#555", fontSize: "0.875rem", marginTop: "1.25rem" }}>
        Önbelleği temizleyip yeniden deneyin:{" "}
        <code style={{ background: "#eee", padding: "0.1rem 0.35rem" }}>
          npm run dev:clean
        </code>
      </p>
    </div>
  );
}

HexaPagesError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 500;
  return { statusCode };
};

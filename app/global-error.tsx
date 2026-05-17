"use client";

/**
 * Kök layout dışında oluşan hatalar için. Kendi html/body ile render edilir;
 * stil için yalnızca inline CSS — global CSS yüklenemese bile okunabilir kalsın.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          background: "#f6f8f7",
          color: "#0d1514",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <div style={{ maxWidth: "28rem", textAlign: "center" }}>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#5c6a66",
            }}
          >
            Kritik hata
          </p>
          <h1
            style={{
              margin: "0.75rem 0 0",
              fontSize: "1.5rem",
              fontWeight: 600,
            }}
          >
            Uygulama yüklenemedi
          </h1>
          <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#3d4a47" }}>
            Geliştirme ortamında{" "}
            <code style={{ background: "#e8eeec", padding: "0.15rem 0.35rem" }}>
              rm -rf .next
            </code>{" "}
            ardından{" "}
            <code style={{ background: "#e8eeec", padding: "0.15rem 0.35rem" }}>
              npm run dev
            </code>{" "}
            deneyin. Eski süreç takılı kaldıysa kullandığınız portu (ör. 3000)
            kapatıp yeniden başlatın.
          </p>
          {process.env.NODE_ENV === "development" ? (
            <pre
              style={{
                marginTop: "1rem",
                textAlign: "left",
                fontSize: "0.7rem",
                overflow: "auto",
                maxHeight: "8rem",
                background: "#fff",
                border: "1px solid #cfd8d4",
                padding: "0.5rem",
              }}
            >
              {error.message}
            </pre>
          ) : null}
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: "1.5rem",
              padding: "0.65rem 1.25rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#fff",
              background: "#0f7a72",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Yeniden dene
          </button>
        </div>
      </body>
    </html>
  );
}

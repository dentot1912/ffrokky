"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const total = 5000;
    const interval = 50;
    let elapsed = 0;

    const tick = setInterval(() => {
      elapsed += interval;
      setProgress(Math.max(0, 100 - (elapsed / total) * 100));
      setCountdown(Math.max(0, Math.ceil((total - elapsed) / 1000)));

      if (elapsed >= total) {
        clearInterval(tick);
        router.push("/");
      }
    }, interval);

    return () => clearInterval(tick);
  }, [router]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .nf-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #f5f5f7;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .nf-card {
          background: rgba(255,255,255,0.72);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 28px;
          padding: 3.5rem 3rem 3rem;
          max-width: 440px;
          width: 100%;
          text-align: center;
          box-shadow:
            0 2px 4px rgba(0,0,0,0.04),
            0 8px 24px rgba(0,0,0,0.06),
            0 32px 64px rgba(0,0,0,0.08);
        }

        .nf-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          background: linear-gradient(160deg, #e8e8ed 0%, #d1d1d6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.75rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.6);
        }

        .nf-eyebrow {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8e8e93;
          margin-bottom: 0.5rem;
        }

        .nf-heading {
          font-size: 2.25rem;
          font-weight: 600;
          letter-spacing: -0.03em;
          color: #1d1d1f;
          line-height: 1.15;
          margin-bottom: 0.875rem;
        }

        .nf-sub {
          font-size: 0.9375rem;
          font-weight: 400;
          color: #6e6e73;
          line-height: 1.65;
          margin-bottom: 2.25rem;
        }

        .nf-divider {
          height: 1px;
          background: rgba(0,0,0,0.08);
          margin-bottom: 2rem;
        }

        .nf-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.7rem 1.75rem;
          border-radius: 980px;
          background: #1d1d1f;
          color: #f5f5f7;
          font-size: 0.9375rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          letter-spacing: -0.01em;
          transition: background 0.2s ease, transform 0.15s ease;
          text-decoration: none;
          margin-bottom: 1.5rem;
        }

        .nf-btn:hover {
          background: #3a3a3c;
          transform: translateY(-1px);
        }

        .nf-btn:active {
          transform: translateY(0);
          background: #1d1d1f;
        }

        .nf-progress-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .nf-progress-bar {
          width: 100%;
          height: 3px;
          background: #e5e5ea;
          border-radius: 999px;
          overflow: hidden;
        }

        .nf-progress-fill {
          height: 100%;
          background: #1d1d1f;
          border-radius: 999px;
          transition: width 0.05s linear;
        }

        .nf-countdown-text {
          font-size: 0.8125rem;
          color: #8e8e93;
          font-weight: 400;
        }

        .nf-countdown-text span {
          font-weight: 600;
          color: #3a3a3c;
        }

        .nf-bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          pointer-events: none;
        }
      `}</style>

      <div className="nf-root">
        {/* Soft background accents */}
        <div
          className="nf-bg-blob"
          style={{
            width: 500,
            height: 500,
            background: "#c7c7cc",
            top: "-120px",
            right: "-80px",
          }}
        />
        <div
          className="nf-bg-blob"
          style={{
            width: 400,
            height: 400,
            background: "#d1d1d6",
            bottom: "-100px",
            left: "-60px",
          }}
        />

        <div className="nf-card">
          {/* Icon */}
          <div className="nf-icon-wrap">
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#48484a"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          {/* Copy */}
          <p className="nf-eyebrow">Error 404</p>
          <h1 className="nf-heading">Halaman Tidak Ditemukan</h1>
          <p className="nf-sub">
            Kamu mencoba mengakses sesuatu yang tidak diizinkan atau tidak
            tersedia. Mohon hormati privasi website ini.
          </p>

          <div className="nf-divider" />

          {/* CTA */}
          <button className="nf-btn" onClick={() => router.push("/")}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Kembali ke Beranda
          </button>

          {/* Progress */}
          <div className="nf-progress-wrap">
            <div className="nf-progress-bar">
              <div
                className="nf-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="nf-countdown-text">
              Otomatis kembali dalam <span>{countdown}</span> detik
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";

/**
 * A simple, dismissible banner shown on the Home page to inform users
 * that the website is under development.
 * - Persists dismissal in localStorage for subsequent visits.
 */
export default function UnderDevelopmentNotice() {
  // Show by default on every page load; closing only hides it until refresh.
  const [visible, setVisible] = useState(true);

  const dismiss = () => setVisible(false);

  if (!visible) return null;

  return (
    <div style={styles.backdrop} aria-hidden="false">
      <div
        style={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="udn-title"
        aria-describedby="udn-desc"
        onClick={(e) => e.stopPropagation()}
      >
        <div style={styles.header}>
          <h2 id="udn-title" style={styles.title}>Notice</h2>
          <button style={styles.closeBtn} onClick={dismiss} aria-label="Close">×</button>
        </div>
        <div id="udn-desc" style={styles.body}>
          The website is <strong>under development</strong>
        </div>
        <div style={styles.footer}>
          <button style={styles.primaryBtn} onClick={dismiss}>OK</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  backdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: 16,
  },
  modal: {
    width: "100%",
    maxWidth: 520,
    background: "#111827", // slate-900
    color: "#F9FAFB",
    borderRadius: 12,
    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
    border: "1px solid rgba(255,255,255,0.08)",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 16px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  title: {
    margin: 0,
    fontSize: 18,
    fontWeight: 700,
  },
  closeBtn: {
    background: "transparent",
    color: "#F9FAFB",
    border: "none",
    fontSize: 22,
    lineHeight: 1,
    cursor: "pointer",
    padding: 4,
  },
  body: {
    padding: 16,
    fontSize: 16,
  },
  footer: {
    padding: 16,
    display: "flex",
    justifyContent: "flex-end",
    gap: 8,
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },
  primaryBtn: {
    background: "#2563EB", // blue-600
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
};

// ─────────────────────────────────────────────
// Container.jsx
// A reusable layout wrapper used by EVERY section in the app.
// ─────────────────────────────────────────────

function Container({ children, className = '' }) {
  return (
    <div
      className={`mx-auto w-full ${className}`}
      style={{ maxWidth: '1100px', padding: '0 48px' }}
    >
      {children}
    </div>
  )
}

export default Container

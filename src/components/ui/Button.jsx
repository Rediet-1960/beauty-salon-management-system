// Reusable Button component — we will build this fully soon

function Button({ children, variant = 'primary', onClick, type = 'button' }) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

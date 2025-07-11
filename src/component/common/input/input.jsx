import "./Input.scss";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  className,
  disabled = false,
  textArea = false,
  error = "",
}) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      {textArea ? (
        <textarea
          disabled={disabled}
          className={`input ${className}`}
          name={name}
          rows={3} 
          value={value}
          onChange={(e)=>onChange(e.target.value)}
        />
      ) : (
        <input
          disabled={disabled}
          className={`input ${className}`}
          type={type}
          name={name}
          value={value}
          onChange={(e)=>onChange(e.target.value)}
        />
      )}
      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
};

export default Input;
type MyButtonProps = {
  type: "primary" | "secondary" | "tertiary",
  size: "large" | "medium" | "small",
  text: string
}

const MyButton: React.FC<MyButtonProps> = ({ type, size, text }) => {
  const sizeClass = {
    "large": "px-6 py-3 rounded-lg text-base font-bold",
    "medium": "1rem",
    "small": "0.5rem"
  }

  const typeClass = {
    primary: "bg-tertiary text-primary border-4 border-tertiary tracking-wide",
    secondary: "bg-primary text-tertiary border-4 border-tertiary tracking-wide",
    tertiary: "bg-primary text-tertiary tracking-wide hover:",
  };
  return (
    <button className={`${typeClass[type]} ${sizeClass[size]} `}>
      {text}
    </button>
  );
};

export default MyButton;
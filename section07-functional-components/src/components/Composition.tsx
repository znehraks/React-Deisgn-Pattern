/* eslint-disable @typescript-eslint/no-explicit-any */
type ButtonProps = {
  size: "small" | "large";
  color: string;
  text: string;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Button = ({ size, color, text, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

export const RedButton = (props: any) => {
  return <Button {...props} color="crimson" />;
};

export const GreenSmallButton = (props: any) => {
  return <Button {...props} color="green" size="small" />;
};

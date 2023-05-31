import "./label.css";

export interface Props {
  /**
   * content label text
   */
  text?: string;
  /**
   * Size control
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Color label
   */
  color?: "primary" | "secondary" | "accent";
  /**
   * All letter capitalize
   */
  capitalize?: boolean;
  /**
   * custom color
   */
  fontColor?: string;
}

const Label = ({
  text = "No text",
  size = "normal",
  color = "primary",
  capitalize,
  fontColor,
}: Props) => {
  const labelText = capitalize ? text.toLocaleUpperCase() : text;
  return (
    <span
      className={["label", size, `text-${color}`].join(" ")}
      style={{ color: fontColor }}
    >
      {labelText}
    </span>
  );
};

export default Label;

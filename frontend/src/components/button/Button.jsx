import "./button.scss";
const Button = ({ title, bg ,color}) => {
  return <button style={{ background: `var(${bg})`,color:`var(${color})`}}>{title}</button>;
};

export default Button;

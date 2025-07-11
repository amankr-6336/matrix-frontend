import PropTypes from "prop-types";
import classnames from "classnames";
import "./Button.scss";

function Button({
  type = "primary",
  size = "medium",
  className,
  disabled = false,
  icon,
  iconPosition = "left",
  onClick,
  children,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classnames("button", className, type,size, {
        "button-disabled": disabled,
      })}
    >
      {icon && iconPosition === "left" && (
        <span className="icon-left">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="icon-right">{icon}</span>
      )}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary","plain","border","secondary","fullWidth"]) ,
  icon: PropTypes.node, 
  size: PropTypes.oneOf(["small", "medium", "large"]),
  iconPosition: PropTypes.oneOf(["left", "right"]),
  className: PropTypes.string, 
  disabled: PropTypes.bool, 
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node, 
};

Button.defaultProps = {
  onClick: () => {}, 
  size: "medium",
};

export default Button;
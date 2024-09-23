import React from "react";

const Button = ({ name, isBeam = false, containerClass ,icon,
    position, handleClick}:{
        name: string;
        icon?: React.ReactNode;
        position?: string;
        isBeam?: boolean;
        containerClass?: string;
        handleClick?: () => void
    }) => {
  return (
    <button onClick={handleClick} className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex size-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
     {position === "left" && icon}
        {name}
        {position === "right" && icon}
    </button>
  );
};

export default Button;

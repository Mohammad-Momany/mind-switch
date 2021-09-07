import Mind_switch_logo from "../../images/logo_transparent.png";

import "./Logo.scss";

const Logo = () => {
  return (
    <div className="nav__logo__countiner">
      <img
        src={Mind_switch_logo}
        alt="Mind_switch_logo"
        className="nav__logo__countiner--image"
      />
    </div>
  );
};

export default Logo;

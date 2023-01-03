import React from "react";
import PropTypes from "prop-types";
import linkStyles from "./link.module.css";

const Link = ({ to, children, active }) => {
  return (
    <a
      href={to}
      className={`${linkStyles.link} ${active ? linkStyles.active : ""}`}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired, // todo понять, как сделать
  active: PropTypes.bool,
};

export default Link;

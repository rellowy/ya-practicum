import React from "react";
import ingredientShape from "../../../../types/ingredientShape";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerElementStyles from "./burger-element.module.css";
import PropTypes from "prop-types";

const BurgerElement = ({
  ingredient,
  text,
  elementType,
  isMain,
  handleClose,
}) => {
  const element = (
    <ConstructorElement
      type={elementType}
      isLocked={ingredient.type === "bun"}
      text={text}
      price={ingredient.price}
      thumbnail={ingredient.image}
      handleClose={handleClose}
    />
  );

  return (
    <li className={isMain ? BurgerElementStyles.draggableElement : "ml-8"}>
      {isMain && <DragIcon type="primary" />}
      {element}
    </li>
  );
};

BurgerElement.propTypes = {
  ingredient: ingredientShape.isRequired,
  elementType: PropTypes.oneOf(["top", "bottom"]),
  isMain: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onDrag: PropTypes.func,
  handleClose: PropTypes.func,
};

BurgerElement.defaultProps = {
  isMain: false,
};

export default BurgerElement;

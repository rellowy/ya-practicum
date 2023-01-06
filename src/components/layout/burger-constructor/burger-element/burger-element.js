import React, { useRef } from "react";
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
  onDragStart,
  onDrop,
  index,
}) => {
  const itemRef = useRef(null);

  const handleDragStart = () => {
    if (onDragStart) {
      onDragStart(index);
    }
  };

  const handleDrag = () => {};

  const handleDragEnd = () => itemRef.current.classList.remove("dragstart");

  const handleDragEnter = () => itemRef.current.classList.add("dragover");

  const handleDragLeave = () => itemRef.current.classList.remove("dragover");

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = () => {
    itemRef.current.classList.remove("dragover");
    if (onDrop) {
      onDrop(index);
    }
  };

  return (
    <li
      className={isMain ? BurgerElementStyles.draggableElement : "ml-8"}
      ref={itemRef}
      draggable={isMain}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {isMain && <DragIcon type="primary" />}
      <ConstructorElement
        type={elementType}
        isLocked={ingredient.type === "bun"}
        text={text}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={handleClose}
      />
    </li>
  );
};

BurgerElement.propTypes = {
  ingredient: ingredientShape.isRequired,
  elementType: PropTypes.oneOf(["top", "bottom"]),
  isMain: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
  handleClose: PropTypes.func,
  index: PropTypes.number,
};

BurgerElement.defaultProps = {
  isMain: false,
};

export default BurgerElement;

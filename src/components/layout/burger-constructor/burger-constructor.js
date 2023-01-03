import React from "react";
import PropTypes from "prop-types";
import ingredientShape from "../../../types/ingredientShape";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorStyles from "./burger-constructor.module.css";
import BurgerElement from "./burger-element/burger-element";

const BurgerConstructor = ({ ingredients }) => {
  let fullPrice = 0;

  const renderElement = (ingredient, idx, isMain = false) => {
    fullPrice += ingredient.price;

    let type,
      text = ingredient.name;
    if (ingredient.type === "bun") {
      if (idx === 0) {
        type = "top";
        text = `${text} (верх)`;
      } else if (idx === ingredients.length - 1) {
        type = "bottom";
        text = `${text} (низ)`;
      }
    }

    const key = `${ingredient._id}-${ingredient.type}-${idx}${
      isMain ? "-main" : ""
    }`;

    return (
      <BurgerElement
        key={key}
        ingredient={ingredient}
        text={text}
        elementType={type}
        isMain={isMain}
      />
    );
  };

  const elements = ingredients.map((ingredient, i) => {
    if (Array.isArray(ingredient)) {
      if (ingredient.length === 0) {
        return null;
      }
      const mainElements = ingredient.map((mainIngredient, j) =>
        renderElement(mainIngredient, j, true)
      );
      return (
        <ul
          key={"main-elements"}
          className={[
            BurgerConstructorStyles.elements,
            BurgerConstructorStyles.elementsMain,
          ].join(" ")}
        >
          {mainElements}
        </ul>
      );
    }
    return renderElement(ingredient, i);
  });

  return (
    <div className={BurgerConstructorStyles.container}>
      <ul className={BurgerConstructorStyles.elements}>{elements}</ul>
      <div className={[BurgerConstructorStyles.info, "mt-10"].join(" ")}>
        <span className={BurgerConstructorStyles.infoPrice}>
          {fullPrice}
          <CurrencyIcon type="primary" />
        </span>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={"ml-10"}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.arrayOf(ingredientShape), ingredientShape])
  ),
};

export default BurgerConstructor;

import React from "react";
import IngredientShape from "../../../../types/ingredientShape";
import CardStyles from "./card.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const IngredientCard = ({ ingredient, selectIngredient, count }) => {
  return (
    <div
      className={CardStyles.wrapper}
      onClick={() => selectIngredient(ingredient)}
    >
      {count > 0 && (
        <Counter count={count} size="default" extraClass={CardStyles.counter} />
      )}
      <img
        className={["ml-4", "mr-4"].join(" ")}
        src={ingredient.image}
        alt={"No image"}
      />
      <div className={[CardStyles.price, "mb-1", "mt-1"].join(" ")}>
        {ingredient.price}
        <CurrencyIcon type="primary" />
      </div>
      <div className={CardStyles.name}>{ingredient.name}</div>
    </div>
  );
};

IngredientCard.propTypes = {
  ingredient: IngredientShape,
  selectIngredient: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

IngredientCard.defaultProps = {
  count: 0,
};

export default IngredientCard;

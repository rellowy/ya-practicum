import React from "react";
import IngredientShape from "../../../../types/ingredientShape";
import CardStyles from "./card.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const IngredientCard = ({ ingredient, selectIngredient }) => {
  return (
    <div
      className={CardStyles.wrapper}
      onClick={() => selectIngredient(ingredient)}
    >
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
};

export default IngredientCard;

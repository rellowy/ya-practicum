import React from "react";
import PropTypes from "prop-types";
import ingredientShape from "../../../../types/ingredientShape";
import IngredientCard from "../card/card";
import SectionStyles from "./section.module.css";

const IngredientsSection = ({ type, ingredients, selectIngredient }) => {
  const mappingType = {
    bun: "Булки",
    sauce: "Соусы",
    main: "Начинки",
  };

  return (
    <div>
      <h2 id={type} className={SectionStyles.sectionName}>
        {mappingType[type] || "Неизвестный тип"}
      </h2>
      <ul
        className={[
          "pt-6",
          "pl-4",
          "pb-6",
          "pr-4",
          SectionStyles.ingredientWrapper,
        ].join(" ")}
      >
        {ingredients.map((ingredient) => (
          <li key={ingredient._id}>
            <IngredientCard
              ingredient={ingredient}
              selectIngredient={selectIngredient}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

IngredientsSection.propTypes = {
  type: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientShape).isRequired,
  selectIngredient: PropTypes.func.isRequired,
};

export default IngredientsSection;

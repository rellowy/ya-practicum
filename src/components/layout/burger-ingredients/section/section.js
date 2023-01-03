import React from "react";
import PropTypes from "prop-types";
import ingredientShape from "../../../../types/ingredientShape";
import IngredientCard from "../card/card";
import SectionStyles from "./section.module.css";

const IngredientsSection = ({ type, ingredients }) => {
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
      <div
        className={[
          "pt-6",
          "pl-4",
          "pb-6",
          "pr-4",
          SectionStyles.ingredientWrapper,
        ].join(" ")}
      >
        {ingredients.map((ingredient) => (
          <IngredientCard key={ingredient._id} ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
};

IngredientsSection.propTypes = {
  type: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientShape).isRequired,
};

export default IngredientsSection;

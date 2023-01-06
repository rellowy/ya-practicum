import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsStyles from "./burger-ingredients.module.css";
import ingredientShape from "../../../types/ingredientShape";
import IngredientsSection from "./section/section";

const BurgerIngredients = ({ ingredients, selectIngredient }) => {
  const [currentTab, setCurrentTab] = useState("bun");
  const scrollWrapperRef = useRef(null);

  /*
    объект объявлен заранее
    для вывода секций в нужном порядке
   */
  const typedIngredients = ingredients.reduce(
    (acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item);

      return acc;
    },
    {
      bun: [],
      sauce: [],
      main: [],
    }
  );

  const onTabClick = (value) => {
    setCurrentTab(value);
    const sectionName = document.getElementById(value);

    if (sectionName) {
      const scrollWrapperRefRect =
        scrollWrapperRef.current.getBoundingClientRect();

      const top = sectionName.offsetTop - scrollWrapperRefRect.top;

      scrollWrapperRef.current.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className={BurgerIngredientsStyles.container}>
      <div className={BurgerIngredientsStyles.tabs}>
        <Tab active={currentTab === "bun"} value={"bun"} onClick={onTabClick}>
          Булки
        </Tab>
        <Tab
          active={currentTab === "sauce"}
          value={"sauce"}
          onClick={onTabClick}
        >
          Соусы
        </Tab>
        <Tab active={currentTab === "main"} value={"main"} onClick={onTabClick}>
          Начинки
        </Tab>
      </div>
      <div
        ref={scrollWrapperRef}
        className={BurgerIngredientsStyles.scrollWrapper}
      >
        <div
          className={["pt-10", BurgerIngredientsStyles.ingredients].join(" ")}
        >
          {Object.entries(typedIngredients).map(([key, value]) => (
            <IngredientsSection
              key={key}
              type={key}
              ingredients={value}
              selectIngredient={selectIngredient}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientShape).isRequired,
  selectIngredient: PropTypes.func.isRequired,
};

export default BurgerIngredients;

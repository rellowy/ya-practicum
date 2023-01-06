import React, { useState } from "react";
import IngredientShape from "../../../../types/ingredientShape";
import CardStyles from "./card.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import Modal from "../../../ui/modal/modal";

const IngredientCard = ({ ingredient, selectIngredient, count }) => {
  const [isShowModal, setShowModal] = useState(false);

  const mappingInfo = {
    calories: "Калории,ккал",
    proteins: "Белки, г",
    fat: "Жиры, г",
    carbohydrates: "Углеводы, г",
  };

  return (
    <>
      <div
        className={CardStyles.wrapper}
        onClick={() => {
          setShowModal(true);
          selectIngredient(ingredient);
        }}
      >
        {count > 0 && (
          <Counter
            count={count}
            size="default"
            extraClass={CardStyles.counter}
          />
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
      <Modal show={isShowModal} handleClose={() => setShowModal(false)}>
        <Modal.Header>
          <h1>Детали ингредиента</h1>
        </Modal.Header>
        <Modal.Body>
          <div className={CardStyles.modalBody}>
            <img src={ingredient.image_large} alt={ingredient.name} />
            <h2 className={["mb-8", "mt-4"].join(" ")}>{ingredient.name}</h2>
            <section className={CardStyles.modalBodyInfoWrapper}>
              {Object.entries(mappingInfo).map(([key, value]) => (
                <article key={key} className={CardStyles.modalBodyInfo}>
                  <h6 className={CardStyles.modalBodyInfoTitle}>{value}</h6>
                  <span className={CardStyles.modalBodyInfoValue}>
                    {ingredient[key] || 0}
                  </span>
                </article>
              ))}
            </section>
          </div>
        </Modal.Body>
      </Modal>
    </>
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

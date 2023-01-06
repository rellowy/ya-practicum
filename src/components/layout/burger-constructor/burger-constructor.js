import React, { useState } from "react";
import PropTypes from "prop-types";
import ingredientShape from "../../../types/ingredientShape";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorStyles from "./burger-constructor.module.css";
import BurgerElement from "./burger-element/burger-element";
import Modal from "../../ui/modal/modal";
import OrderAcceptedIMG from "../../../images/order_accepted.png";

const BurgerConstructor = ({
  ingredients,
  handleClose,
  onDragStart,
  onDrop,
}) => {
  const [isShowModal, setShowModal] = useState(false);

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
        index={idx}
        handleClose={() => handleClose({ ingredient, idx })}
        onDragStart={(index) => onDragStart(index)}
        onDrop={(index) => onDrop(index)}
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
    <>
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
            onClick={() => setShowModal(true)}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
      <Modal show={isShowModal} handleClose={() => setShowModal(false)}>
        <Modal.Body>
          <div className={BurgerConstructorStyles.modalBodyWrapper}>
            <h1
              className={[BurgerConstructorStyles.orderNumber, "mb-8"].join(
                " "
              )}
            >
              034536
            </h1>
            <h3>Идентификатор заказа</h3>
            <img
              className={["mt-15", "mb-15"].join(" ")}
              src={OrderAcceptedIMG}
              alt={"Заказ принят"}
            />
            <span className={"mb-2"}>Ваш заказ начали готовить</span>
            <span style={{ color: "var(--text-inactive-color)" }}>
              Дождитесь готовности на орбитальной станции
            </span>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.arrayOf(ingredientShape), ingredientShape])
  ),
  handleClose: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
};

export default BurgerConstructor;

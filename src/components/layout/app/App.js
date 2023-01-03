import React, { useState } from "react";
import "./App.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { data, defaultBun } from "../../../utils/data";

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState([
    defaultBun,
    [],
    defaultBun,
  ]);

  const handleClose = ({ idx }) => {
    let newSelected = [...selectedIngredients];

    newSelected[1].splice(idx, 1);
    setSelectedIngredients(newSelected);
  };

  const selectIngredient = (ingredient) => {
    const main = selectedIngredients[1];
    let newSelected = [...selectedIngredients];
    if (ingredient.type === "bun") {
      newSelected = [ingredient, main, ingredient];
    } else {
      newSelected[1] = [...main, ingredient];
    }

    setSelectedIngredients(newSelected);
  };

  return (
    <>
      <AppHeader />
      <main className={"container"}>
        <h1 className={"mt-10 mb-5"}>Соберите бургер</h1>
        <div className={"burger-container"}>
          <BurgerIngredients
            ingredients={data}
            selectIngredient={selectIngredient}
          />
          <BurgerConstructor
            ingredients={selectedIngredients}
            handleClose={handleClose}
          />
        </div>
      </main>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { data, defaultBun } from "../../../utils/data";

const App = (props) => {
  const [selectedIngredients, setSelectedIngredients] = useState([
    defaultBun,
    [],
    defaultBun,
  ]);
  const [dragStartIndex, setDragStartIndex] = useState(null);

  const onDragStart = (index) => setDragStartIndex(index);

  const onDrop = (dropIndex) => {
    const mainIngredients = selectedIngredients[1];
    const dragItem = mainIngredients[dragStartIndex];

    let newMainIngredients = [...mainIngredients];
    newMainIngredients.splice(dragStartIndex, 1);
    if (dragStartIndex < dropIndex) {
      newMainIngredients = [
        ...newMainIngredients.slice(0, dropIndex - 1),
        dragItem,
        ...newMainIngredients.slice(dropIndex - 1, newMainIngredients.length),
      ];
    } else {
      newMainIngredients = [
        ...newMainIngredients.slice(0, dropIndex),
        dragItem,
        ...newMainIngredients.slice(dropIndex, newMainIngredients.length),
      ];
    }

    const newSelected = [...selectedIngredients];
    newSelected[1] = newMainIngredients;
    this.setSelectedIngredients(newSelected);
  };

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
            selectedIngredients={selectedIngredients}
          />
          <BurgerConstructor
            ingredients={selectedIngredients}
            handleClose={handleClose}
            onDragStart={onDragStart}
            onDrop={onDrop}
          />
        </div>
      </main>
    </>
  );
};

export default App;

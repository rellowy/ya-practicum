import React from "react";
import "./App.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import data from "../../../utils/data.json";

function App() {
  return (
    <>
      <AppHeader />
      <main className={"container"}>
        <h1 className={"mt-10 mb-5"}>Соберите бургер</h1>
        <div className={"burger-container"}>
          <BurgerIngredients ingredients={data} />
          <BurgerConstructor />
        </div>
      </main>
    </>
  );
}

export default App;

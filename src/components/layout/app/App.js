import React, { Component } from "react";
import "./App.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { data, defaultBun } from "../../../utils/data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIngredients: [defaultBun, [], defaultBun],
      dragStartIndex: null,
    };
  }

  onDragStart = (index) => this.setState({ dragStartIndex: index });

  setSelectedIngredients = (newSelected) =>
    this.setState({ selectedIngredients: newSelected });

  onDrop = (dropIndex) => {
    const dragStartIndex = this.state.dragStartIndex;
    const mainIngredients = this.state.selectedIngredients[1];
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

    const newSelected = [...this.state.selectedIngredients];
    newSelected[1] = newMainIngredients;
    this.setSelectedIngredients(newSelected);
  };

  handleClose = ({ idx }) => {
    let newSelected = [...this.state.selectedIngredients];

    newSelected[1].splice(idx, 1);
    this.setSelectedIngredients(newSelected);
  };

  selectIngredient = (ingredient) => {
    const main = this.state.selectedIngredients[1];
    let newSelected = [...this.state.selectedIngredients];
    if (ingredient.type === "bun") {
      newSelected = [ingredient, main, ingredient];
    } else {
      newSelected[1] = [...main, ingredient];
    }

    this.setSelectedIngredients(newSelected);
  };

  render() {
    return (
      <>
        <AppHeader />
        <main className={"container"}>
          <h1 className={"mt-10 mb-5"}>Соберите бургер</h1>
          <div className={"burger-container"}>
            <BurgerIngredients
              ingredients={data}
              selectIngredient={this.selectIngredient}
            />
            <BurgerConstructor
              ingredients={this.state.selectedIngredients}
              handleClose={this.handleClose}
              onDragStart={this.onDragStart}
              onDrop={this.onDrop}
            />
          </div>
        </main>
      </>
    );
  }
}

export default App;

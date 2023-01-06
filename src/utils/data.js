import data from "./data.json";

const defaultBun = data.find((ingredient) => ingredient.type === "bun");

export { data, defaultBun };

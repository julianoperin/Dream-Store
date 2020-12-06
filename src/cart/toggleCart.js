import { getElement } from "../utils.js";

// const getElement = (selection) => {
//     const element = document.querySelector(selection)
//     if (element) return element
//     throw new Error(`Please check "${selection}" selector, no such element exist`)
//   }

const toggleCartBtn = getElement(".toggle-cart");
const cartOverlay = getElement(".cart-overlay");
const closeCartBtn = getElement(".cart-close");

// Open the cart
toggleCartBtn.addEventListener("click", () => {
  cartOverlay.classList.add("show");
});

// Close the cart
closeCartBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});

export const openCart = () => {
  cartOverlay.classList.add("show");
};

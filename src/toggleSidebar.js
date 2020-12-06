import { getElement } from "./utils.js";

// const getElement = (selection) => {
//     const element = document.querySelector(selection)
//     if (element) return element
//     throw new Error(`Please check "${selection}" selector, no such element exist`)
//   }

const toggleNav = getElement(".toggle-nav");
const sidebarOverlay = getElement(".sidebar-overlay");
const closeBtn = getElement(".sidebar-close");

// Open Mobile View
toggleNav.addEventListener("click", () => {
  sidebarOverlay.classList.add("show");
  toggleNav.classList.add("rotate");
});
// Close Mobile View
closeBtn.addEventListener("click", () => {
  sidebarOverlay.classList.remove("show");
  toggleNav.classList.remove("rotate");
});

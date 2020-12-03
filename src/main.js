import "./scss/app.scss";

// global imports
import "./toggleSidebar.js";
import "./cart/toggleCart.js";
import "./cart/setupCart.js";
// specific imports
import fetchProducts from "./fetchProducts.js";
import { setupStore, store } from "./store.js";
import display from "./displayProducts";
import { getElement } from "./utils.js";

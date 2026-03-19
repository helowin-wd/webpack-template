import "core-js/stable"
import "regenerator-runtime/runtime"

import { createApp } from "vue";
import App from "./App.vue";
import './style.css'

const str = "Hello World"
console.log(str)

const arr = ["javascript", "typescript", "python"].map(item => item.toUpperCase())
console.log(arr)

createApp(App).mount("#app");
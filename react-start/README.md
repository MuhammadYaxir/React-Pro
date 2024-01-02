# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


06- Virtual Dom & Fibre

createRoot() method behind the scene creates the dom like structure, it compares its dom with main dom of browser and only update the things that are actually updated in ui.

Page reloading: Browser repaint the dom after updation called reloading of page.
But in virtual dom we can track the actual updated values

keys: to improve performance of list or arrays we use unique keys so that fibre algorithm(virtual dom) can understand which to change easily
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
;
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// common idea: https://dribbble.com/shots/20364660-Nibble-Health-Identity-Social-Posting
// carousel animation: https://codepen.io/aija/details/xvXWoK

let CHECKED = false;
document.addEventListener("pointerdown", (e) => {
	CHECKED = !CHECKED;
	document.documentElement.style.setProperty("--light", CHECKED ? 1 : 0);
});

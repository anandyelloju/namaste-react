import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namaste React!...🚀"),
    React.createElement("h2", {}, "I'm H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm H1 tag"),
    React.createElement("h2", {}, "I'm H2 tag"),
  ])
]);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

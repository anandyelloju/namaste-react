import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namste React using JSX 🚀
  </h1>
);

// Component Composition(component used in other component composition)
// {} - you can write any type of js code in this brackets
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namste React Functional Component 🚀</h1>
  </div>
);

// React Element
// const heading = (
//   <h1 className="head" tabIndex="5">
//     Namste React using JSX 🚀
//   </h1>
// );

// React Functional Component
// const HeadingComponent = () => (
//   <div id="container">
//     <h1 className="heading">Namste React Functional Component 🚀</h1>
//   </div>
// );

// React.createElement => Object => if render this obj then it is HTMLElement
// const heading = React.createElement("h1", { id: "heading" }, "Namste React 🙏");
// console.log(heading);

// JSX - HTML-like or XML-like syntax
// JSX - (transpiled before it reaches the JS Engine) - PAECEL - Bebel
// JSX => Bebel is transpiles to React.createElement => ReactElement - JS Object => HTMLElement
// const jsxHeading = <h1 id="heading">Namste React using JSX 🚀</h1>;
// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

/**
 *<div id="parent">
 *  <div id="child">
 *      <h1>I'm H1 tag</h1>
 *      <h2>I'm H2 tag</h2>
 *  </div>
 *  <div id="child2">
 *      <h1>I'm H1 tag</h1>
 *      <h2>I'm H2 tag</h2>
 *  </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm H1 tag"),
    React.createElement("h2", {}, "I'm H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm H1 tag"),
    React.createElement("h2", {}, "I'm H2 tag"),
  ])
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// ); //{} -> is used for give attributes.

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

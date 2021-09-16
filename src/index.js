// React;
// ReactDOM;
const Heading = require("./Heading");

const container = document.getElementById("root");

const element = React.createElement(
  Heading,
  {givenTitle: "div" },
  "это див",
  React.createElement("img", { className: "img" }, "a eto img")
);

ReactDOM.render(element, container);



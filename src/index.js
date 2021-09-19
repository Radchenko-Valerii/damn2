const imgWrapper = require("./Component");

const cont = document.getElementById("root");

const element = React.createElement(imgWrapper, {
  givenSrc:
    "https://upload.wikimedia.org/wikipedia/ru/f/f5/Logo_Serie_A_TIM_2019.png",
  givenAlt: "serie A",
});

ReactDOM.render(element, cont);

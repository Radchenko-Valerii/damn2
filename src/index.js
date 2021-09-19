// const imgWrapper = require("./Component");

// const cont = document.getElementById("root");

// const element = React.createElement(imgWrapper, {
//   givenSrc:
//     "https://upload.wikimedia.org/wikipedia/ru/f/f5/Logo_Serie_A_TIM_2019.png",
//   givenAlt: "serie A",
// });

// ReactDOM.render(element, cont);

// const Component = require("./component2");

import Component from "./component2";

const cont = document.getElementById("root");

const element = React.createElement(Component, {
  ulClass: "ul-class",
  liClass: "liclaSS",
  imageWrapperClass: "imgwrcl",
  imageClass: "imGcLaS",
  imageSrc:
    "https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",
  imageAlt: "me",
});

ReactDOM.render(element, cont);

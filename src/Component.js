
class imgWrapper extends React.Component {
  render() {
    const { givenSrc, givenAlt } = this.props;
    return React.createElement(
      "div",
      { className: "imgWrapper" },
      React.createElement("img", {
        className: "img",
        src: givenSrc,
        alt: givenAlt,
        title: givenAlt,
      })
    );
  }
}

module.exports = imgWrapper;




class Component extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const {
      ulClass,
      liClass,
      liText,
      imageWrapperClass,
      imageClass,
      imageSrc,
      imageAlt,
    } = this.props;
    return React.createElement(
      "ul",
      { className: ulClass },
      React.createElement(
        "li",
        {
          className: liClass,
        }, liText, 
        React.createElement(
          "div",
          { className: imageWrapperClass },
          React.createElement("img", { className: imageClass, src : imageSrc, alt : imageAlt}, )
          )
          )
          );
        }
      }
      
      // module.exports = Component;

      export default Component;
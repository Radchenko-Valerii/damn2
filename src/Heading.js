class Heading extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const {givenTitle, children} = this.props;
    return React.createElement(
      'div',
      { className: 'imgWrapper', title: givenTitle }, ...children
    );
  }
}

module.exports = Heading;

'use strict'; 
const header = React.createElement;

class navBar extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { isliked: false }; 
  } 
 
  render() { 
    if (this.state.isliked) { 
      return 'You just clicked on the nav bar'; 
    } 
 
    return header( 
      'nav',
      { onClick: () => this.setState({ isliked: true }) },
      'This is the Nav Bar' 
    ); 
  } 
} 
const navBarDomContainer = document.querySelector('#root'); 
ReactDOM.render(header(navBar), navBarDomContainer);
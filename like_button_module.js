'use strict'; 
const likeButton = React.createElement; 

class myButton extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { isliked: false }; 
  } 
 
  render() { 
    if (this.state.isliked) { 
      return 'Yes I Really Like This.'; 
    } 
 
    return likeButton( 
      'button', 
      { onClick: () => this.setState({ isliked: true }) }, 
      'Like Button' 
    ); 
  } 
} 
const domContainer = document.querySelector('#roottwo'); 
ReactDOM.render(likeButton(myButton), domContainer);
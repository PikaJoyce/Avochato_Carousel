import ReactDOM from 'react-dom';
import React from 'react'
import App from './components/Carousel.jsx'
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      show : true
    } 
    this.unmountChild = this.unmountChild.bind(this)
  }
  
  unmountChild(e) {
    e.preventDefault();
    this.setState({
      show : !this.state.show
    })
  }
  
  render(){
    return(
      <div>
        {this.state.show ? <App/> : null}
        <button onClick = {(e)=>this.unmountChild(e)}> Click to unmount</button>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))
// import React from 'react';
// import Carousel from './Carousel.jsx'

// export default class App extends React.Component {
//     constructor() {
//     super();
//     this.state = {
//       show : true
//     } 
//     this.unmountChild = this.unmountChild.bind(this)
//   }
  
//   unmountChild(e) {
//     e.preventDefault();
//     this.setState({
//       show : !this.state.show
//     })
//   }

//   render(){
//     if (this.state.show) {
//       return(
//         <div>
//           <Carousel/>
//           <button onClick = {(e)=>this.unmountChild(e)}> Click to unmount</button>
//         </div>
//       )
//     } else {
//       return(
//         <div>
//           <button onClick = {(e)=>this.unmountChild(e)}> Click to unmount</button>
//         </div>
//       )
//     }
//   }
// }


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";


class App extends React.Component {
  render() {
    return (
      <Carousel infiniteLoop autoPlay swipeable={false} thumbWidth={1}>
        <div>
          <img src="https://i.kym-cdn.com/entries/icons/original/000/009/803/spongebob-squarepants-patrick-spongebob-patrick-star-background-225039.jpg?crop=0.513xw:1.00xh;0.258xw,0&resize=480:*" />
        </div>
        <div>
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mocking-spongebob-1556133078.jpg?crop=0.513xw:1.00xh;0.258xw,0&resize=480:*" />
        </div>
        <div>
          <img src="https://i.kym-cdn.com/entries/icons/facebook/000/012/589/patrickstar.jpg?crop=0.513xw:1.00xh;0.258xw,0&resize=480:*" />
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/AeldQIpk2Ow/hqdefault.jpg?crop=0.513xw:1.00xh;0.258xw,0&resize=480:*" />
        </div>
        <div>
          <img src="" />
        </div>
      </Carousel>
    )
  }
}

export default App;
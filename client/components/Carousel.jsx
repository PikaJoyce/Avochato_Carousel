import React from 'react';
import { Carousel } from 'react-responsive-carousel';


const App = () => (
  <div style={{ padding: '10px', margin: 'auto-margin', fontSize: '1.5em' }}>
    <Carousel infiniteLoop autoPlay swipeable={false} thumbWidth={1}>
      <div>
        <img src="http://lorempixel.com/output/food-q-c-400-200-1.jpg" />
      </div>
      <div>
        <img src="http://lorempixel.com/output/food-q-c-400-200-2.jpg" />
      </div>
      <div>
        <img src="http://lorempixel.com/output/food-q-c-400-200-3.jpg" />
      </div>
      <div>
        <img src="http://lorempixel.com/output/food-q-c-400-200-4.jpg" />
      </div>
      <div>
        <img src="http://lorempixel.com/output/food-q-c-400-200-5.jpg" />
      </div>
    </Carousel>
  </div >
);

export default App;
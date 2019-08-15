# Avochato_Carousel
Please include a README file that briefly describes your thought process to completing the assignment. Reply via email with the URL of your github repository. The final product should be publically viewable at <repo name>.github.io and should be fully functional on mobile and desktop browsers.

## Part 1 
  For part 1 of this challenge, I opted to using a npm package. While writing a carousel from scratch would have been totally doable, I believe that the most time efficient way to build a carousel was using a package that allowed me to quickly build a single component. I chose to use lorempixel to get placeholder images from to keep all images consistent with one another.

## Part 2
  For part 2, I first began using jQuery to implement the carousel. However, I wanted to further challenge myself and create the carousel without using libraries. I then followed through with a vanilla javascript implementation of the carousel. Again, I used lorempixel in order to grab some place holder images from to keep image quality and sizing consistent.

## Part 3
  Unexpectedly, because I've never mixed more than just react into a single html, it took some time to figure out how to fit both carousels onto the dom safely. I first opted to splitting the html pages into two separate sheets and using anchor tags in order to access each carousel. This worked great in my local environment! But proved to have issues during deployment. I had to go back and figure out a way in order to fit them both onto the DOM without affecting each other. I then concluded that I can just have them live on seperate nodes,and use jQuery to hide divs. That way, I could have access to both carousels on a single html page safely. I proceeded to do some code clean up such as removing any components I wasn't using as well as running webpack under production mode in order to keep my bundle size smaller. 
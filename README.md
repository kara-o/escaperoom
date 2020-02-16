# Seattle Escape Room

### Abstract

Using what we learned in our Module Three curriculum at Flatiron School, we created a single page web app based on the popular Escape Room. Solve our Seattle-themed puzzles and beat the game!

The game was built using a Vanilla JS frontend and a Rails API backend. Two additional libraries were used - [Moment.js](https://momentjs.com/) and [Animate.css](https://daneden.github.io/animate.css/).

### How to Run

In your terminal navigate to the directory where you want to save the game files, then enter and run each step:

1. `git clone git@github.com:kara-o/escaperoom.git`
1. `cd escaperoom/escaperoom-backend/`
1. `bundle install`
1. `rails db:create && rails db:migrate && rails db:seed`
1. `rails s`
1. `open escaperoom/escaperoom-frontend/index.html`

### Screenshots

<p align="center">
<img src='./escaperoom-frontend/images/readme/screenshot1.png'>
<br>
<em>Login</em>
</p>
  
<p align="center">
<img src='./escaperoom-frontend/images/readme/screenshot2.png'>   
<br>
<em>Game narrative</em>
</p>
  
<p align="center">
<img src='./escaperoom-frontend/images/readme/screenshot3.png'>
<br>
<em>A recurring puzzle, use the clues to find your next puzzle location - drag the taxi there!</em>
</p>
  
<p align="center">
<img src='./escaperoom-frontend/images/readme/screenshot4.png'>
<br>
<em>One of the puzzles, put the map back together!</em>
</p>
  
<p align="center">
<img src='./escaperoom-frontend/images/readme/screenshot5.png'>
<br>
<em>End of game</em>
</p>

### Additional Contributors
+ [Ian](https://github.com/ianhunterharold)
+ [Brian](https://github.com/brianly27)

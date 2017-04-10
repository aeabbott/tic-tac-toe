[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic-tac-toe Project Client

Go tic tac toe!
 
 URL:
 
 Technologies Used:
 I used HTML, CSS, Javascript, jquery and Ajax within my files to build out the game. 
 
 Developement Process:
 I tried to spend the least amount of time on "look and feel" as possible and focus on functionality for the MVP release of my game. I started with creating the board and then moved onto getting the board to display and X when clicked first and then an 0 when clicked again.
 
 Next, I moved onto the game logic. The game logic took me a while to put together. To begin, I started with trying to valiate only one winning combination- the top row. Once I got the code working, where a top row with all Xs would pass the "win" test, then I moved onto getting the rest of the winning combinations. I had thought about making player one and player two have their own arrays and validating those arrays against a winning array each time, but after some time I realized that was unneccesarry work and ended up with the solution I have.
 
 After I got the game logic, I moved onto the authentication and then finally the storing of the game data on the backend. How to store the cells and values of the users's selections had me scratching my head for quite a whilte, but a huge aha momement occurred when I realized that I didn't have to change my game code to match the property names in the game object from the game API, but I could pass in my data as variables to for the object keys. 
 
 Unsolved Problems:
 
 If I had more time, I would have the landing page ask if the user has a user name already-if yes, the log in feature would show, if no the sign up feature would show which would navigate to the log in feature after. Right now, it is not very intuative because the sign up feature and the log in feature display at the same time. 
 
 I'd also like to put my change password and sign out feature in a nav bar to actually match my wireframes. I'd also like to move my buttons to more closely match my wireframes. 


User Stories:
As player one, I want to be 'X' so that I alway starts.
As player two, I want to be 'O' so that I will always go second.
As a player, I don't want player one or player two to be able to go twice in a row so that a fair game is played
As a player, once a winner is called, I want the game to present me with an option to play again so that I can play again.
As a player, if a cats game has occurred, I want the game to present me with an option to play again so that I can play again.
As a player, if I chose to play again, I want the board to be cleared so that I will be able to start clean.
As a player, I want the traditional rules of tic tac to be enforced(three in the row of either X or O will win the game) so that I will know how to play. Horizontal winning combinations.
As a player, I want the traditional rules of tic tac to be enforced(three in the row of either X or O will win the game) so that I will know how to play. Vertical winning combinations.
As a player, I want the traditional rules of tic tac to be enforced(three in the row of either X or O will win the game) so that I will know how to play. Dianogial winning combinations.
As a user, I want to be able to visually see if a "cat-game" has occured, so that I know that neither player 1 nor player 2 won.
As a user, I want to be able to create a username so that I can login into the game console.
As a user, I want to be able to log into the game console.
As a user, I want to be able to log out of the game console when I am finished so that no on else can play under my account.
As a user, I want to be able to update my password so that I have the liberty to change my password if I want to.
As a user, I want to see how many games I've played so that I can track my progress. 

Link to Wireframes:

http://imgur.com/a/GtCwT





## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

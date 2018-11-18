# Assignment 1

##### Team name:
### Group 44

##### Members:

### Gijs Groote  4483987
### Nicolas Plas 4689593


---
__Contents__
- 1. **HTTP request messages: GET/HEAD**
- 2. **HTTP request messages: PUT**
- 3. **Basic authentication**
- 4. **Web programming project: board game app**
- 5. **Design your own board game app**
- 6. **Your own board game app: HTML**
---

**1. HTTP request messages: GET/HEAD**

**1.1)** *
Write down the HTTP requests you made, the returned responses (e.g. a page has moved or is faulty) until you receive the contents of the Dutch rainfall radar page. Always use HEAD first to retrieve meta-­data about the resource.*

# Put your answer here nicolas.

als je telenet code hier in wil stoppen zou ik ddat zo doen als hieronder
```
this is an example nicolas
telnet code42.example.com 443
Trying 192.0.2.0...
Connected to code42.com.
Escape character is '^]'.
Connection closed by foreign host.
 ```

**1.2)** *
Does the content correspond to what you see when accessing the page with your browser? To check, save the response to a file, use .html as file ending and open it with your browser.*

**1.3)** *
What is the purpose of the X-UA-Compatible or the X-Cache tag in the header information (you should have seen one of the two or both - if you saw both, pick one to explain)?*

**1.4)** *
What does the page's Cache-Control directive mean?*

**2. HTTP request messages: PUT**

**2.1)** *
The Content-­length is exactly the number of characters (12 - we count the whitespace as well!) of Hello World!. What happens if the Content-length field is smaller or larger than the exact number of characters in the content?*


**3. Basic authentication**

**3.1)** *
First, open http://httpbin.org/basic-auth/user/passwd in your browser. You should see a dialogue, requesting username and password. Use user as username and passwd as password (it is just a coincidence that the actual username and password is the same as the URL path). Reload the web page -­ what happens now?*


**3.2** *
Now let's see how this works with actual HTTP messages. Start off with a HEAD method to inspect the web page and document all following steps (requests and responses):
Request the same page - what happens? Is the behavior the same as reloading the page in the browser? Explain why / why not.*


**4. Web programming project: board game app**

**4.1)** *
First of all, settle on the game you will implement in your team.*

We have choosen to create Battleship.

**4.2)** *
Find four examples of your chosen board game (in 2D) that can be played online in a modern browser (laptop or desktop, not a mobile device). Consider the web application's design (focus on the game screen) based on the web design principles covered in class. Record the game URLs. Which design aspects stand out positively and which stand out negatively? Make a screenshot of each example and annotate the good and the bad.*

#### Battleship example 1

![Battleship_Example_#1](https://img.bhs4.com/95/D/95D550FDD0C1DD4888B206C17857C36C26110B6B_lis.jpg)

[Battleship example 1 URL](https://www.alteredgamer.com/free-pc-gaming/99268-battleship-games-wage-a-naval-war-online/)

This game is beautifull. The look is just beatifull. It should be against a other player in an online game (and not a computer). The statics above come in handy, this will be implemented in hour game as well.

#### Battleship example 2

![Image](resources/battleshipExampleTwo.png)

[Battleship example 2 URL](http://nl.battleship-game.org/)

The functionality is there. However the css in the game could be a little more than just the basic grid. Also the statics are missing, how many times can i shoot where are my boats hit. Notice this is still in the setup of the game. The boats are not yet placed.

#### Battleship example 3

![Image](resources/battleshipExampleThree.png)

[Battleship example 3 URL](https://www.mathsisfun.com/games/battleship.html)

Great Looking game. It appears to be somewhere in between 2D and 3D. appart from being black and white the boats do look nice, the effectiveness of the board could be better. Only a part of the screen is part of the game. This should be extended to a larger portion of the screen.

#### Battleship example 4

![Image](resources/battleshipExampleFour.png)

[Battleship example 4 URL](https://www.mathplayground.com/battleship.html)

Even though the boats and colors look a bit basic. the game does feels old school. This is a good thing, battleship is an old game and the retro style should be amplified. Als well as example 3 the board could take up an larger amount of the screen.

**4.3)** *
Which game features in the examples of 4.2) stand out positively and which stand out negatively?*

Positive are the game colors, boats and grid should be properly styled css. Also the grid in which the boats are placed should be 'full screen' or at least take up a large amount of space. Statics do come in handy. They give you the feeling that you can play with a certain strategy.

Less positive (bad) aspects are black and white colors. These are just less comfortable to look at. The playground of the game should not be small. At least 50% of the screen widht and height should be part of the board game.

**5. Design your own board game app**

**5.1)** *
Create a design for the splash screen (also known as entry page): think of a name for your application, a short description & a logo. Feel free to use media (images, sound) with a Creative Commons license. You can start your resource search here.*

**5.2)** *
Create a design for the game screen, keeping the requirements listed above in mind as well as your findings in Exercise 4.3). You have a lot of artistic freedom in designing the board and game information.*

**5.3)** *
Once you have completed the design of your app, head over to CSE1500's 💡 Brightspace, go to Discussions and then the forum BOARD GAME APP DESIGNS. Create a thread with your team's name as subject/title (e.g. CSE234) and post your team's proposed splash screen and game screen. Feel free to also add a paragraph describing your choices.*

**6. Your own board game app: HTML** *
Similar to the course book, take your design as a starting point and create the respective two HTML documents. These documents should only contain HTML, no CSS or JavaScript. To get an idea on the expected amount of content, check game.html and splash.html of the demo board game. Ignore the few lines of code loading JavaScript and CSS files, these will be covered in Assignments 2 and 3 respectively.*

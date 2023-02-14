# What's Cookin'

## Table of Contents

  * [Abstract](#abstract)
  * [Set-Up Instructions](#set-up-instructions)
  * [Developers](#developers)
  * [Goals](#goals)
  * [Demonstration](#demonstration)
  * [Technologies Used](#technologies-used)
  * [Reflections](#reflections)
    + [Challenges](#challenges)
    + [Wins](#wins)
  * [Future Considerations](#future-considerations)
  * [Acknowledgements](#acknowledgements)

## Abstract
**What's Cookin'** is a web application designed to sort through a library of recipes/meals that can be used for purposes such as meal planning and grocery shipping. A user is able to filter through recipes using a search bar using the following criteria:
- By a recipe's tag
- By a recipe's name

A recipe's additional information can also be found by clicking on a recipe card. Additional information includes directions, ingredients needed, and total cost. This service works as a convenient way for a user to view and filter through detailed information of many types of dishes.

## Set-Up Instructions
1. Copy the following SSH link: `git@github.com:Lexyful/What-s-Cookin.git`
2. After determining one's desired installation location, open one's command line interpreter and run the following text into one's command line interpreter: `git clone git@github.com:Lexyful/What-s-Cookin.git`
3. Install NPM packages:
  i. Run `npm install` to install project dependencies.
  ii. Run `npm start` through the command line interpreter to see the HTML page.
4. Clone down the local API server by following the instructions listed [here](https://github.com/turingschool-examples/whats-cookin-api).
5. Enter `https://localhost:8080` in your web browser to view the web application.
  i. To stop the web application from running on one's local server, enter `CTRL + C` into one's command line interpreter.

## Developers
- [Bri Bourassa](https://github.com/BriBourassa)
- [Lexye Jordan](https://github.com/Lexyful)
- [Quynh Luu](https://github.com/quynhtlluu)
- [Joshua Martin](https://github.com/jmartin777)

## Goals
- Implement ES6 classes for the first time
- Use object and array prototype methods to perform data manipulation
- Create a dashboard that is easy to use and displays information in an accessible way for users
- Write code that follows SRP (Single Responsibility Principle).
- Use TDD to implement robust testing suites
- Make network requests to retrieve data using `.fetch()` and other methods

*More information can be found on [the official project specifications document](https://frontend.turing.edu/projects/whats-cookin-part-one.html).*

## Demonstration
Upon loading the web application's main interface, a user will see multiple recipes to check out. The user can then click on a recipe card and be re-directed to a section where information such as directions, ingredients needed, and total cost will be displayed. The user can exit out of seeing that information. Additionally, the user can also search for a recipe by a recipe's tag name or a recipe's full name.

## Technologies Used
- Javascript (ES5, ES6)
- [Node.js](https://nodejs.org/en/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

## Reflections
### Challenges
- Since this was the first time we all used API calls, we had some trouble making sure that certain data was being updated and displayed onto our web application. We first made sure our tests ran successfully using mock data before we learned how to connect APIs and the use of `Promise.all()`.
- We experienced merge conflicts when using Git and GitHub. There were times where we we would receive older version of the code that we desire when pulling from the main branch of our repository. We were able to resolve the issues by reviewing Git workflow practices determined by our program guidelines.
- There were times where all of us as developers had different approaches and tasks we desired to take on at a given time throughout the development of our project. We made sure to communicate major changes using our GitHub project board and had daily scheduled meetings to check in with one another through Zoom.
- We had some trouble delegating certain tasks. We spent the majority of the time together and that made it hard to accomplish every goal we wanted to.
- We had some issues with working with certain Javascript classes tied to our DOM.
- We had to work with with three other partners on integrating multiple data models and data manipulation techniques while making sure the code is modular and reusable has been a challenge.
- Writing tests in proper syntax that cover a variety of happy/path scenarios which test the code has been a great learning curve and added perspective into code architecture of a project. 
- Debugging and fixing any bugs or issues that have arise has been both challenging and rewarding considering the group dynamics / problem-solving as we progress with this project.

### Wins
- We were able to get our classes for our different pieces of information to display successfully onto the main interface of our web application.
- We were able to get network requests to run smoothly for the first time that any of our team members have ever implemented them into any project.
- We learned a lot about proper group communication especially when it comes to having productive and efficient meetings.
- We successfully added the GitHub project board feature to our workflow.
- We became much more comfortable with my class to class interaction. It became much easier to set up my classes and our overall abilities to work with a console and debug have improved as well.
- We learned fetch requests and how to use APIs. Practicing more class-to-class interaction and getting to do more unit tests was also very helpful.
- By participating in the development of this application, we were able to gain hands-on experience with new technologies and techniques such as ES6, object and array prototype methods, Fetch API, and Webpack. 
- Our success in implementing a functioning application and data-model has allowed us to enhance our skills in designing user interfaces and visualizing data, as well as ways to improve our abilities in data manipulation and integrating multiple data sources. 
- Our group work on modular reusable code, network requests and data retrieval has helped us to refine our skills problem-solve in these areas as a group, which is helping to make us collaborative and communicative software developers.

### Future Considerations
- Implement a more accessible website layout with now dynamic element sizing
- Refine the search feature so that it doesn't only take into consideration the exact phrasing of a term
- Modify the format of receiving instructions

## Acknowledgements
- Icons from [Icons8](https://icons8.com/) and [Flaticon](https://www.flaticon.com/)
- Background Images from [Unsplash](https://unsplash.com/)
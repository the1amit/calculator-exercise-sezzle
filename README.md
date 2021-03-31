<p align="center">
  <a href="https://calculator-app-a0783.web.app/" target="_blank">
    <img src="App Screenshot.png" alt="app_screenshot"/>
 </a>
</p>
<h1 align="center">Calculator App</h1>

<p align="center">This app logs calculation as they happen and shares those calculations with everyone connected to the app.
    <br> 
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Deployment](#deployment)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement <a name = "problem_statement"></a>

For example, user A and user B go to your app at the same time. User A calculates “5 + 5”, which equals “10". This is logged below the calculator as “5 + 5 = 10”. User B is updated about this calculation right after user A posts it. Now, user B calculates “3 x 4".This calculates to “12” and displays “3 x 4=12" right below the prior calculation. User A sees this update immediately after user B posts it.

Results should remain between sessions. Only show the last 10 calculations descending from most recent to oldest.

## 🚀 Deployment <a name = "deployment"></a>

This app's frontend is hosted on Firebase and backed on Heroku.

- [Click here for live app ](https://calculator-app-a0783.web.app/)

## 🎈 Usage <a name="usage"></a>

This app's UI is split into two.

- a calculator app - to perform calculations
- a calculations logs - shows logs of calculations

### How to use the App

- Click on numbers you want as your first value
- after that, click on the operator you wish to perform the operation. you will notice that the first value will display at the top left corner
- then click on your second value
- finally, click on the = and it will perform a calculation and display the result
- The whole equation will be log in the calculations logs as the calculation completes, and it will also update logs of everyone connected to the app.

### Input Conditions

- You cannot begin value with 0 to prevent silly errors such as divided by zero
- You cannot enter more than one decimal point "." if the value already has one decimal point, it won't take a second and simply ignore the clicking of "."

## ⛏️ Built With <a name = "tech_stack"></a>

- [Express](https://expressjs.com/) - Server Framework
- [React](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Socket.IO](https://socket.io/) - JavaScript library for realtime web applications

## ✍️ Authors <a name = "authors"></a>

- [@the1amit](https://github.com/the1amit) - Initial work

## 🎉 Acknowledgments <a name = "acknowledgments"></a>

- Inspiration
  - This Project is a part of Sezzle's hiring process.
- References

  - [Build a Calculator with React and Flexbox](https://www.youtube.com/watch?v=KzYUuTiHdiY)

  - [Real Time Data Sending with SocketIO](https://www.youtube.com/watch?v=9HFwJ9hrmls)

  - [Build A Simple Chat App With Socket.io And React](https://www.youtube.com/watch?v=CgV8omlWq2o)

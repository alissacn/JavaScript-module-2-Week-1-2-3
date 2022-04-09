/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout.


Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

let color = ["pink", "violet", "purple", "yellow"];
var i = 0;

function setBackGroundColor() {
    document.body.style.backgroundColor = color[i];
    i++;
    if(i > color.length - 1) {
        i = 0;
    }
};

setInterval(setBackGroundColor, 5000);


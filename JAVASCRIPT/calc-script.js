/**
 * Coder ACJHP
 * 30/06/2017
 */

//initialize global variable.
var screenText = "";
    
//Here we adding all functions into window loading to be ready to play :)
window.onload = function() {
    
    //we need to define some variables to get objects from our page 
    var calcKeys = document.querySelectorAll(".buttons span");
    var screen = document.querySelector(".screen");
    var clear = document.querySelector(".clear");
    
    /*
     * instead of adding listener to all buttons separately we will 
     *make it into for loop just one time for saving time and code.
    */
    for (var i = 0; i < calcKeys.length; i++) {
    	calcKeys[i].onclick = run;

    }
    
    //add listener to clear button.
    clear.addEventListener("click", function(){
	screen.innerHTML = "";
    });
    
    //main function that added to all buttons.
    function run(event) {
	
	var buttonValue = event.target.innerHTML;
	 
	if(buttonValue == "x") {
	    
	    //first append the new button value,
	    screen.innerHTML += buttonValue;
	    
	    //add the screen value to new variable to can be used,
	    screenText = screen.innerHTML;

	    //replace 'X' character with '*' this to work in eval function.
	    var regexPattern = screenText.replace("x", "*");

	    //and here change screen value with replaced string.
	    screenText = regexPattern;

	}else if(buttonValue == "=") {

	    //get result with eval() function and show it in screen.
	    screen.innerHTML = eval(screenText);
	    
	    //reset replaced string.
	    screenText = "";
	    
	}else{
	    //append value to both (screen and replaced string).
	    screen.innerHTML += buttonValue;
	    screenText += buttonValue;
	}
    	
    }
    
/*Clock*/    
var startTheClock = function() {    
    //define a variable to get the div object that used for clock
    var clockElem = document.querySelector(".clock");
    
    //create new date object
    var today = new Date();
    
    //create some variables to add day,hours, minutes, seconds,
    var dayHours = today.getHours();
    var dayMinute = today.getMinutes();
    var daySeconds = today.getSeconds();
    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var getDay = days[today.getDay()];
    
    var clock = [dayHours, dayMinute, daySeconds].join(":");
    
    if(dayHours < 12) {
	clockElem.innerHTML = clock + " AM" +"<br>" + getDay;
    }else {
	clockElem.innerHTML = clock + " PM" +"<br>" + getDay;
    }
    
    
}
//start the clock
startTheClock();

//repeat it every one second
setInterval(startTheClock, 1000);


}




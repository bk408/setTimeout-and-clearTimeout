console.log("This is tutorial 58 ");

// setTimeout  --> Allows us to run the function once after the interval of Time

// clearTimeout --> Allows us to run the function repeatedly after the interval of time 


// SetTimeout

function greet(name, byetext) {
    console.log("Hello Good morning " + name + " " + byetext);   // We can pass multiple arguments
}

//setTimeout(greet, 5000, "Bhavya" , "Take Care");

// or I can write this also

//setTimeout(() => {
//    greet();
// }, 5000);


// setTimeout(greet(), 2000);    --> Wrong as it is calling the function inside setTimeout


// Cleartimeout


// timeout = setTimeout(greet, 5000, "Bhavya" , "Take Care");           // to cancel the setTimeout 
// console.log(timeout);

// clearTimeout(timeout);



// Setinterval

// setInterval(greet, 2000, "Bhavya" , "Good night");

// intervalid = setInterval(greet, 2000, "Bhavya" , "Good night");
// clearInterval(intervalid);

function displayTime() {
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000);





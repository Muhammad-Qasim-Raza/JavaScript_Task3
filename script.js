var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var evenArray = [];
var oddArray = [];

for (var i = 0; i < numberArray.length; i++) {
  if (numberArray[i] % 2 === 0) {
    evenArray.push(numberArray[i]);
  } else {
    oddArray.push(numberArray[i]);
  }
}

// Display the results on the browser
document.write("Original Array: " + numberArray.join(', ') + "<br>");
document.write("Even Numbers: " + evenArray.join(', ') + "<br>");
document.write("Odd Numbers: " + oddArray.join(', ') + "<br>");
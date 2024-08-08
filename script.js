console.log("Script running...")
// Task 1: Hello button flow
// Select the 'Click me for hello' button
let button = document.getElementById("helloButton")
console.log(button)
// Select the empty p tag under that button
let pTag = document.querySelector("#helloText")
console.log(pTag)
// Add an event listener to the hello button such that when it's click, the p tag text says "Hello"

button.addEventListener("click", function(event){
 pTag.textContent="Hello"
})

// Task 2: All caps button flow
// Implement the DOM manipulation code flow such that when you click the all caps button, the text below becomes all caps (i.e. "THERE'S NO NEED TO SHOUT")
// Make sure to add whatever IDs/classes you need to select the necessary elements
let caps = document.querySelector("#caps")
let shout = document.querySelector("#shout")

caps.addEventListener("click", function(event){
shout.textContent = "THERE'S NO NEED TO SHOUT"
})











// Task 3: Dog image flow
// Implement the DOM manipulation code flow such that when your mouse is over the dog image, it shows happy-dog.jpeg and when it is off the dog image, it shows sad-dog.jpeg.
// Make sure to add whatever IDs/classes you need to select the necessary elements

let image = document.querySelector("#dogImage")

image.addEventListener(onmouseover,function(event) {
  img.src= "happy-dog.jpeg">
})
img.addEventListener(onmouseoff,function(event) {
  img.src= "sad-dog.jpeg">
})









// Task 4: Name input flow
// Implement the DOM manipulation code flow such that when you click the submit button, you display "Nice to meet you " with the value typed into the input field
// Make sure to add whatever IDs/classes you need to select the necessary elements










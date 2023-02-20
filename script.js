const btn = document.querySelector("#button"); // links the HTML elements to the JS 
const textBox = document.querySelector("#textBox");

btn.addEventListener("click", () => {
    textBox.value = ""
})


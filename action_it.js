function greet(){
    alert("Welcome to the dynamic world")
}

const buttonID =  document.getElementById("click");

buttonID.onclick=function(){
    alert("Button was clicked")
}

buttonID.onmouseover=function(){
    buttonID.style.color='red';
}

buttonID.onmouseout=function(){
    buttonID.style.color='yellow';
}

document.getElementById("clickbg").onclick=function(){
    document.body.style.backgroundColor='pink';
}

document.getElementById("toggleText").onclick = function () {
    let textElement = document.getElementById("text");

    if (textElement.innerHTML === "This is the first HTML, CSS, and Javascript Fusion") {
        textElement.innerHTML = "I am testing inline Javascript";
    } else {
        textElement.innerHTML = "This is the first HTML, CSS, and Javascript Fusion";
    }
};

document.getElementById("changeBg").onclick = function () {
    let colorInput = document.getElementById("colorInput").value.trim();
    let errorMessage = document.getElementById("errorMessage");
    let defaultMessage = document.getElementById("defaultMessage");
    let defaultColor = "lightblue";

    // Create a temporary element to test the color validity
    let testElement = document.createElement("div");
    testElement.style.color = colorInput;

    // If valid, change background; if invalid, show error but keep the current background
    if (colorInput === "") {
        // If input is empty, use default color and hide error message
        document.body.style.backgroundColor = defaultColor;
        defaultMessage.style.display = "block";
    } else if (testElement.style.color) {
        // If valid, change background and hide error message
        document.body.style.backgroundColor = colorInput;
        errorMessage.style.display = "none";
        defaultMessage.style.display = "none";
    } else {
        // If invalid, show error message but keep the current background
        errorMessage.style.display = "block";
    }
};

const colorInput = document.getElementById("colorPicker");
const colorValue = document.getElementById("colorValue");

colorInput.addEventListener("input", function() {
    document.body.style.backgroundColor = colorInput.value;
    colorValue.textContent = colorInput.value;
});
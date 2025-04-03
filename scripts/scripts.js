/****************** YOUR NAME: Mary Garcia ******************/

/****************** create variables ******************/
let modelName = "XYZ";  // Declare modelName once, here
let duration = 0;

/****************** helper function ******************/
function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let totalCost = 0;

    if (modelName === "XYZ") {
        totalCost = duration * 100;
    }
    else if (modelName === "CPRG") {
        totalCost = duration * 213;
    }

    costLabel.innerHTML = totalCost;
}

/****************** model button logic ******************/
let modelButton = document.getElementById("model-button");

function changeModel() {
    let modelText = document.getElementById("model-text");

    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    }
    else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate();
}

// Ensure modelButton exists before attaching the event listener
if (modelButton) {
    modelButton.addEventListener("click", changeModel);
}

/****************** duration button logic ******************/
let durationButton = document.getElementById("duration-button");

function changeDuration() {
    let durationText = document.getElementById("duration-text");
    let newDuration = prompt("Enter New Duration: ");

    duration = newDuration; // Store the result from the prompt directly

    durationText.innerHTML = parseInt(duration, 10);  // Update the displayed duration

    recalculate();
}

// Ensure durationButton exists before attaching the event listener
if (durationButton) {
    durationButton.addEventListener("click", changeDuration);
}

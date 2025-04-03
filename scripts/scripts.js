document.addEventListener("DOMContentLoaded", function () {
    /****************** create variables ******************/
    let modelName = "XYZ";
    let duration = 0;

    /****************** helper function ******************/
    function recalculate() {
        let costLabel = document.getElementById("calculated-cost");
        let totalCost = 0;

        // Calculate the total cost based on the modelName
        if (modelName === "XYZ") {
            totalCost = duration * 100;
        } else if (modelName === "CPRG") {
            totalCost = duration * 213;
        }

        // Update the calculated-cost element's innerHTML
        costLabel.innerHTML = totalCost;
    }

    /****************** model button logic ******************/
    let modelButton = document.getElementById("model-button");

    function changeModel() {
        let modelText = document.getElementById("model-text");

        // Toggle the modelName and update the model-text element
        if (modelName === "XYZ") {
            modelName = "CPRG";
            modelText.innerHTML = "Model CPRG";
        } else if (modelName === "CPRG") {
            modelName = "XYZ";
            modelText.innerHTML = "Model XYZ";
        }

        recalculate();
    }

    // Have function run automatically whenever the pseudo-button is clicked
    modelButton.addEventListener("click", changeModel);

    /****************** duration button logic ******************/
    let durationButton = document.getElementById("duration-button");

    function changeDuration() {
        let durationText = document.getElementById("duration-text");

        // Prompt the user for a new duration
        let newDuration = prompt("Enter New Duration: ");

        // Convert the input to an integer and update the duration
        duration = parseInt(newDuration);

        // Update the duration-text element and recalculate
        durationText.innerHTML = duration;
        recalculate();
    }

    durationButton.addEventListener("click", changeDuration);
});

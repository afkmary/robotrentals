document.addEventListener("DOMContentLoaded", function () {
    /****************** YOUR NAME: MARY GARCIA

    The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

    You are encouraged to use the provided naming convention for ease of review.

    */

    /****************** create variables ******************/
    let modelName = "XYZ";
    let duration = 0;

    /****************** helper function ******************/
    function recalculate() {
        let costLabel = document.getElementById("calculated-cost");
        let totalCost;

        if (modelName === "XYZ") {
            totalCost = duration * 100;
        } 
        else if (modelName === "CPRG") {
            totalCost = duration * 213;
        }

        // Update the total cost
        costLabel.innerHTML = totalCost; 
    }

    /****************** model button logic ******************/
    function changeModel() {
        let modelText = document.getElementById("model-text");

        if (modelName === "XYZ") {
            modelName = "CPRG";
            modelText.innerHTML = "Model CPRG";
        } else if (modelName === "CPRG") {
            modelName = "XYZ";
            modelText.innerHTML = "Model XYZ";
        }

        // Recalculate the cost after switching the model
        recalculate();
    }

    // Attach function to the "Switch Model" button
    let modelButton = document.getElementById("model-button");
    modelButton.addEventListener("click", changeModel);

    /****************** duration button logic ******************/
    function changeDuration() {
        let durationText = document.getElementById("duration-text");
        let newDuration = prompt("Enter a new duration (in days):");

        // Save the new duration and update the display
        duration = parseInt(newDuration);
        durationText.innerHTML = duration;

        // Recalculate the cost after updating the duration
        recalculate();
    }

    // Attach function to the "Change Duration" button
    let durationButton = document.getElementById("duration-button");
    durationButton.addEventListener("click", changeDuration);
});

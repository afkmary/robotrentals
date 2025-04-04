document.addEventListener('DOMContentLoaded', function() {
    // Create variables to hold the values for modelName and duration
    let modelName = "XYZ";
    let duration = 0;

    // Helper function to recalculate the total cost
    function recalculate() {
        let costLabel = document.getElementById("calculated-cost");
        let totalCost;
        if (modelName === "XYZ") {
            totalCost = duration * 100;
        } else if (modelName === "CPRG") {
            totalCost = duration * 213;
        }
        costLabel.innerHTML = totalCost;
    }

    // Model button logic
    let modelButton = document.getElementById("model-button");
    function changeModel() {
        let modelText = document.getElementById("model-text");
        
        if (modelName === "XYZ") {
            modelName = "CPRG";
            modelText.innerHTML = "Model CPRG";
        } else {
            modelName = "XYZ";
            modelText.innerHTML = "Model XYZ";
        }

        recalculate(); 
    }

    // Attach event listener to model button
    if (modelButton) {
        modelButton.addEventListener("click", changeModel);
    }

    // Duration button logic
  let isPrompted = false;

    function changeDuration() {
    if (isPrompted) return; // Prevent multiple prompts

    let durationText = document.getElementById("duration-text");
    let newDuration = prompt("Enter new duration: ");
    
    if (newDuration) {
        duration = parseInt(newDuration); // Ensure it's a number
        durationText.innerHTML = duration;
    }

    recalculate();
    isPrompted = true; // Mark as prompted to prevent subsequent triggers
}
    // Attach event listener to duration button
    if (durationButton) {
        durationButton.addEventListener("click", changeDuration);
    }
});

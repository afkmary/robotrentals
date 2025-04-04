if (!window.hasRunRobotScript) {
    window.hasRunRobotScript = true;

    document.addEventListener('DOMContentLoaded', function () {
        // Your code here
        let modelName = "XYZ";
        let duration = 0;

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

        let modelButton = document.getElementById("model-button");
        if (modelButton) {
            modelButton.addEventListener("click", function () {
                let modelText = document.getElementById("model-text");
                if (modelName === "XYZ") {
                    modelName = "CPRG";
                    modelText.innerHTML = "Model CPRG";
                } else {
                    modelName = "XYZ";
                    modelText.innerHTML = "Model XYZ";
                }
                recalculate();
            });
        }

        let durationButton = document.getElementById("duration-button");
        if (durationButton) {
            durationButton.addEventListener("click", function () {
                let newDuration = prompt("Enter new duration:");
                if (newDuration !== null) {
                    duration = parseInt(newDuration);
                    document.getElementById("duration-text").innerHTML = duration;
                    recalculate();
                }
            });
        }
    });
}

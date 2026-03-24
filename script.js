function convertTemp() {
            let degree = parseFloat(document.getElementById("degree").value);
            let from = document.getElementById("fromUnit").value;
            let to = document.getElementById("toUnit").value;
            let result;
            if (from === "C") {
                result = degree;
            }
            else if (from === "F") {
                result = (degree - 32) * 5 / 9;
            }
            else if (from === "K") {
                result = degree - 273.15;
            }
            if (to === "C") {
                result = result;
            }
            else if (to === "F") {
                result = (result * 9 / 5) + 32;
            }
            else if (to === "K") {
                result = result + 273.15;
            }

            document.getElementById("result").innerText = result.toFixed(2);
            document.getElementById("unit").innerText = "°" + to;
        }
const numbers = document.querySelectorAll('.buttons');
const result = document.getElementById('result');

numbers.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "=") {
            try {
                result.textContent = eval(
                    result.textContent.replace(/x/g, "*")
                );
            } catch {
                result.textContent = "Error";
            }

        } else if (value === "AC") {
            result.textContent = "";

        } else if (value === "Del") {
            result.textContent = result.textContent.slice(0, -1);
        }
         else if (value === "+/-") {
        let expr = result.textContent;

        let match = expr.match(/(-?\d+\.?\d*)$/);

        if (match) {
            let number = match[0];
            let toggled = number.startsWith("-")
                ? number.slice(1)
                : "-" + number;

            result.textContent = expr.slice(0, -number.length) + toggled;
        }
}
            else {
                result.textContent += value;
            }
        });
    });
let submit = document.getElementsByClassName("btn");
let wholesale = document.getElementById("wholesalePrice");
let btn = document.getElementById("btn");
let retail = document.getElementById("retail-price");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let results = {};
  let marginRates = [30, 32, 35, 37, 40, 45];

  marginRates.forEach(function (num) {
    rate = 1 - num / 100;
    result = wholesale.value / rate.toFixed(2);
    results[num] = result.toFixed(2);
  });
  createHTML(results);
});

function createHTML(results) {
  retail.innerHTML = `
        <tr>
            <td>30%</td>
            <td>$${results[30]}</td>
        </tr>
        <tr>
            <td>32%</td>
            <td>$${results[32]}</td>
        </tr>
        <tr>
            <td>35%</td>
            <td>$${results[35]}</td>
        </tr>
        <tr>
            <td>37%</td>
            <td>$${results[37]}</td>
        </tr>
        <tr>
            <td>40%</td>
            <td>$${results[40]}</td>
        </tr>
        <tr>
            <td>45%</td>
            <td>$${results[45]}</td>
        </tr>
    `;
}

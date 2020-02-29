
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    var loadCir = circles.map(drawCircle).join("");
    return `
            ${loadCir}
    `
}

function drawCircle(circ) {
    return `
        <div style ="width: ${circ.radius}px;
                     height: ${circ.radius}px;
                     background-color: ${circ.color};
                     border-radius: ${circ.radius}px;
                     margin: 5px auto;">
        </div>`
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}



function renderNametags(nametags) {
    var loadNameTags = nametags.map(drawNametag).join("");
    return `
        ${loadNameTags}
    `
}

function drawNametag(nametags) {
    return `
        <div style="border: solid 1px black; text-align: center; width: 400px; height: 150px;">
            <div class="header" style="background-color: blue; color: white;">
                <h2>Hello, my name is:</h2></div><br>
                <h2 style="margin: 0 auto;">${nametags}</h2>
        </div>
                                
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}

// <div class="text-center mt-5">
// <code>${JSON.stringify(nametags)}</code>
// </div>
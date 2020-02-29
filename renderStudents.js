
function renderStudents(students) {
    var loadAttend = students.map(drawAttend).join("");
    return `
        <h1 style="text-align:center; font-weight:bold;">Roll Call!</h1>
        ${loadAttend}
    `
}

function drawAttend(students) {
    return `
        
        <div style ="border: 1px solid black; text-align: center;">
            <h2>${students.name}</h2>
            <h4>${students.isPresent}</h4>
        </div>
    `
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}

//<div class="text-center mt-5">
//<code>${JSON.stringify(students)}</code>
//</div>
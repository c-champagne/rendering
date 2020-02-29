
function renderStudents(students) {
    function presentCheck(student) {
            if (student.isPresent != true) {
                return `
                <div style ="border: 1px solid black; text-align: center; width: 200px; height: 100px; margin: 10px auto; background-color: red;">
                <h2>${student.name}</h2>
                <h5>Absent</h5></div>`;
            } else {
                return `
                <div style ="border: 1px solid black; text-align: center; width: 200px; height: 100px; margin: 10px auto; background-color: lime;">
                <h2>${student.name}</h2>
                <h5>Present</h5></div>`;
            }
        }
    return `
        <h1 style="text-align:center; font-weight:bold;">Roll Call!</h1>
        ${students.map(presentCheck).join("")}
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
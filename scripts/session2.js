
function getGPA(){
    var studentName= prompt("Enter student name")

    var grade1= Number (prompt("Enter your grade for 101"))

    var grade2= Number (prompt("Enter your grade for 102"))

    var  gpa=(grade1+grade2)/2;

    var studentlist = document.getElementById("students")

    studentlist.innerHTML+= `
<div class="item">
    <p>Name: ${studentName}</p>
    <p>Grade 101: ${grade1}</p>
    <p>Grade 102: ${grade2}</p>
    <p>GPA: ${gpa}</p>
</div>
    `;
}
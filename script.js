function check() {
    var c = 0;
    var q1 = document.quiz.query1.value;
    var q2 = document.quiz.query2.value;
    var q3 = document.quiz.query3.value;
    var q4 = document.quiz.query4.value;
    var q5 = document.quiz.query5.value;
    var q6 = document.quiz.query6.value;
    var q7 = document.quiz.query7.value;
    var q8 = document.quiz.query8.value;
    var q9 = document.quiz.query9.value;
    var q10 = document.quiz.query10.value;
    var result = document.getElementById("showResult");
    var quiz = document.getElementById("quiz");

    if (q1 === "179") {
        c++
    }
    if (q2 === "Mette Frederiksen") {
        c++
    }
    if (q3 === "Carl Theodor Zahle") {
        c++
    }
    if (q4 === "Mattias Tesfaye") {
        c++
    }
    if (q5 === "Jakob Ellemann-Jensen") {
        c++
    }
    if (q6 === "Henrik Dam Kristensen") {
        c++
    }
    if (q7 === "1989") {
        c++
    }
    if (q8 === "75 år") {
        c++
    }
    if (q9 === "Christiansborg slot") {
        c++
    }
    if (q10 === "Danmarksdemokraterne") {
        c++
    }

    quiz.style.display = "none"
    result.textContent = `${c}`;

    if (c <= 7) {
        result.textContent = `Du fik ${c} rigtige. Det kan du gøre bedre! Reload siden og prøv igen.`;
    } else {
        result.textContent = `Du fik ${c} rigtige. Du er et geni!`;
    }
}
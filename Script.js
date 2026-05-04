function age() {
    let d1 = parseInt(document.getElementById('date').value);
    let m1 = parseInt(document.getElementById('month').value);
    let y1 = parseInt(document.getElementById('year').value);
  
    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();
    // validation
    if (new Date(y1, m1 - 1, d1) > today) {
        document.getElementById("age").innerHTML = "Birth date cannot be in the future! 😢😢";
        return;
    }

     // Empty check
    if (!d1 || !m1 || !y1) {
        document.getElementById("age").innerHTML = "Please enter your birth date";
        return;
    }

     // Leap year fix
    const isLeapYear = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
    let month = [31, isLeapYear(y2) ? 29 : 28, 31,30,31,30,31,31,30,31,30,31];

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;


    document.getElementById("age").innerHTML =
    `Your age is ${y} years ${m} months ${d} days  🎉🎉 `;
}




// console.log(`${myDay} , ${myMonth} , ${myYear}`);




function calcul() {
    var myDay = document.getElementById("day").value;
    var myMonth = document.getElementById("month").value;
    var myYear = document.getElementById("year").value;

    let date = new Date(myYear, myMonth - 1, myDay);
    let diffDate = new Date() - date;

    var y = Math.floor(diffDate / (1000 * 3600 * 24 * 30 * 12));
    var m = Math.floor((diffDate % (1000 * 3600 * 24 * 30 * 12)) / (1000 * 3600 * 24 * 30));
    var d = Math.floor((m % (1000 * 3600 * 24 * 30)) / (1000 * 3600 * 24));

    document.getElementById("yearInput").innerHTML = y;
    document.getElementById("monthInput").innerHTML = m;
    document.getElementById("dayInput").innerHTML = d;
  }
document.getElementById("year").setAttribute("max", new Date().getFullYear())


function calcul() {

  var myDay = parseInt(document.getElementById("day").value);
  var myMonth = parseInt(document.getElementById("month").value);
  var myYear = parseInt(document.getElementById("year").value);
  var currentDate = new Date();
  var inputDate = new Date(myYear, myMonth - 1, myDay);

  var diffDate = currentDate - inputDate;
  const oneYear = 1000 * 3600 * 24 * 30 * 12;
  const oneMonth = 1000 * 3600 * 24 * 30;
  const oneDay = 1000 * 3600 * 24;

  var y = Math.floor(diffDate / oneYear);
  var m = Math.floor((diffDate % oneYear) / oneMonth);
  var d = Math.floor(((diffDate % oneYear) % oneMonth) / oneDay);

  document.getElementsByTagName("span")[0].innerHTML = y;
  document.getElementsByTagName("span")[1].innerHTML = m;
  document.getElementsByTagName("span")[2].innerHTML = d;
}
 


function rerender() {

  var day = document.getElementById("day");
  var myMonth = parseInt(document.getElementById("month").value);
  var myYear = parseInt(document.getElementById("year").value);

  const myTable = [
    {
      months: [1, 3, 5, 7, 8, 10, 12],
      max: 31
    },
    {
      months: [4, 6, 9, 11],
      max: 30
    },
    {
      months: [2],
      max: (0 == myYear % 4) && (0 != myYear % 100) || (0 == myYear % 400) ? 29 : 28
    }
  ]
  myTable.forEach((e) => {
    if (e.months.includes(myMonth)) {
      if (parseInt(day.value) > e.max) {
        day.value = e.max
      }
      day.setAttribute("max", e.max)
    }

  })
}




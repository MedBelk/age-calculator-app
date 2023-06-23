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

  document.getElementById("yearInput").innerHTML = y;
  document.getElementById("monthInput").innerHTML = m;
  document.getElementById("dayInput").innerHTML = d;
}

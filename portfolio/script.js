
function button3(obj) {
    for (var i = 0; i < obj.length; i++) {
        document.getElementById([obj[i]]).style.display = 'none';
      }
}
function button2() {
    var a = document.getElementById("portfolioimages3")
    var y = document.getElementById("portfolioimages2")
    if (y.style.display === "none") {
        y.style.display = "block";
        a.style.display = "none";
      } else {
        a.style.display = "none";
      }
}
function button1() {
    var y = document.getElementById("portfolioimages2")
    var a = document.getElementById("portfolioimages3")
    if (a.style.display === "none") {
        a.style.display = "block";
      } else {
        y.style.display = "none";
      }
}
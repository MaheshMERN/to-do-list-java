
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}

function newElement() {
   

var target = document.getElementById("int").value;
var li = document.createElement("li")
var t = document.createTextNode(target);
var text = document.getElementById("list1");
li.appendChild(t);

document.getElementById("list1").appendChild(li);

document.getElementById("int").value = "";

for (i = 0; i < close.length; i++){
   close[i].onclick = function () {
      var div = this .parentElement;
      div.style.display = "none";
   }
}

function removeAll() {
   var lst = document.getElementById("list1");
   lst[0].innerHTML = "";
}
}


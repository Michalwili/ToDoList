// "X" for each new <li>
var myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// cross out 
var list = document.querySelectorAll('ul > li');
for (let n = 0; n < list.length; n++) {
  list[n].onclick = function() {
      var div = this
      div.classList.toggle("checked");
    }
}

// remove <li> elements
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove()
    }
  }


// ----------------------------creating elements for each box-------------------------

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove()
    }
  }
  var list = document.querySelectorAll('#myUL > li');
  for (let n = 0; n < list.length; n++) {
    list[n].onclick = function() {
        var div = this
        div.classList.toggle("checked");
      }
    }
} 

function newElementBox2() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inProgress").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL2").appendChild(li);
    }
    document.getElementById("inProgress").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.remove()
        }
      }
      var list = document.querySelectorAll('#myUL2 > li');
      for (let n = 0; n < list.length; n++) {
        list[n].onclick = function() {
            var div = this
            div.classList.toggle("checked");
          }
      }
   
  } 

  function newElementBox3() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("done").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
        document.getElementById("myUL3").appendChild(li).setAttribute("class", "checked"); //checked for all items from done list
    }
    document.getElementById("done").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.remove()
        }
        var list = document.querySelectorAll("#myUL3 > li");
        console.log(list);
      }
  } 
function newElementBox4() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("nextLi").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL4").appendChild(li);
  }
  document.getElementById("nextLi").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.remove()
    }
  }
  var list = document.querySelectorAll('#myUL4 > li');
  for (let n = 0; n < list.length; n++) {
    list[n].onclick = function () {
      var div = this
      div.classList.toggle("checked");
    }
  }
}

  // -------------- REMOVING LISTS ---------

  function removeBox1() {
  var box1 = document.getElementById("to_do_box");
  if (confirm('Are you sure you want to delete this list?')) {
    box1.remove(); 
} else {
    return null;
}
  
  }
  
  function removeBox2() {
    var box2 = document.getElementById("in_progress_box");
    if (confirm('Are you sure you want to delete this list?')) {
      box2.remove(); 
  } else {
      return null;
  }
    }


    function removeBox3() {
      var box3 = document.getElementById("done_box");
      if (confirm('Are you sure you want to delete this list?')) {
        box3.remove(); 
    } else {
        return null;
    }
      }

function removeBox4() {
  var box4 = document.getElementById("nextList");
  if (confirm('Are you sure you want to delete this list?')) {
    box4.remove();
  } else {
    return null;
  }

}
// -------------- Next List ---------

let v = 0

const btnNext = document.querySelector(".addList")
const nextList = document.querySelector("#nextList")
const nextBox = document.querySelector(".boxNext")


btnNext.addEventListener("click", function () {
  v++

  const nextBox = document.querySelector(".boxNext" + v)
  console.log(nextBox)
  const x = nextList.innerHTML;
  nextBox.innerHTML = x;
  nextBox.classList.add('box');
  nextBox.classList.add('nextList');
  nextBox.setAttribute("id", "nextList");
  nextBox.style.display = "block";

})




function sendMail() {
  var x = document.forms["myForm"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");

 var y = document.forms["myForm"]["firstname"].value;
  if (y == "") {
    alert("Name must be filled out");
    return false;
  }

   var z = document.forms["myForm"]["email"].value;
  if (z == "") {
    alert("email must be filled out");
    return false;
  }

  var w = document.forms["myForm"]["subject"].value;
  if (w == "") {
    alert("subject must be filled out");
    return false;
  }


  var c = document.forms["myForm"]["Message"].value;
  if (c == "") {
    alert("Message must be filled out");
    return false;
  }


 if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
    alert("Not a valid e-mail address");
    return false;
  }
  else{

    var link = "mailto:852386z@gmail.com"
             + "?"
             + "&subject=" + escape(document.getElementById('supject').value)
             + "&body=" + escape(document.getElementById('fname').value)+"\n \n \n \n\n\n\n"+escape(document.getElementById('Message').value);

    window.location.href = link;
}
}

function validateForm() {

  var x = document.forms["myForm"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");



  var y= document.forms["myForm"]["name"].value;
  if (y == "") {
    alert("Name must be filled out");
    return false;
  }

   var z = document.forms["myForm"]["num"].value;
  if (z ==  "") {
    alert("Phone number must be filled out");
    return false;
  }


 var q = document.forms["myForm"]["email"].value;
  if (q == "") {
    alert("email must be filled out");
    return false;
  }


 if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
    alert("Not a valid e-mail address");
    return false;
  }


  if (isNaN(z) || xz<1 || z >  1000000000) {
  	  alert("Phone number not valid");
     
   }


}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TH")[n];
      y = rows[i + 1].getElementsByTagName("TH")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function initComparisons() {
  var x, i;
  /*find all elements with an "overlay" class:*/
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    /*get the width and height of the img element*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    /*set the width of the img element to 50%:*/
    img.style.width = (w / 2) + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchstop", slideFinish);
    function slideReady(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      clicked = 1;
      /*execute a function when the slider is moved:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = getCursorPos(e)
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*execute a function that will resize the overlay image according to the cursor:*/
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = e || window.event;
      /*get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /*resize the image:*/
      img.style.width = x + "px";
      /*position the slider:*/
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}
function flip(){
(function(window) {

  "use strict";

  function extend(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  function flipCards(options) {
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  }

  flipCards.prototype.options = {
    cardsClass: "flip-card",
    activeClass: "active"
  }

  flipCards.prototype._initEvents = function() {
    var cards = document.getElementsByClassName(this.options.cardsClass),
      i = 0,
      len = cards.length,
      self = this;
    if (len === 0) return;
    for (i, len; i < len; i++) {
      cards[i].addEventListener('click', function() {
        this.classList.toggle(self.options.activeClass);
      });
    }
}

  flipCards.prototype._init = function() {
    this._initEvents();
  }
  window.FlipCards = flipCards;

  // Support for CommonJS Module format and AMD format.
  if (typeof module !== "undefined" && module.exports) {
    module.exports.FlipCards = flipcards;
  } else if ((typeof define !== "undefined" && define !== null) && (define.amd !== null)) {
    define("flipcards.js", function() {
      return flipcards;
    });
  }

})(window);

var flipcards = new FlipCards({
  cardsClass: "flip-card", //default
  activeClass: "active" //default
});
}

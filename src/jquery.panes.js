 /*
  * ====================================================================
  * Copyright (c) 2012-2023 AbandonedCart.  All rights reserved.
  *
  * https://github.com/AbandonedCart/AbandonedCart/blob/main/LICENSE#L4
  * ====================================================================
  *
  * The license and distribution terms for any publicly available version or
  * derivative of this code cannot be changed.  i.e. this code cannot simply be
  * copied and put under another distribution license
  * [including the GNU Public License.] Content not subject to these terms is
  * subject to to the terms and conditions of the Apache License, Version 2.0.
  */

 $(function() {
  $( ".accordion" ).accordion({
 	 header: 'h1:not(.static)',
 	 heightStyle: "content",
 	 activate: function(event, ui) {
 		 window.scrollTo({ top: $(this).offset().top, behavior: 'smooth' });
 	 }
  });
  $( ".subsection" ).accordion({
 	 header: 'button.collapsible',
 	 heightStyle: "content",
 	 collapsible: true,
 	 active: false,
 	 activate: function(event, ui) {
 		 window.scrollTo({ top: $(this).offset().top, behavior: 'smooth' });
 	 }
  });
 });

var subpanes = document.getElementsByClassName("subpane");
for (var x = 0; x < subpanes.length; x++) {
 var buttons = subpanes[x].getElementsByClassName("collapsible");
 for (var i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var content = this.nextElementSibling;
     if (content.style.display === "block") {
       content.style.display = "none";
     } else {
       content.style.display = "block";
       window.scrollTo({ top: content.offsetTop, behavior: 'smooth' });
     }
   });
 }
}

var urlParams = new URLSearchParams(window.location.search);
window.addEventListener('load', function() {
  if (urlParams.has('s') || urlParams.has('q')) {
    var headings = document.getElementsByTagName("h1");
    var params = urlParams.has('q') ? urlParams.get('q') : urlParams.get('s');
    for (var i = 0; i < headings.length; i++) {
      if (headings[i].innerHTML.toLowerCase().includes(params.toLowerCase())) {
        headings[i].click();
      }
    }
  }
  if (urlParams.has('b') || urlParams.has('d')) {
    var params = urlParams.has('d') ? urlParams.get('d') : urlParams.get('b');
    var subpanes = document.getElementsByClassName("subpane");
    for (var x = 0; x < subpanes.length; x++) {
      var buttons = subpanes[x].getElementsByClassName("collapsible");
      for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML.toLowerCase().includes(params.toLowerCase())) {
          buttons[i].classList.toggle("active");
          buttons[i].nextElementSibling.style.display = "block";
          window.scrollTo({ top: buttons[i].nextElementSibling.offsetTop, behavior: 'smooth' });
        }
      }
    }
    var subsections = document.getElementsByClassName("subsection");
    for (var x = 0; x < subsections.length; x++) {
      var buttons = subsections[x].getElementsByClassName("collapsible");
      for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML.toLowerCase().includes(params.toLowerCase())) {
          buttons[i].click();
        }
      }
    }
  }
});

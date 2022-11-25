/*
 * ====================================================================
 * Copyright (c) 2012-2022 AbandonedCart.  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * For the purpose of this license, the phrase "SamSprung labels" shall
 * be used to refer to the labels "8-bit Dream", "TwistedUmbrella",
 * "SamSprung" and "AbandonedCart" and these labels should be considered
 * the equivalent of any usage of the aforementioned phrase.
 *
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in
 *    the documentation and/or other materials provided with the
 *    distribution.
 *
 * 3. All materials mentioning features or use of this software and
 *    redistributions of any form whatsoever must display the following
 *    acknowledgment unless made available by tagged, public "commits":
 *    "This product includes software developed for SamSprung by AbandonedCart"
 *
 * 4. The SamSprung labels must not be used in any form to endorse or promote
 *    products derived from this software without prior written permission.
 *    For written permission, please contact enderinexiledc@gmail.com
 *
 * 5. Products derived from this software may not be called by the SamSprung
 *    labels nor may these labels appear in their names or product information
 *    without prior written permission of AbandonedCart.
 *
 * THIS SOFTWARE IS PROVIDED BY AbandonedCart AND SamSprung ``AS IS'' AND ANY
 * EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE OpenSSL PROJECT OR
 * ITS CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 * NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
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
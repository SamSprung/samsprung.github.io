/* ====================================================================
 * Copyright (c) 2012-2021 AbandonedCart.  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in
 *    the documentation and/or other materials provided with the
 *    distribution.
 *
 * 3. All advertising materials mentioning features or use of this
 *    software and redistributions of any form whatsoever
 *    must display the following acknowledgment:
 *    "This product includes software developed by AbandonedCart" unless
 *    otherwise displayed by tagged, public repository entries.
 *
 * 4. The names "8-Bit Dream", "TwistedUmbrella" and "AbandonedCart"
 *    must not be used in any form to endorse or promote products
 *    derived from this software without prior written permission. For
 *    written permission, please contact enderinexiledc@gmail.com
 *
 * 5. Products derived from this software may not be called "8-Bit Dream",
 *    "TwistedUmbrella" or "AbandonedCart" nor may these labels appear
 *    in their names without prior written permission of AbandonedCart.
 *
 * THIS SOFTWARE IS PROVIDED BY AbandonedCart ``AS IS'' AND ANY
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
	$('.accordion').tabs('.accordion div.pane', {tabs: 'h1', effect: 'slide', initialIndex: null});
});
$.tools.tabs.addEffect("slide", function(i, done) {
	// 1. upon hiding, the active pane has a ruby background color
	this.getPanes().slideUp().css({backgroundColor: "rgba(255,255,255,0.4)"});
	// 2. after a pane is revealed, its background is set to its original color (transparent)
	this.getPanes().eq(i).slideDown(function()  {
		$(this).css({backgroundColor: 'transparent'});
		// the supplied callback must be called after the effect has finished its job
		done.call();
		window.scrollTo({ top: $('.accordion').offset().top + 10, behavior: 'smooth' });
	});
});

var headers = document.getElementsByTagName("h1");
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
	this.classList.toggle("active");
	var content = this.nextElementSibling;
	if (content.style.display === "block") {
	  content.style.display = "none";
	} else {
	  content.style.display = "block";
	}
  });
}
var urlParams = new URLSearchParams(window.location.search);
window.addEventListener('load', function() {
	if (urlParams.has('s')) {
		for (var i = 0; i < headers.length; i++) {
			var title = headers[i].innerHTML.toLowerCase();
			if (title.includes(urlParams.get('s').toLowerCase())) {
				headers[i].click();
			}
		}
	}
	if (urlParams.has('d')) {
		for (var i = 0; i < coll.length; i++) {
			if (coll[i].innerHTML.toLowerCase().includes(urlParams.get('d').toLowerCase())) {
				coll[i].classList.toggle("active");
				coll[i].nextElementSibling.style.display = "block";
				window.scrollTo({ top: coll[i].nextElementSibling.offsetTop, behavior: 'smooth' });
			}
		}
	}
});

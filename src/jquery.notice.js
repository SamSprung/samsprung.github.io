/*
 * ====================================================================
 * Copyright (c) 2021-2022 AbandonedCart.  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * For the purpose of this license, the phrase "SamSprung labels" shall
 * be used to refer to the labels "8-Bit Dream", "TwistedUmbrella",
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

var path = window.location.pathname;
var page = path.split("/").pop();

if (page.length <= 0)
page = "index.html";

var h1Tag = document.createElement('h1');
h1Tag.style.paddingTop = "10px";
h1Tag.style.paddingBottom = "8px";
h1Tag.style.fontSize = "0.8em";
h1Tag.style.fontWeight = "bold";
h1Tag.textContent = "SamSprung Disclaimer";
var divTag = document.createElement('div');
divTag.setAttribute("class", "static");
divTag.style.display = "block";
var pTag = document.createElement('p');
divTag.appendChild(pTag);
var centerTag = document.createElement('center');
pTag.appendChild(centerTag);
var iTag = document.createElement('i');
iTag.textContent = "SamSprung is not affiliated, associated, authorized, endorsed by, or in any way connected with Samsung."
centerTag.appendChild(iTag);
centerTag.appendChild(document.createElement('br'));
var iTag2 = document.createElement('i');
iTag2.textContent = "SamSprung features, some proprietary, have been written or modified specifically for this project. Steal them if you feel you must, but don't think it goes unnoticed."
centerTag.appendChild(iTag2);
centerTag.appendChild(document.createElement('br'));
var iTag3 = document.createElement('i');
if (path.includes("launcher")) {
	iTag3.textContent = "SamSprung TooUI is a free and open-source project, as this functionality was never meant to be restricted."
} else if (path.includes("keyboard")) {
	iTag3.textContent = "SamSprung TooIME is a paid (optional) keyboard to fund testing and maintaining universal compatibility."
}
centerTag.appendChild(iTag3);
var accordian = document.getElementsByClassName("accordion")[0];
accordian.appendChild(h1Tag);
accordian.appendChild(divTag);
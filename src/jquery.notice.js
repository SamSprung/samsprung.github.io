 /*
	* ====================================================================
	* Copyright (c) 2021-2023 AbandonedCart.  All rights reserved.
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

var path = window.location.pathname;
var page = path.split("/").pop();

if (page.length <= 0)
page = "index.html";

var h1Tag = document.createElement('h1');
h1Tag.setAttribute("class", "static");
h1Tag.style.display = "block";
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
iTag.style.fontSize = "0.9em";
iTag.textContent = "SamSprung is not affiliated, authorized, sponsored, endorsed, or in any way connected with Samsung or its subsidiaries."
centerTag.appendChild(iTag);
centerTag.appendChild(document.createElement('br'));
var iTag2 = document.createElement('i');
iTag2.style.fontSize = "0.9em";
iTag2.textContent = "SamSprung features, some proprietary, have been written or modified specifically for this project. While abuse of public source does occur, don't think it goes unnoticed."
centerTag.appendChild(iTag2);
centerTag.appendChild(document.createElement('br'));
var iTag3 = document.createElement('i');
iTag3.style.fontSize = "0.9em";
if (path.includes("launcher")) {
	iTag3.textContent = "SamSprung TooUI is a free and open-source project, as this functionality was never meant to be restricted."
} else if (path.includes("keyboard")) {
	iTag3.textContent = "SamSprung TooIME is a paid (optional) keyboard to fund testing and maintaining universal compatibility."
}
centerTag.appendChild(iTag3);
var accordian = document.getElementsByClassName("accordion")[0];
accordian.appendChild(h1Tag);
accordian.appendChild(divTag);

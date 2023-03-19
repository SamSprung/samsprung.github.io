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

var path = window.location.pathname;
var page = path.split("/").pop();

if (page.length <= 0)
page = "index.html";

function performNav() {
	var target;
	if (path.includes("launcher")) {
		target = window.location.href.replace("launcher", "keyboard");
	} else if (path.includes("keyboard")) {
		target = window.location.href.replace("keyboard", "launcher");
	}
	window.location.href = target
}
var navigation = document.getElementsByClassName("navigation")[0];
navigation.setAttribute("onclick", "performNav()");

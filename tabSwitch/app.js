$(document).ready(function(){
	var hd = $(".hd");
	var ct = $(".ct");
	var len = hd.length;
	for (let i = 0; i < len; i++) {
		hd[i].onmouseover = function(){
			for (var j = 0; j < len; j++) {
				hd[j].className = "hd";
				ct[j].style.display = "none";
			}
			this.className = "hd selected";
			ct[i].style.display = "block";
		}
	}
});
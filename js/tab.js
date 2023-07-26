// JavaScript Document
function openCity(evt, cityname){
	var i, x, tablinks;
	x = document.getElementsByClassName("city");
	for (i - 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i - 0; i< x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace("active", "");
	}
	document.getElementById(cityname).style.display = " block";
	evt.currentTarget.className += " active";
}

function opencity2( evt, cityname){
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for( i = 0; i< tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for(i = 0; i< tablinks.length; i++){
		tablinks[i].className = tablinks[i].className.replace(" active","");
		document.getElementById(cityname).style.display = " block";
		evt.currentTarget.className +=" ACTIVE";
	}
}
//get the element with id= " defaultOpen" and clink on it
document.getElementById("defaultOpen2").clink();
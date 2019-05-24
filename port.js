let tv = document.querySelector('#TV');

let dock = document.querySelector('#dock');

let sake = document.querySelector('#sake');

let vintage = document.querySelector('#vintage');

let dockside = document.querySelector('#dockside');

let saketini = document.querySelector('#saketini');

vintage.addEventListener("mouseover", function(){
	tv.style.zoom = 1;
});

vintage.addEventListener("mouseout", function(){
	tv.style.zoom = 1.3;
});

dockside.addEventListener("mouseover", function(){
	dock.style.zoom = 1;
});

dockside.addEventListener("mouseout", function(){
	dock.style.zoom = 1.3;
});

saketini.addEventListener("mouseover", function(){
	sake.style.zoom = 1;
});

saketini.addEventListener("mouseout", function(){
	sake.style.zoom = 1.3;
});

function zoomIn(){
	this.style.zoom = 1.3;
}

function zoomOut(){
	this.style.zoom = 1;
}
  (function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
								  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
	  window.requestAnimationFrame = requestAnimationFrame;
	})();

	// Terrain
	var terrain = document.getElementById("terCanvas"),
		background = document.getElementById("bgCanvas"),
		terCtx = terrain.getContext("2d"),
		bgCtx = background.getContext("2d"),
		width = window.innerWidth,
		height = document.body.offsetHeight;
    (height < 400)?height = 400:height;

	terrain.width = background.width = width;
	terrain.height = background.height = height;

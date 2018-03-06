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
  // Some random points
  var points = [],
    displacement = 140,
    power = Math.pow(2,Math.ceil(Math.log(width)/(Math.log(2))));

  // set the start height and end height for the terrain
  points[0] = (height - (Math.random()*height/2))-displacement;
  points[power] = (height - (Math.random()*height/2))-displacement;

  // create the rest of the points
  for(var i = 1; i<power; i*=2){
    for(var j = (power/i)/2; j <power; j+=power/i){
      points[j] = ((points[j - (power/i)/2] + points[j + (power/i)/2]) / 2) + Math.floor(Math.random()*-displacement+displacement );
    }
    displacement *= 0.6;
  }

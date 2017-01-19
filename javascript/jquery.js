gridSize=16;

$(document).ready(function() {
  createGrid(gridSize);
});

function createGrid(gridSize) {

	$('#grid').empty();
	var gridBoxes = gridSize * gridSize;

	var boxSize = (400/gridSize)-2;

	for ( var i = 0; i < gridBoxes; i++ ) {
    $('#grid').append("<div class='unit' style='height:" + boxSize + "px; width:" + boxSize + "px;'></div>");
	}

	hoverEffects();
};

function hoverEffects(){
	$('.unit').hover (
		function() {
			$(this).addClass("hover");
		},
		function() {
			$(this).removeClass("hover");
			$(this).css("background-color", "green");
		}
	)
};

  function clearGrid(){
    $('.unit').css('background-color','white');
  };
  function createNGrid(){
      var x = prompt('How many rows/columns?');
		  clearGrid();
   		createGrid(x);
  };

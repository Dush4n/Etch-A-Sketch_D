function createGrid(x) {
  for (var rows = 0; rows < x; rows++){
    for (var columns = 0; columns < x; columns++){
      $('.container').append("<div class='grid'></div>")
    }
  }
  $('.grid').width(960/x);
  $('.grid').height(960/x);
}

function clearGrid(){
  $('.grid').remove();
}

function createNewGrid(){
  var y = prompt("Please enter the number of rows and columns for a new grid.");
  clearGrid();
  createGrid(y);
}

$(document).ready(function(){
  var color = ["red", "orange", "yellow", "green", "blue", "purple"];
  createGrid(16);
  $('.grid').mouseover(function(){
    $(this).css("background-color", 'black');
  });

  $('.blackGrid').click(function(){
    createNewGrid();
    $('.grid').mouseover(function(){
      $(this).css("background-color", 'black');
    });
  });

  $('.rainbowGrid').click(function(){
    createNewGrid();
    $('.grid').mouseover(function(){
      $(this).css("background-color", color[Math.floor(Math.random()*6)]);
    });
  });
});

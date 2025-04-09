// set up a black page

// something to type in the color name
  // maybe a window prompt


function chooseColor () {

  let askColor = window.prompt("What color? ");
  console.log (askColor);
  $("BODY").css("background-color",  askColor ) ;
  return askColor;

}


$("button").click(chooseColor);

// change the p[age color accordin to the user input




  // maybe random  color


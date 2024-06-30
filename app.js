// SubTask1

const board = document.getElementById("board");
const cells = document.getElementsByClassName("cell");
const msg = document.getElementById("msg");
const restartbtn= document.getElementById
const players = ["X", "O"];
let NotFin=true;

let cur = 0; let coun=0
real_board= [ [-1, -1, -1], [ -1, -1, -1], [ -1, -1 , -1] ]

// // add event listeners to each cell
function handleCellClick( event ) {

  tar= event.target; id_= parseInt( (event.target.id)[4] )
  let i= parseInt(id_/3), j=parseInt( id_%3 );

  if( NotFin && ( real_board[ i ][ j ] ) == -1  ){

    tar.innerHTML ="<h1>"+players[cur] +"</h1>";
    real_board[ i ][ j ]= cur;

    coun++;
    if( checkWin( cur ) ){
      msg.innerHTML= players[cur]+" won the game. Play again by clicking restart"; NotFin= false;
    }
    else if( coun==9 ){
      msg.innerHTML= "The Game has tied. Play again by clicking restart"; NotFin= false;
    }
    else{
      cur= cur==0?1:0;
      msg.innerHTML=players[cur]+"'s turn"
    }
  }
}

let i=0
for( i=0;i< cells.length; i++){
  cells[i].addEventListener("click", handleCellClick )
}


// SubTask2

function checkWin( current ) {
  let chdl= true, chdr= true;

  for(let i=0;i<3;i++ ){
    let ch1=true, ch2= true;

    for( let j=0; j<3; j++){
      if( current != real_board[ i][ j ] ){
        ch1= false;
      }

      if( current != real_board[ j][i] ){
        ch2= false;
      }
    }
    if( ch1 || ch2 )
      return true;

    if( current != real_board[i][i] )
      chdl=false;
    if(current != real_board[i][2-i] )
      chdr= false;
  }

  if( chdl || chdr )
    return true;

  return false;
}

// SubTask3
function restart() {

  cur=0;
  real_board= [ [-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
  msg.innerHTML= "X's turn";
  NotFin= true;
  coun=0; 

  for( let i=0; i<cells.length; i++ ){
    cells[i].innerHTML= "";
  }

  }
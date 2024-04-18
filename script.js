let board = ['', '', '', '', '', '', '', '', '']
let player = 'x';
function reset()
{
    for(let x=0; x<9;x++){
    document.getElementsByClassName('cell')[x].innerText = '';}
    board = ['', '', '', '', '', '', '', '', '']

}
function makeMove(index) {
    if (board[index] === '') {
        board[index] = player;
        document.getElementsByClassName('cell')[index].innerText = player;
        player = player === 'x' ? 'o' : 'x';
        setTimeout(checkwin(),1000) 
    }
   


    // checkwin()
}
function checkwin() {
    let row1 = [board[0], board[1], board[2]];
    let row2 = [board[3], board[4], board[5]];
    let row3 = [board[6], board[7], board[8]];
    let col1 = [board[0], board[3], board[6]];
    let col2 = [board[1], board[4], board[7]];
    let col3 = [board[2], board[5], board[8]];
    let dia1 = [board[0], board[4], board[8]];
    let dia2 = [board[2], board[4], board[6]];
    let value1 = ['x', 'x', 'x'];
    let value2 = ['o', 'o', 'o'];
    {
        if (row1.every((val, index) => val === value1[index])) {
            console.log('winner');
            alert('player x wins');
        }
        else if (row2.every((val, index) => val === value1[index])) {
            console.log('winner');
            alert('player x wins');
            
        }
       else if (row3.every((val, index) => val === value1[index])) {
            console.log('winner');
            alert('player x wins');
            
        }
        else if (col1.every((val, index) => val === value1[index])) {
            console.log('winner');
            alert('player x wins');
            
        }
        else if (col2.every((val, index) => val === value1[index])) {
            console.log('winner');
            alert('player x wins');
            
        }
       else if (col3.every((val, index) => val === value1[index])) {
            console.log('winner');
            alert('player x wins');
           
        }
       else if (dia1.every((val, index) => val === value1[index])) {
            console.log('winner');
            alert('player x wins');
          
        }
       else if (dia2.every((val, index) => val === value1[index])) {
            console.log('winner');
            alert('player x wins');
           
        }

        // if (row1 != board['', '', ''] && row1 === value1 || row2 === value1 || row3 === value1) {

    else if (row1.every((val, index) => val === value2[index])) {
            console.log('winner');
            alert('player o wins');
          
        }
       else if (row2.every((val, index) => val === value2[index])) {
            console.log('winner');
            alert('player o wins');
           
        }
        else if (row3.every((val, index) => val === value2[index])) {
            console.log('winner');
            alert('player o wins');
          
        }
      else  if (col1.every((val, index) => val === value2[index])) {
            console.log('winner');
            alert('player o wins');
           
        }
       else if (col2.every((val, index) => val === value2[index])) {
            console.log('winner');
            alert('player o wins');
         
        }
        else if (col3.every((val, index) => val === value2[index])) {
            console.log('winner');
            alert('player o wins');
         
        }
        else if (dia1.every((val, index) => val === value2[index])) {
            console.log('winner');
            alert('player o wins');
         
        }
        else if (dia2.every((val, index) => val === value2[index])) {
            console.log('winner');
            alert('player o wins')
            
        }
   
     else if(board.every((val, index) => val != ''))
    {
alert('its a draw')

    }
    
}
}
//    || col1===value1 || col2===value1 || col3===value1 || dia1===value1 || dia2===value1)

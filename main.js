const cols = document.querySelectorAll('.col')
const nextPlayer = document.querySelector('#nextP')
const winner = document.querySelector('#winner')
const btn = document.querySelector('.btn')



function nextXO(){
    cols.forEach(col => {
        col.textContent = ''
        winner.textContent = ''
       
        col.addEventListener('click',() => {
            if(nextPlayer.textContent === 'X' && !col.textContent){
                col.textContent = 'X'
                nextPlayer.textContent = 'O'
    
            } else if(!col.textContent){
                 col.textContent = 'O'
                 nextPlayer.textContent = 'X'
            }
          
            winnerXO()
        })
       
    })
}


function winnerXO(){
    if((cols[0].textContent === 'X' && cols[3].textContent === 'X' && cols[6].textContent === 'X') || 
    (cols[1].textContent === 'X' && cols[4].textContent === 'X' && cols[7].textContent === 'X') || 
    (cols[2].textContent === 'X' && cols[5].textContent === 'X' && cols[8].textContent === 'X') ||
    (cols[0].textContent === 'X' && cols[1].textContent === 'X' && cols[2].textContent === 'X') ||
    (cols[3].textContent === 'X' && cols[4].textContent === 'X' && cols[5].textContent === 'X') ||
    (cols[6].textContent === 'X' && cols[7].textContent === 'X' && cols[8].textContent === 'X') || 
    (cols[0].textContent === 'X' && cols[4].textContent === 'X' && cols[8].textContent === 'X') ||
    (cols[6].textContent === 'X' && cols[4].textContent === 'X' && cols[2].textContent === 'X'))
    
    {
     
      winner.textContent = `X`
      restartGame()
    }
    
    if((cols[0].textContent === 'O' && cols[3].textContent === 'O' && cols[6].textContent === 'O') || 
    (cols[1].textContent === 'O' && cols[4].textContent === 'O' && cols[7].textContent === 'O') || 
    (cols[2].textContent === 'O' && cols[5].textContent === 'O' && cols[8].textContent === 'O') ||
    (cols[0].textContent === 'O' && cols[1].textContent === 'O' && cols[2].textContent === 'O') ||
    (cols[3].textContent === 'O' && cols[4].textContent === 'O' && cols[5].textContent === 'O') ||
    (cols[6].textContent === 'O' && cols[7].textContent === 'O' && cols[8].textContent === 'O') || 
    (cols[0].textContent === 'O' && cols[4].textContent === 'O' && cols[8].textContent === 'O') ||
    (cols[6].textContent === 'O' && cols[4].textContent === 'O' && cols[2].textContent === 'O'))
    
    {
     
      winner.textContent = `O`
      restartGame()
    }

} 

function restartGame(){
  btn.addEventListener('click', ()=>{
    nextXO()
  })
}

nextXO()

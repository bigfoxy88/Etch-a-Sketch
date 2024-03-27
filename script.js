const table=document.querySelector('.board');
const colorPicker=document.querySelector('.color-picker');
const clear=document.querySelector('.clear')
//color of  pen
let colour='black';


//user input variable
let userIn;


//input validation
while(isNaN(userIn)){
    userIn=Math.floor(prompt('length of sides'))
}


//produces board based on input  number from user
for(let i=0;i<userIn;i++){
    let nRow=document.createElement('tr');
    nRow.classList.add('rowy');
    //console.log(nRow);
    for(let j=0;j<userIn;j++){
        let block=document.createElement('td');
        block.classList.add('blocky');
        nRow.appendChild(block);
        
    }
    table.appendChild(nRow)
}


//selecting blocks 


let blocks=document.querySelectorAll('.blocky')


//function for coloring board

function colorBoard(e){
    e.target.style.backgroundColor=colorPicker.value

}



blocks.forEach((x)=>{
    x.addEventListener('mousemove',colorBoard)
})




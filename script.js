const container = document.getElementById("cells-grid");
const clear = document.getElementById("clear");
let size;
clear.addEventListener('click',function(){
    do{
        size = prompt("Enter a new Size(1-64)");
    }while(isNaN(size) || (size<1 || size>64));
    container.innerHTML = '';
    generate_cells(size);
})
function generate_cells(num){
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    for(let i=0; i<num; i++){
        for(let j=0; j<num; j++){
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.addEventListener('mouseover', change_color)
            container.appendChild(cell);
        }
    }
}

function change_color(e){
    let color = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = `#${color}`;
}
// generate_cells(2);
console.log(container);
console.log(clear);
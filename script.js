const container = document.getElementById("cells-grid");

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
generate_cells(30);
console.log(container);
const main = document.getElementById(`main`);
const mainGrid = document.createElement(`div`);
mainGrid.id = `mainGrid`;
main.append(mainGrid);

let gridSizeX = 16;
let gridSizeY = 16;
for(i = 0; i < gridSizeY; i++){ //Build from the bottom left column up 1,1 being in bottom left corner
    for(j = 0; j < gridSizeX; j++){ //Build from left to right

/*         let randomColorHex = `#${Math.floor((Math.random()*(16777215 - 1048576)) + 1048576).toString(16)}`; //generates a number that satisfies hex color codes "big enough for 6 hex digits" */

        let randomColorHex = `${Math.floor((Math.random()*(16777215))).toString(16)}`; //another hex generatot than olnly misses black
        if(randomColorHex.length < 6){
           randomColorHex = `0`.repeat(6 - randomColorHex.length) + randomColorHex;
        }
        randomColorHex = `#` + randomColorHex;

        /* let randomColorHex = `#${(Math.floor((Math.random()*(16777215)))).toLocaleString(`en-US`, {minimumIntegerDigits:6, useGrouping: false}).toString(16)}`; //some attempt to make hex color codes */ 
              
        let posX = j + 1;
        let posY = i + 1;
        let gridSquare = document.createElement(`div`);
        gridSquare.id = `pos${posX}-${posY}`;
        gridSquare.textContent = randomColorHex;
        let generatedGridArea = `pos${posX}-${posY}`;
        gridSquare.style.gridArea = generatedGridArea;
        gridSquare.style.backgroundColor = randomColorHex; //makes a random hex color
        // gridSquare.style.width = `2px`;
        // gridSquare.style.height = `2px`;
        gridSquare.style.placeSelf = `stretch`;
        mainGrid.append(gridSquare);

    }
}


let generatedGridTemplateAreas = ``;
for(i = 0; i < gridSizeY; i++){ //Build from the bottom left column up 1,1 being in bottom left corner
    let generatedGridTemplateAreasTemp = ``;
    generatedGridTemplateAreasTemp += `"`;

    for(j = 0; j < gridSizeX; j++){ //Build from left to right
        let posX = j + 1;
        let posY = i + 1;
        generatedGridTemplateAreasTemp += `pos${posX}-${posY} `;
        
    }
    generatedGridTemplateAreasTemp += `"\n`
    generatedGridTemplateAreas = generatedGridTemplateAreasTemp + generatedGridTemplateAreas; //prepends string so to build the string in a `"posxy posxy poxy"` from bottom to top 
    
}

mainGrid.style.display = `grid`;
mainGrid.style.gridTemplateAreas = generatedGridTemplateAreas;

let rowSize = (100 / gridSizeY) + `vh `;
let columnSize = (100 / gridSizeX) + `vh `;
mainGrid.style.gridTemplateRows = rowSize.repeat(gridSizeX);
mainGrid.style.gridTemplateColumns = columnSize.repeat(gridSizeY);
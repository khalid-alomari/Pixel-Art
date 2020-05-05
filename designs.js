
//Editor Khalid

// Select size input and getting the table Id's
let pixelCanvas = document.getElementById("pixelCanvas");
let sizePicker = document.getElementById("sizePicker");

// the wanted value!
google();

// listening to the submit "Clear/Sizing" button
sizePicker.addEventListener("submit", function(event) {
  event.preventDefault(); // to important to start.
  rest(); // rest to the base status!
  makeGrid();  // calling makeGrid()
});

// get the sizes and color
function makeGrid() { // MAIN function

  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;

//nested loops to draw the cells it's not a good approach; but its small
// program thu
    for (let row = 0; row < height; row++){
        const newRow = pixelCanvas.insertRow(row);
        for (let column = 0; column < width; column++){
            const newCell = newRow.insertCell(column);

            // we can do a function for adding color but its only one line!
            newCell.addEventListener("click", function(event) {
              // Select color input
              newCell.style.backgroundColor = colorPicker.value; // the best way!
              // or using color variable
              // let color = document.getElementById("colorPicker").value;
            });

            //double click to clear the cell! (Extra)
            newCell.addEventListener("dblclick", function(event){
              newCell.style.backgroundColor = ""; //clear the style
            });
        }
    }
}
//Rest by removeChild! we can also use loop and empty the cells
function rest(){
    while (pixelCanvas.firstChild){
         pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
}

// (Extra)
// I wanted to make it look like a basic challenge site, so I added extra things
function google(){

  let google = document.getElementById("pixelCanvas");
  // google.addEventListener("click", function(event) {

  // Google ^_^ I thought drawing it is easier than doing a loops!
  value = '<table id="pixelCanvas"> <tbody><tr> <td></td><td></td><td></td><td></td><td></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td> </td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><td></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr> <tr> <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td> </td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td> </td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td> <td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td> </td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td> </td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td> </td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td> </td><td></td><td></td><td></td><td></td><td></td><td></td><td></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td> </td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td> <td></td><td></td><td></td><td ></td><td></td></tr><tr><td></td><td style="background-color: rgb(66, 133, 244);"></td><td style="background-color: rgb(66, 133, 244);"></td><td ></td><td ></td><td></td><td></td> <td></td><td></td><td style="background-color: rgb(219, 68, 55);"></td><td style="background-color: rgb(219, 68, 55);"></td><td ></td><td ></td><td></td><td></td><td></td><td></td><td style="background-color: rgb(244, 180, 0);"></td><td style="background-color: rgb(244, 180, 0);"></td> <td ></td><td ></td><td></td><td></td><td></td><td style= "background-color: rgb(66, 133, 244);"></td><td style="background-color: rgb(66, 133, 244);"></td><td ></td><td ></td><td > </td><td ></td><td style="background-color: rgb(15, 157, 88);"></td> <td></td><td ></td><td></td><td></td><td ></td><td style= "background-color: rgb(219, 68, 55);"></td><td style="background-color: rgb(219, 68, 55);"></td><td style="background-color: rgb(219, 68, 55);"> </td><td style="background-color: rgb(219, 68, 55);"></td></tr><tr><td style="background-color: rgb(66, 133, 244);"></td><td style="background-color: rgb(66, 133, 244);"></td><td ></td><td ></td><td></td><td></td> <td></td><td ></td><td style="background-color: rgb(219, 68, 55);"></td> <td></td><td ></td><td style="background-color: rgb(219, 68, 55);"></td> <td></td><td ></td><td ></td><td ></td><td style=" background-color: rgb(244, 180, 0);"></td><td></td><td ></td><td style="background-color: rgb(244, 180, 0);"></td><td></td><td > </td><td></td><td style="background-color: rgb(66, 133, 244);"></td> <td style="background-color: rgb(66, 133, 244);"></td><td ></td><td ></td><td></td><td></td><td ></td><td style="background-color: rgb(15, 157, 88);"></td><td></td><td ></td><td></td><td></td><td ></td><td style="background-color: rgb(219, 68, 55);"></td><td ></td><td></td><td></td></tr><tr><td style="background-color: rgb(66, 133, 244);"></td><td></td><td ></td><td></td><td></td><td></td><td></td><td style="background-color: rgb(219, 68, 55);"></td><td></td><td ></td><td></td><td></td><td style="background-color: rgb(219, 68, 55);"></td><td></td><td ></td><td style="background-color: rgb(244, 180, 0);"></td><td></td><td ></td><td></td><td></td><td style="background-color: rgb(244, 180, 0);"></td><td></td><td ></td><td style="background-color: rgb(66, 133, 244);"></td><td></td><td ></td><td></td><td></td><td></td><td></td><td style="background-color: rgb(15, 157, 88);"></td><td></td><td ></td><td></td><td></td><td ></td><td style="background-color: rgb(219, 68, 55);"></td><td ></td><td></td><td></td></tr><tr><td style="background-color: rgb(66, 133, 244);"></td><td></td><td ></td><td style="background-color: rgb(66, 133, 244);"></td><td style="background-color: rgb(66, 133, 244);"></td><td ></td><td ></td><td style="background-color: rgb(219, 68, 55);"></td><td></td><td ></td><td></td><td></td><td style="background-color: rgb(219, 68, 55);"></td><td></td><td ></td><td style="background-color: rgb(244, 180, 0);"></td><td></td><td ></td><td></td><td></td><td style="background-color: rgb(244, 180, 0);"></td><td></td><td ></td><td style="background-color: rgb(66, 133, 244);"></td><td></td><td ></td><td style="background-color: rgb(66, 133, 244);"></td><td style="background-color: rgb(66, 133, 244);"></td><td ></td><td ></td><td style="background-color: rgb(15, 157, 88);"></td><td></td><td ></td><td></td><td></td><td ></td><td style="background-color: rgb(219, 68, 55);"></td><td style="background-color: rgb(219, 68, 55);"></td><td style="background-color: rgb(219, 68, 55);"></td><td style="background-color: rgb(219, 68, 55);"></td></tr><tr><td style="background-color: rgb(66, 133, 244);"></td><td></td><td ></td><td></td><td style="background-color: rgb(66, 133, 244);"></td><td></td><td ></td><td style="background-color: rgb(219, 68, 55);"></td><td></td><td ></td><td ></td><td></td><td style="background-color: rgb(219, 68, 55);"></td><td></td><td ></td><td style="background-color: rgb(244, 180, 0);"></td><td></td><td ></td><td></td><td></td><td style="background-color: rgb(244, 180, 0);"></td><td></td><td ></td><td style="background-color: rgb(66, 133, 244);"></td><td></td><td ></td><td></td><td style="background-color: rgb(66, 133, 244);"></td><td></td><td ></td><td style="background-color: rgb(15, 157, 88);"></td><td></td><td ></td><td></td><td></td><td ></td><td style="background-color: rgb(219, 68, 55);"></td><td ></td><td></td><td></td></tr><tr><td style="background-color: rgb(66, 133, 244);"></td><td></td><td ></td><td ></td><td style="background-color: rgb(66, 133, 244);"></td><td></td><td ></td><td></td><td style="background-color: rgb(219, 68, 55);"></td><td></td><td ></td><td style="background-color: rgb(219, 68, 55);"></td><td></td><td ></td><td></td><td></td><td style="background-color: rgb(244, 180, 0);"></td><td></td><td ></td><td style="background-color: rgb(244, 180, 0);"></td><td></td><td ></td><td></td><td style="background-color: rgb(66, 133, 244);"></td><td></td><td ></td><td></td><td style="background-color: rgb(66, 133, 244);"></td><td ></td><td ></td><td style="background-color: rgb(15, 157, 88);"></td><td></td><td ></td><td></td><td></td><td ></td><td style="background-color: rgb(219, 68, 55);"></td><td ></td><td></td><td ></td></tr><tr><td></td><td style="background-color: rgb(66, 133, 244);"></td><td style="background-color: rgb(66, 133, 244);"></td><td style="background-color: rgb(66, 133, 244);"></td><td style="background-color: rgb(66, 133, 244);"></td><td ></td><td ></td><td></td><td></td><td style="background-color: rgb(219, 68, 55);"></td><td style="background-color: rgb(219, 68, 55);"></td><td ></td><td ></td><td></td><td></td><td></td><td></td><td style="background-color: rgb(244, 180, 0);"></td><td style="background-color: rgb(244, 180, 0);"></td><td ></td><td ></td><td></td><td></td><td></td><td style="background-color: rgb(66, 133, 244);"></td><td style="background-color: rgb(66, 133, 244);"></td><td style="background-color: rgb(66, 133, 244);"></td><td style="background-color: rgb(66, 133, 244);"></td><td ></td><td ></td><td style="background-color: rgb(15, 157, 88);"></td><td style="background-color: rgb(15, 157, 88);"></td><td style="background-color: rgb(15, 157, 88);"></td><td style="background-color: rgb(15, 157, 88);"></td><td ></td><td ></td><td style="background-color: rgb(219, 68, 55);"></td><td style="background-color: rgb(219, 68, 55);"></td><td style="background-color: rgb(219, 68, 55);"></td><td style="background-color: rgb(219, 68, 55);"></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td ></td><td ></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td ></td><td ></td><td ></td><td ></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td ></td><td></td><td></td><td ></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td ></td><td ></td><td ></td><td ></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td ></td><td ></td><td ></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td ></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td ></td><td></td><td ></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td ></td><td ></td><td ></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>';

  google.innerHTML = value;

  // });

}
// <!-- clone on May 5th, 2020 -->

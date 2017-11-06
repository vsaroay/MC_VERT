

//Function builds default view of Calendar upon loading page
window.onload = function () {
    console.log("Onload functioning");
    showingMonth = curMonth;
    showingYear = curFullYear;
    firstDay = new Date(curFullYear, curMonth, 1);
    lastDay = new Date(curFullYear, curMonth + 1, 0);
    console.log(lastDay.toString());
    var fDateNums = firstDay.toString().split(" ", 4);
    //fDateNums[0] = weekday name (eg. mon, tue)
    //fDateNums[1] = current month (three chars String)
    //fDateNums[2] = first day of this month (always '01') 
    //fDateNums[3] = current year
    //console.log(fDateNums[0]);
    //console.log(fDateNums[1]);
    //console.log(fDateNums[2]);
    //console.log(fDateNums[3]);
    //console.log("SHOWING MONTH: " + showingMonth);

    //cssDefault();
    update();
}

/**  FUNCTION updates Calendar
*/
function update() {

    console.log("+*+ Updating +*+ ");
    var firstDay = new Date(showingYear, showingMonth, 1);
    var lastDay = new Date(showingYear, showingMonth + 1, 0);
    var fDateNums = firstDay.toString().split(" ", 4); //array
    var lastDateNums = lastDay.toString().split(" ", 4); //array

    //fDateNums[0] = weekday name (eg. Mon, Tue)
    //fDateNums[1] = current month (three chars String)
    //fDateNums[2] = first day of this month (always '01') 
    //fDateNums[3] = current year
    //lastDateNums[2] = last day of month
    console.log("\t 1st day name  " + fDateNums[0]);
    //console.log("\t current month " + fDateNums[1]);
    //console.log("\t current year  " + fDateNums[3]);
    console.log("\t first - last: " + fDateNums[2] + "-" + lastDateNums[2]);
    document.getElementById("calendarMonth").innerHTML = fDateNums[1];
    document.getElementById("calendarYear").innerHTML = fDateNums[3];

    if (0 == fDateNums[0].localeCompare("Sun")) {
        start = 1;
        end = parseInt(lastDateNums[2]);
    } else
        if (0 == fDateNums[0].localeCompare("Mon")) {
            start = 2;
            end = parseInt(lastDateNums[2]);
        } else
            if (0 == fDateNums[0].localeCompare("Tue")) {
                start = 3;
                end = parseInt(lastDateNums[2]);
            } else
                if (0 == fDateNums[0].localeCompare("Wed")) {
                    start = 4;
                    end = parseInt(lastDateNums[2]);
                } else
                    if (0 == fDateNums[0].localeCompare("Thu")) {
                        start = 5;
                        end = parseInt(lastDateNums[2]);
                    } else
                        if (0 == fDateNums[0].localeCompare("Fri")) {
                            start = 6;
                            end = parseInt(lastDateNums[2]);
                        } else
                            if (0 == fDateNums[0].localeCompare("Sat")) {
                                start = 7;
                                end = parseInt(lastDateNums[2]);
                            }

    console.log("StartDay: " + fDateNums[0])
    //console.log(" ");
    /**
    *  loop (i=cell of first day ; i<days in month ; i++)
    *   Sets cell dates
    *   Sets cell color (grey = closed)
    *   (orange = full) (blue = available)
    *   -This will need access to the database to see if appointment times are full/available
    */
    for (var i = 0; i < 42; i++) {
        var myCell = (i % 7);
        var myRow = Math.floor(i / 7) + 1;
        // console.log("ind/date/text: " + (i + 1));
        // console.log("cell num: " + myCell + "  row: " + myRow);
        // console.log(start + "<" + i + "<" + end);
        // console.log(" ");
        var myTable = document.getElementById("Calendar").rows[myRow].cells;
        if (i < start - 1 || i > (end + start - 2)) {
            myTable[myCell].innerHTML = "";
            myTable[myCell].style.backgroundColor = "lightGrey";
            //myTable[myCell].style.borderColor = "lightGrey";

        } else {
            if (myCell > 5 || myCell == 0) {
                myTable[myCell].style.backgroundColor = "lightGrey";
                //myTable[myCell].style.borderColor = "white";

            } else {
                myTable[myCell].style.backgroundColor = "white";
                //myTable[myCell].style.borderColor = "black";
            }
            myTable[myCell].innerHTML = ((i - start) + 2);
        }
    }
}//end update

function prevMo() {
    showingMonth--;
    if (showingMonth < 0) {
        showingMonth = 11;
        showingYear--;
    }
    //console.log("SHOWING MONTH: " + showingMonth);
    update();
}
function nextMo() {
    showingMonth++;
    if (showingMonth > 11) {
        showingMonth = 0;
        showingYear++;
    }
    update();
    //console.log("SHOWING MONTH: " + showingMonth);
}

function cssDefault() {
    for (var i = 7; i < 42; i++) {
        var myCell = (i % 7);
        var myRow = Math.floor(i / 7) + 1;
        var myTable = document.getElementById("Calendar").rows[myRow].cells;
        myTable[myCell].style.border = "border-collapse";
        myTable[myCell].style.padding = "10px";
    }
}//end css default

function selectCell(cell) {
    /** loop all cells and unbold
    *
    */
    console.log("this cell is: " + cell);
    if (currentCell == null) {
        console.log("cell= " + cell.value);
        currentCell == cell;
        myFunction();
    } else if (currentCell != cell) {
        //myFunction();
    }
    for (var i = 0; i < 42; i++) {
        var myCell = (i % 7);
        var myRow = Math.floor(i / 7) + 1;
        var myTable = document.getElementById("Calendar").rows[myRow].cells;
        myTable[myCell].style.border = "1px solid black";
    }
    //cell.innerHTML = "HI";
    cell.style.border = "2px solid orange";
    //cell.style.background - color = "red";
    console.log(cell);
}//end selectCell()

function selectTime(cell) {
    cell.style.border = "2px solid orange";
}

function myFunction() {

    var x = document.getElementById("Demo");
    console.log();
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function SumbitAppointment() {

}
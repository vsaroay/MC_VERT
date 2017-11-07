


/** Global Variables are declares in Calendar.HTML
 *
 */


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
    cssDefault();
    update();
}

/**  FUNCTION updates Calendar
*/
function update() {

    console.log("+*+ Updating +*+ ");
    var firstDay = new Date(showingYear, showingMonth, 1);
    var lastDay = new Date(showingYear, showingMonth + 1, 0);
    fDateNums = firstDay.toString().split(" ", 4); //array First date numbers
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
    *   (yellow = less than half full) (red = greater than half full)
    *   (white = available)
    *   -This will need access to the database to see if appointment times are full/available
    */
    for (var i = 0; i < 42; i++) {
        var myCell = (i % 7);
        var myRow = Math.floor(i / 7) + 1; //rows 1-6
        //console.log("i= " + i + "     myRow= " + myRow);
        var myTable = document.getElementById("Calendar").rows[myRow].cells;     //table of rows 1-6   
        // console.log("ind/date/text: " + (i + 1));
        // console.log("cell num: " + myCell + "  row: " + myRow);
        // console.log(start + "<" + i + "<" + end);
        // console.log(" ");
        if (i < start - 1 || i > (end + start - 2)) {
            myTable[myCell].innerHTML = "";
            myTable[myCell].style.backgroundColor = "lightGrey";
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

/*  Function prevMo()
    Called when the next month button is clicked 
    This changes the Global Var "showingMonth" 
    then it calls updateCalendar 
*/
function prevMo() {
    showingMonth--;
    if (showingMonth < 0) {
        showingMonth = 11;
        showingYear--;
    }
    //console.log("SHOWING MONTH: " + showingMonth);
    update();
    closeDropDown();
}
/*  Function nextMo()
    Called when the next month button is clicked 
    This changes the Global Var "showingMonth" 
    then it calls updateCalendar
*/
function nextMo() {
    showingMonth++;
    if (showingMonth > 11) {
        showingMonth = 0;
        showingYear++;
    }
    update();
    closeDropDown();
    //console.log("SHOWING MONTH: " + showingMonth);
}

/*
    Function cssDefault()
    Overrides default size of cells Via style.padding (in addition to text size)
*/
function cssDefault() {
    for (var i = 0; i < 42; i++) {
        var myCell = (i % 7);
        var myRow = Math.floor(i / 7) + 1;
        var myTable = document.getElementById("Calendar").rows[myRow].cells;
        myTable[myCell].style.border = "border-collapse";
        myTable[myCell].style.padding = "10px";
    }
}//end css default


/** function selectCell()
 * Called when a sell from main Calendar is clicked
 * @param cell data passed
 * 
 * It also loops all cells and unbolds the border
 * Then it orange bolds the cell border of one clicked.
*/
function selectCell(cell) {
    //console.log("this cell is: " + cell.innerHTML);

    if (cell.innerHTML == "" || cell.style.backgroundColor == "lightgrey") {
        return
    }
    if (currDay.innerHTML != cell.innerHTML) {
        currDay = cell.innerHTML;
        openDropDown();
        upDateTimeSlots(cell);
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


/** function upDateTimeStops
 * called when a new day is selected
 *  
 * resets the currTime to default -1
 * updates the "date here" of timeSlots
 * * Unbolds all cells
 * loops through var array monthlyAppointments to find timeSlots that are taken
 * Colors Cellbackgrounds of taken slots 
 */
function upDateTimeSlots(cell) {
    currTime = "-1";

    var month = fDateNums[1];
    var year = fDateNums[3];
    var date = document.getElementById("TimeSlotsDate");
    date.innerText = "   " + month + " " + currDay + ", " + year;

    var myCell;
    var myRow;
    var myTable;
    for (i = 0; i < 28; i++) {
        myCell = (i % 4);
        myRow = Math.floor(i / 4);
        myTable = document.getElementById("TimeSlots").rows[myRow].cells[myCell];     //table of cells 0-4 
        //console.log("my table= " + myTable.innerHTML);
        //if (cell != myTable.innerHTML){
        myTable.style.border = "1px solid white";
    }

}

function selectTime(cell) {
    var myCell;
    var myRow;
    var myTable;
    for (i = 0; i < 28; i++) {
        myCell = (i % 4);
        myRow = Math.floor(i / 4);
        myTable = document.getElementById("TimeSlots").rows[myRow].cells[myCell];     //table of cells 0-4 
        //console.log("my table= " + myTable.innerHTML);
        //if (cell != myTable.innerHTML){
        myTable.style.border = "1px solid white";
    }
    cell.style.border = "2px solid orange";
    currTime = cell.innerText;
    console.log("currTime= " + currTime);
}

function openDropDown() {
    var x = document.getElementById("DropDown");
    console.log("Open Drop Down");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    }
}
function closeDropDown() {
    var x = document.getElementById("DropDown");
    console.log("Close Drop Down");
    if (x.className.indexOf("w3-show") == -1) {
        return;
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

/** Function loadAppointments()
 *  Use JS Ajax JS to Call PHP script 
 * @param showingMonth
 */
function loadAppointments() {
    new Ajax.Request('Appointment.php', {
        onSuccess: function (xmlHTTP) {
            eval(mlHTTP.responseText);
        }
    });
}

/** Function SubmitAppointment()
 * 
 */
function SubmitAppointment() {

    console.log(" *+*Submitting appointment*+* ");
    console.log("Year " + showingYear + " Month: " + showingMonth + " day: " + currDay + " timeSlot: " + currTime +
        "  Status: 1 " + " appType: to be decided studentNotes" + studentNotes);

    if (currTime === "-1") {
        alert("\tTo schedule an Appointment:\n\t\tPlease Click on an Appointment Time");
        return;
    }

    activateFinalSubmitOverlay()
}

/** Function activateFinalSubmitOverlay()
 *  //fDateNums[0] = weekday name (eg. Mon, Tue)
    //fDateNums[1] = current month (three chars String)
    //fDateNums[2] = first day of this month (always '01') 
    //fDateNums[3] = current year
 */
function activateFinalSubmitOverlay() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("submitFormName").innerText = "Ryan Morris";
    document.getElementById("submitFormType").innerText = counselingType;
    document.getElementById("VerifyDate").innerText = "On: " + fDateNums[1] + " " + currDay + ", " + fDateNums[3];
    document.getElementById("VerifyTime").innerText = "With " + counselor + " At: " + currTime;


}

function finalSubmitOff() {
    document.getElementById("overlay").style.display = "none";

}

/** function finalSubmitAppointment()
 * sets parameters and uses Ajax to call PHP Script
*          id
           cal_date // year month day
           timeSlot
           status
           appType
           studentNotes
           counselorNotes
*/
function finalSubmitAppointment() {
    finalSubmitOff()
    studentNotes = document.getElementById("noteToCounselor").innerText;
    console.log(studentNotes);
    alert("Appointment Submitted");
    /*new Ajax.Request('Appointment.php', {
            onSuccess: function (xmlHTTP) {
                eval(mlHTTP.responseText);
            }
        });*/

}




var month = [
 "Januar",
 "Februar",
 "März",
 "April",
 "Mai",
 "Juni",
 "Juli",
 "August",
 "September",
 "Oktober",
 "November",
 "Dezember"
];


var actualmonth = 0;
var actualyear = 0;
var currentmonth = 0;
var currentyear = 0000;
var actualday = 0;
var myTable = document.getElementById('tabel');


function init(){
    const day = new Date();
    currentmonth = day.getMonth();
    currentyear = day.getFullYear();
    actualday = day.getDate();
    actualmonth = currentmonth;
    actualyear = currentyear;
    update();
}

function update(){
    document.getElementById("month").innerHTML = month[currentmonth] + " " + currentyear;
    const day = new Date();
    day.setFullYear(currentyear,currentmonth,1);
    var weekday = day.getDay()

    daycount = new Date(currentyear, currentmonth+1, 0).getDate();

    var i = 1;
    var cell = weekday;
    if (weekday == 0){
        var cell = 6;
    }
    else{
        var cell = weekday-1; 
    }
    var row = 1;
    
    while(i <= daycount){

        myTable.rows[row].cells[cell].innerHTML = i;
        if (currentyear < actualyear || (currentmonth<actualmonth && currentyear == actualyear) || (currentmonth == actualmonth && currentyear == actualyear && i < actualday) ){
            myTable.rows[row].cells[cell].style.color = "#ced0ce";
            //myTable.rows[row].cells[cell].style.backgroundColor = "#f07955";
        }
        if (currentmonth == actualmonth && currentyear == actualyear && i == actualday){
            myTable.rows[row].cells[cell].style.textDecoration = "underline";
            myTable.rows[row].cells[cell].style.textDecorationColor = "#f07955";
            myTable.rows[row].cells[cell].style.textDecorationStyle = "solid";
        }
        i++;
        cell++;
        if (cell > 6){
            cell=0;
            row++;
        }
    }    
}

function clear(){
    for (let i = 1; i<7; i++){
        for (let j = 0; j<7; j++){
            myTable.rows[i].cells[j].innerHTML = ""; 
            myTable.rows[i].cells[j].style.color = "#484846";
            myTable.rows[i].cells[j].style.textDecoration = "none";
        }
    }
}

function nextMonth(){
    if (currentmonth == 11){
        currentmonth = 0;
        currentyear++;
    }
    else{
        currentmonth = currentmonth + 1;
    } 
    clear();
    update();
}

function prevMonth(){

    if (currentmonth == 0){
        currentmonth = 11;
        currentyear--;
    }
    else{
        currentmonth = currentmonth - 1;
    }   
    clear();
    update();
}
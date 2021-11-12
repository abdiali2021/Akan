function fn() {
    var d= newDate();



var date=parseInt(document.getElementById("day").value);
var month=parseInt(document.getElementById("month").value);
var year=parseInt(document.getElementById("year").value);

if (day <0 || day>31 ) {
    document.getElementsByClassName('dateerror').innerHtml= "Input a valid date";
    return false;
}else if(date == "") {
    document.getElementsByClassName("dateerror").innerHtml="Field is empty";
    return false;
}else {
    d.setDate(date);
}

if (month <0 || month>12 ) {
    document.getElementsByClassName('montherror').innerHtml= "Input a valid date";
    return false;
}else if(month == "") {
    document.getElementsByClassName("dateerror").innerHtml="Field is empty";
    return false;
}else {
    d.setMonth(month);
}

if (year <0) {
    document.getElementsByClassName('yearerror').innerHtml= "Input a valid date";
    return false;
}else if(year == "") {
    document.getElementsByClassName("yearerror").innerHtml="Field is empty";
    return false;
}else {
    d.setYear(year);
}

var day= d.getDay();
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",]
var male = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame",]
var female = ["akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama"]


function findAkan() {
    var ismale = document.getElementById("male"),checked;
    var isfemale = document.getElementById("female").checked;
    if (ismale == true && isfemale == false) {
        if (day == 0) {
            alert("your name is " + male(0));
         }
         else if (day ==1) {
         alert("your name is" + male(1));
         }
         else if(day ==2) {
         alert("your name is" + male_(2));
         }
         else if(day ==3) {
            alert("your name is" + male_(3));
            }
            else if(day ==4 {
                alert("your name is" + male_(4));
                }
                else if(day ==5) {
                    alert("your name is" + male_(5));
                    }    

             else if(day ==6) {
               alert("your name is" + male_(6));
              }
    
     }
}

findAkan();


}






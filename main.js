var d = new Date()
var hour = d.getHours();
var min = d.getMinutes();
var r_a = 0.8;
var lit = "#dadada"

min = (5 * Math.ceil(min / 5));

if(hour > 12)
{
    hour = hour - 12;
}

var ONE_TO_TWELVE = [
    "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve"
];
  

var mins = [
    "five","ten","quarter","twenty","twenty five",
    "Half"
];



if (min > 55){
    hourInEnglish = ONE_TO_TWELVE[hour];
    var time = "It is " + hourInEnglish+" oclock";
}

else if (min ==0){
    hourInEnglish = ONE_TO_TWELVE[hour-1];
    var time = "It is " + hourInEnglish+" oclock";
}

else if (min == 30){
    hourInEnglish = ONE_TO_TWELVE[hour-1];
    minsInEnglish = mins[(min/5) - 1];
    var time = "It is "+minsInEnglish+" past "+hourInEnglish;
}

else if (min == 15)
{
    hourInEnglish = ONE_TO_TWELVE[hour-1];
    minsInEnglish = mins[((min)/5) - 1];
    var time = "It is "+minsInEnglish+" past "+hourInEnglish;
}

else if (min < 30){
    hourInEnglish = ONE_TO_TWELVE[hour-1];
    minsInEnglish = mins[(min/5) - 1];
    if (minsInEnglish == "five"){
        minsInEnglish = "fivemin"
    }
    if (minsInEnglish == "ten"){
        minsInEnglish = "tenmin"
    }
    var time = "It is "+minsInEnglish+" minutes past "+hourInEnglish;
} 



else if (min == 45)
{
    hourInEnglish = ONE_TO_TWELVE[hour];
    minsInEnglish = mins[((60 - min)/5) - 1];
    var time = "It is "+minsInEnglish+" to "+hourInEnglish;
}


else if (min > 30){
    hourInEnglish = ONE_TO_TWELVE[hour];
    minsInEnglish = mins[((60 - min)/5) - 1];
    if (minsInEnglish == "five"){
        minsInEnglish = "fivemin"
    }
    if (minsInEnglish == "ten"){
        minsInEnglish = "tenmin"
    }
    var time = "It is "+minsInEnglish+" minutes to "+hourInEnglish;
    
}

// var it = document.getElementById("it");
// var is = document.getElementById("is");

// it.style.color = lit;
// is.style.color = lit;

res = time.toLowerCase().split(" ");

for (i = 0; i < res.length; i++) { 
    document.getElementById(res[i]).style.color = lit;
}

setTimeout(function(){
    window.location.reload(1);
 }, 5000);
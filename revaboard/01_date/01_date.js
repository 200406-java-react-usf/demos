//inpute will be Date object
function leapYear(input){
    var leapCheck;
//take the year 
    var year = input.prototype.getFullYear();
    if(year%4==0){
        leapCheck = true;
    }else{
        leapCheck = false;
    }
    return leapCheck;
}
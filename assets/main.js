function TotalPrice(){
    

    const costAtKM = 0.21

    let valueAtKM = document.getElementById ("inputKM"). value;

    let valueAge = document.getElementById ("inputAge"). value;

    let ticketPrice = valueAtKM * costAtKM;

    // discount under 18

    let underDiscount = (ticketPrice / 100) * 20;
    let ticketForChild = ticketPrice - underDiscount

    // const ticketForChild = ticketPrice - underDiscount;

    // discount for old people
    
    let upperDiscount = (ticketPrice / 100) * 40;
    let ticketForOld = ticketPrice - upperDiscount

    // const ticketForOld = ticketPrice - upperDiscount;

    // else if zone

    if (valueAge < 18){
        ticketPrice = ticketForChild.toFixed(2);
    }
    else if (valueAge >= 65){
        ticketPrice = upperDiscount.toFixed(2);
    } 
    else{
        ticketPrice = ticketPrice.toFixed(2)
    }
    
   document.getElementById ("result").innerHTML = "Total cost is:" + "" + ticketPrice + "€"
}

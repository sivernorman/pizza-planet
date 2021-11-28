function getSizePrice(){
    var pickedSize =document.getElementById("pizza-size").value;
    return parseInt(pickedSize);
}
function crustPrice(){
var crustType = document.getElementById("crust-type").value
return parseInt( crustType);
}

function toppingMashroom(){
    var mashroom = 0;
    var addMushroomTop =document.getElementById("topping");
    if(addMushroomTop.checked ===true){
        mashroomTop = 70;
    }
    return perseInt(mashroom);
}
function sausagetopping(){
    var sausageTop = 0;
    var addSausage = document.getElementById("topping");
    if(addSausageTop.checked ===true){
        sausageTop = 70;
    }
    return perseInt(sausage);
}
function onionstopping(){
    var grattedOnion = 0;
    var calcSausage = document.getElementById("topping");
    if(addGrattedOnion.checked ===true){
        grattedOnion = 70;
    }
    return perseInt(grattedOnion);
}
 function tikkaSaucetopping(){
    var tikkaSauce = 0;
    var addTikkaSauce  = document.getElementById("topping");
    if(addTikkaSauce.checked ===true){
        tikkaSauce = 70;
    }
    return perseInt(tikkaSauce);
}
function MozarellaCheeseTopping(){
    var cheese = 0;
    var addMozarellaCheeseTopping  = document.getElementById("topping");
    if(addMozarellaCheeseTopping.checked ===true){
        tikkaSauce = 70;
    }
    return perseInt(cheese);
}
function number(){
    var selectNumber = document.getElementById("quantity").value;
    return parseInt(selectNumber);
}

function calcTotalPrice(e){
    e.preventDefault();
    var sumAmount = (getSizePrice()+getCrustPrice()+ mashroom())*(number);
    console.log(totalPrice);
    alart("Your order of" + number() + "order has been processed.Your total amount payable is"+ totalPrice + "")
}
 
$(document).ready(function ship() {

        var name = $("input#name").val();
        var number = $("input#digits").val();
        var location = $("input#location").val();

        alert("Hello " + name + ". Your order of " + number + "pizzas  has been successfuly received and will be delivered to " + location + " within one hour.The delivery will cost ksh 80/= Thank you for chosing pizza planet.");
        $("#shipping").click () 


});
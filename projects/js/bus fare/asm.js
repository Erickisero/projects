
function Calc(){
        var distance = Number(document.getElementById("distance").value);
        var quantity = Number(document.getElementById("quantity").value);


if(distance == 0 && quantity == 0){
    alert('Please enter a value');
}
else if(distance >= 1 && distance <= 10){
    document.getElementById('total').value=quantity*100;
} 
else if(distance >= 11 && distance<= 50){
    document.getElementById("total").value = quantity*500;
}
else if(distance >= 51 &&  distance<= 100){
    document.getElementById("total").value = quantity*800;
}
else if(distance >= 101 && distance<= 200){
    document.getElementById("total").value = quantity*1000;
}
else if(distance >= 201 && distance<= 300){
    document.getElementById("total").value = quantity*1200;
}
else if(distance >= 301 && distance<= 400){
    document.getElementById("total").value = quantity*1400;
}
else if(distance >=401 && distance <=500){
    document.getElementById("total").value = quantity*1500;
}
else
{alert("invalid")} 
};
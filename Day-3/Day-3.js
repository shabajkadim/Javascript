

var userAge = 20;

if(userAge > 19 ){
    console.log("Your all for DL")
}
else{
    console.log("Your not allow to DL")
}


var userAge = 25;

if(userAge < 19 && userAge < 90 ){
    console.log("userage is graeter than 19 and lesser than 90 your allow.")    
}
else{
    console.log("userAge is might lesser than 19 and or more than 90")
}

var userAge = 19;
if(userAge > 19 && userAge < 90){
    console.log("your allowed")
}else if(userAge < 19){
    console.log("your are under age")

}else if(userAge>90){
    console.log("your are over age")
}
else{
    console.log("your are alloe to LL")
}

switch("place2"){
    case"place1":
    console.log("Mumbai")
    break;
    case"place3":
    console.log("pune")
    break;
    case"place2":
    console.log("Kolhapur")
    break;

}
    var material = "steel";

    switch (material) {
        case "steel":
            console.log("Material is steel")
            break;
        case "copper":
            console.log("Material is copper")
            break;
        case "plastic":
            console.log("Material is plastic")
            break;
        default:
            console.log("Material is not defined.")
            break;
    }

var Drink = "Mango";
    switch(Drink){
        case "string" :
            console.log("string is available in stock.")
            break;
        case "orange":
            console.log("orange is  availeble in stock.")
            break;
        case  "sprite":
            console.log("mango is availeble in stock.")
            break;
        default:
            console.log ("mango is not availeble in stock")
            break;    
    }

    var myName
    console.log("myName")
    console.log(typeof("myName"))

    var mydata = ["shahabaj",18,20,32,38 ,[ "devesh","krush","rush"]]
    console.log(mydata)
    console.log(mydata.length)
    console.log(mydata[0])
    console.log(mydata[1])
    console.log(mydata[2])
    console.log(mydata[3])
    console.log(mydata[4])
    console.log(mydata[5])
    console.log(mydata[5][0])
    console.log(mydata[5][2])
    console.log(mydata[5][1])

    var employee = ['Amit','Nishat','Dhanraj'];

    console.log(employee)
    employee.push("Yallapa")
    console.log(employee)

    var number=[1,4,6,5]
    number.pop();
    number.pop();
    console.log(number)

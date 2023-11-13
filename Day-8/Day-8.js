function addition() {
    var number1 = 15;
    var number2 = 25;
    console.log(number1 + number2)
}
addition();

function add(){
    var num1=17;
    var num2=19;
    console.log(num1 + num2)
}
add();

function Addition(shahabaj,arbaj){
    console.log(shahabaj,arbaj);
}
Addition(15,20);

function Addition(shahabaj,arbaj){
    console.log(shahabaj+arbaj);
}
Addition(15,20);

function addition(ramjan,mubarak){
    console.log(ramjan-mubarak);
}
addition(30,25);

function addition(dhanu,yallesha){
    console.log(yallesha-dhanu);
}
addition(40,25);


function addition(dhanu,yallesha,){
    console.log(yallesha-dhanu);
}
addition(40,25,);

function addition(dhanu,yallesha,amit){
    console.log(yallesha+dhanu+amit);
}
addition(40,25,30);

var array=[1,2,3,4,5,6,7,8,9,10];
var target=12;

function findtarger(array,target){
    // console.log(array,target);
    var flag=false;
    for(var i=0; i < array.lenght;i++){
        if(ayyar[i]==target){
            console.log("we got it")
            flag=true;
        }
    }
    if(flag==false){
        console.log("not found")    
    }
}
findtarger(array,target);

var array=[10,20,,30,40,50,60,70,80,90];
var target=40;

function Findtarget(){
    var flag=false;
    for(var i=0; i<array.length;i++){
        if(array[i]==target){
            console.log("we got it")
            flag=true;
        }
    }
    if(flag==false){
        console.log("not found")
    }
}
Findtarget(array,target);

function functionOne(){
    console.log("first")
    console.log("second")
    return"hi from funtion"
}
functionOne();

function addition(num1 , num2){
    // console.log(num1+num2)
    return num1 + num2
}
var answer=addition(10,25)
console.log(answer)

function addition(num1,num2){
    return num1+num2
}
var answer=addition(20,25)
console.log(answer)

function test(){
    console.log("test1")
    return "hiii" 
    console.log('test2')
}
test()

function findeven(number){
    if(number%2==0){
        return"number is even"
    }else{
        return"number is odd"
        console.log("hiiii")
    }
    console.log("hiiii")
}    
console.log(findeven(3))

function findodd(num){
    if(num%2==0){
        return"number is even"
    }else{
        return"number is odd"
    }
    console.log("hiii")
}
console.log(findodd(4))



function Find(number) {
    if (number % 2 == 0) {
        return "Number is even"
    }else if(number<10){
        return"NUMBER IS LESSER THAN 10"
    }
    console.log("hiii")
    if (number > 10) {
        return "NUMBER IS GREATER THAN 10"
    }
}

console.log(Find(9))
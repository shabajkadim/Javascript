var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var target = 12;
for (var i = 0; i < array.length - 2; i++) {
    for (var j = i + 1; j < array.length - 1; j++) {
        for (var k = j + 1; k < array.length; k++) {
            // console.log(array[i], array[j], array[k])
            if (array[i] + array[j] + array[k] == target) {
                // console.log(array[i], array[j], array[k])
                console.log([i, j, k])
            }
        }
    }
}

function shabaj(){
    console.log("hello shahabaj")
}
 shabaj();
 shabaj();
 shabaj();
 shabaj();

 function even(){
    console.log("number is even")
 }

 function odd(){
    console.log("number is odd")
 }
 
 var number=2343;

if(number%2==0){
    even()
}
{
    odd()
}
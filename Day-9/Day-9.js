const numbers=[0,1,2,3,3,4,4,1,0,2,5,5,6,6,5];
let temp = {};
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] in temp) {
        temp[numbers[i]] += 1 ;
    }else{
        temp[numbers[i]] =1 ;
    }
    // console.log(temp,i);
} 
console.log(temp)
console.log(Object.keys(temp));

const name= ["s","s","s","p","p","r","d","r","d","f","f"];
let set={};
 
for(let i=0;i<name.length;i++){
    if(name[i] in set){
        set[name[i]]+=1;
    }else{
        set[name[i]]=1;
    }
    // console.log(set,i);
}
console.log(set)
console.log(Object.keys(set));
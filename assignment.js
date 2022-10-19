
//prime number or not 
let num=15;
let count=0;
for(let i=2;i<num;i++){
    if(num%i==0){
        count++;
        break;
    }
    
}
if(count==0){
    console.log("Yes");
}
else{
    console.log("No");
}





//check number is palindrome or not
let num1=1234;
let conv_num=num.toString();
 let rev_num=conv_num.split("").reverse().join("");
 if(conv_num==rev_num){
     console.log("Yes");
 }
 else{
     console.log("No");
 }
 

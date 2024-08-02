function leap(num){
    if( (num%4==0 )|| (num%100==0  && num%400==0))
     return true;
    else 
      return false;

}
//console.log(leap(2021))

//age
/*function det(age) {
    let res;
    if (age <= 12) {
        res = 10;
    } else if (age >= 13 && age <= 17) {
        res = 15;
    } else if (age >= 18) {
        res = 20;
    } else {
        res = 'Invalid age'; 
    }
    return res;
}

console.log(det(29))*/

/*function checker(temp,rain){
    var res
    if (temp<=20 && rain ){
        res= "you need to wear a coat"
    }
    else if (!rain && temp==20){
        res="the weather is warm"
    }
    else {
        res= "it s very hot tdoay"
    }
    return res
}
console.log(checker(40,true))*/


/*function fibonachi(n){
    if(n==1){
        return 1
    }
    else if(n==0){
        return 0
    }
    else {
        return fibonachi(n-1)+fibonachi(n-2);
    }   
    
}
console.log(fibonachi(6))

*/

/*function palin(ch){
    var i=0
    if (ch=="")
      return false
    else if(i==ch.length){
        return true
    }
    else {
        
    }
      
   
}*/


function pow(x,z){
    if (x==1 ||z==0){
       return 1
    }
    else {
        return x*pow(x,z-1)
    }
}
console.log(pow(2,3))
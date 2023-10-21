//task#01
//Filter Even Number
var you = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var me = [];
for (var i = 0;i<you.length;i++){
  if(you[i] % 2 === 0){
     me.push(you[i]);
  }
}
document.write(me); 
//Task#02
//Sum Of Odd Number
var mun = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 var num = 0;
 for(var i = 0;i<mun.length;i++){
   if(mun[i] % 2 !==0){
      num += mun[i]
   }
 }
 document.write(num); 
 //Task#03
 //Fizz Buzz
 for(var i = 1;i <= 100;i++){
      if(i % 3 === 0 && i % 5 === 0 ){document.write("Fizz Buzz" + "</br>")}
      else if (i % 3 === 0) {
       document.write("Fizz" + "</br>");
      }else if(i % 5 === 0 ){
         document.write("Buzz"+ "</br>");
      }
      else{
         document.write(i + "</br>")
       }
    }
    //task#04
    //nUMBER cOUNT
     var nam = ['Rohama','Zainab','Hamza']
     var maximum = 0;
     for (let i = 0;i<nam.length; i++) {
                 maximum += nam[i].length;
             }
     document.write(maximum);
     //task#05
     //Maximum Length Word
     var minimum = [ 'book', 'bag', 'scale', 'pencil'];
var max = '';
for ( i = 0; i < minimum.length; i++) {
  if (minimum[i].length > max.length) {
    max = minimum[i];
  }
}
document.write(max);   
//task#06
//Remove Short Word
var from = [ 'book', 'bag', 'scale', 'pencil'];
var words=[];
for(i=0; i < from.length; i++){
   if(from[i].length >= 3){
     words.push(from[i])
   }
}
console.log(words);
//Task #07 
//Multiplication 
var user = prompt("Enter any number (greater than zero)");
for(i=1; i <= 10; i++){
   document.write(user + "x" + i + "=" + user*i + "</br>" );}


//Task # 08
//Array Sorrting
var free = [5, 43, 100, 7, 109];
var muft = [];
for (let i = 0; i < free.length; i++) {
   let j = 0;
   while (j < muft.length && free[i] > muft[j]) {
     j++;
   }
   muft.splice(j, 0, free[i]);
}
document.write(muft); 

//Task # 09
//Search And Replace 
 var rome = ['pakistan','india','banglades','newzeland','japan','austrilla'];
 var search = prompt('Enter country:');
 var ne= prompt('Enter a new country to replace the searched country with:');
 for (let i = 0; i < rome.length; i++) {
   if (rome[i] === search) {
     rome[i] = ne;
   }else{
      alert("Your Entered country is not in the list or try again !");
   } 
   break
 }
 document.write(rome);

//Task # 10
//UniqueNumber
 var num = [1, 2, 3, 4, 5, 1, 2, 3];
 var unique = [];
 for ( i = 0; i < num.length; i++) {
   var wow = true;
   for ( j = 0; j < unique.length; j++) {
     if (num[i] === unique[j]) {
       wow= false;
       break;
     }
   }
   if (wow) {
     unique.push(num[i]);
   }
 }
 document.write(unique);    
    
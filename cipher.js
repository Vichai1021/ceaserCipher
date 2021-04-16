function rot13(sentence){
  var answer = ""
  
  for (var i=0; i<sentence.length; i++){
    if (sentence.charCodeAt(i)>96 && sentence.charCodeAt(i)<123){
      if (sentence.charCodeAt(i)<110 ){
       answer += String.fromCharCode(sentence.charCodeAt(i) + 13
  )
    }
   
    else{
     answer +=String.fromCharCode(sentence.charCodeAt(i)-13)
   }
    }
   else{
     answer += sentence.charAt(i)
   } 
  }
    
 return answer;


}
console.log(rot13("hello world"))

//charCodeAt is based on ASCII code

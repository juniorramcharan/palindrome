//get values from the interface
function getThePalindrome(stringValue){
    //get String Value.
    let stringValues = document.getElementById("stringValue").value;

    //sanitize the string value
    let lowercasevalue = stringValues.toLowerCase();
  cleanStringValue =  lowercasevalue.replace(/[^0-9a-z]/gi, '');
  
                        document.getElementById("alert").classList.add("invisible");
    //reverse the string value
  let reverseValue = doTheReverse(cleanStringValue);

    //display the value
    checkForPalindrome(cleanStringValue, reverseValue);
}
function doTheReverse(valueToReverse){
    let result =[];
    for (let index = valueToReverse.length-1; index >= 0;  index--) {
       
        result += valueToReverse[index];
     }
     return result;

}

function checkForPalindrome(stringValue, reverseValue){
    
    for (let index = 0; index < stringValue.length;  index++) {
       
        if( stringValue != reverseValue){
            document.getElementById('result').innerHTML =`Sorry your string: ${stringValue} is not a Palindrome`;
            document.getElementById("alert").classList.remove("invisible");
           
        }else{
            document.getElementById('result').innerHTML =`Congratulations your string: ${stringValue} is a Palindrome`;
            document.getElementById("alert").classList.remove("invisible");
        }
     }
     
   

}


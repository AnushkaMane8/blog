function method1(){ 
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;
    
    let val = (str1.toLowerCase() === str2.toLowerCase());
    let s =val.toString();
    if(s=="true") 
    document.getElementById("display1").innerHTML = "Strings are equal";
    else 
    document.getElementById("display1").innerHTML = "Strings are not equal";
   } 
   function method2(){ 
    let s1 = document.getElementById("str1").value;
    let s2 = document.getElementById("str2").value;
    var a = s1.length;
    var b = s2.length;
    if(a==b) 
    if (s1.toLowerCase() === s2.toLowerCase()) 
    {document.getElementById("display2").innerHTML = "String lengths are equal and strings are equal";}
    else 
    { 
    document.getElementById("display2").innerHTML = "String lengths are equal but strings are not equal";
    } 
    else if(a>b) 
    document.getElementById("display2").innerHTML = "String 1 length is greater than String 2 length and strings are not equal";
    
    else document.getElementById("display2").innerHTML = "String 1 length is less than String 2 length and strings are not equal";
   } 
   function method3(){ 
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;
    let val = str1.localeCompare(str2);
    let s =val.toString();
    document.getElementById("display3").innerHTML = s==0?"Strings are equal":"Strings are not equal"}

    function method4(){ 
        var str1 = document.getElementById("str1").value;
        var str2 = document.getElementById("str2").value;
        
        let val = (str1 ==str2);
        let s =val.toString();
        if(s=="true") 
        document.getElementById("display4").innerHTML = "Strings are equal";
        else 
        document.getElementById("display4").innerHTML = "Strings are not equal";
       } 

       function compareStrings() {
        var str1 = document.getElementById('str1').value;
        var str2 = document.getElementById('str2').value;
    
        // Define a regular expression to match only letters and numbers
        var regex = /^[a-zA-Z0-9]+$/;
    
        if (regex.test(str1) && regex.test(str2)) {
            if (str1.match(regex).join('') === str2.match(regex).join('')) {
                document.getElementById("display5").innerHTML = "Strings are equal";
            } else {
                document.getElementById("display5").innerHTML = "Strings are  not equal";
            }
        } else {
            document.getElementById("display5").innerHTML = "Strings are not equal";
        }
    }
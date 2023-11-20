var Arrayman=[]; var arrayfinman=[]; var n; function lengthh_man(){     var n=document.getElementById('1').value;     var str="You have entered length:"+n;     document.getElementById("res2").innerHTML=str; 
} 
 
function arrayip_man(){ 
    let arrval=document.getElementById('2').value;   
    arrayfinman=arrval.split(','); 
    if(arrayfinman.length>n) 
    { 
        alert("Array size exceeded!"); 
        arrayfinman = Arrayman; 
        return; 
    } 
    Arrayman=arrval.split(',');     var str="You have entered :"+arrayfinman;     document.getElementById("res2").innerHTML=str; 
    n=arrayfinman.length; 
} 
 
function del_man(){     var key=-1; 
    let val=document.getElementById('delete').value;     for(var i=0;i<Arrayman.length;i++){ 
        if(Arrayman[i]==val){             key=i;             break;       
        }    
    } 
    if(key==-1){ 
        var str="Value :"+val+" is not present in array";        document.getElementById("res2").innerHTML=str;   
    } 
    else{ 
        for(var i=key;i<Arrayman.length-1;i++){ 
            Arrayman[i]=Arrayman[i+1]; 
        } 
        var str="Value :"+val+" is deleted";         document.getElementById("res2").innerHTML=str;         n-=1;        
    } 
} function find_man(){     var key=-1; 
    var val=document.getElementById('fnd').value; 
    for(var i=0;i<n;i++){ 
        if(Arrayman[i]==val){             key=i;             break;       
        }    
    } 
    if(key==-1){         var str="Value :"+val+" is not present in array"; 
        document.getElementById("res2").innerHTML=str;   
    }     else{         var str="Value :"+val+" is present in array"; 
        document.getElementById("res2").innerHTML=str;   
    } 
} 
function Empty_man(){     Arrayman=[]; 
    document.getElementById("res2").innerHTML="Array is Emptied"; 
} 
 
function Display_man(){ 
    var str="";     for(var i=0;i<n;i++){         if(Arrayman[i]!=undefined) 
            str+=Arrayman[i]; 
    } 
    document.getElementById("res2").innerHTML=str; 
} 
 
var Arrayin=[]; var arrayfinin = []; 
var m; 
 
function lengthh_in(){     var m=document.getElementById('1').value;     var str="You have entered length:"+m;     document.getElementById("res1").innerHTML=str; 
} 
 
function arrayip_in(){ 
    let arrval=document.getElementById('2').value;   
    arrayfinin=arrval.split(','); 
    if(arrayfinin.length>m) 
    { 
        alert("Array size exceeded!");         arrayfinin = Arrayin; 
        return; 
    } 
    Arrayin=arrval.split(',');     var str="You have entered :"+arrayfinin;     document.getElementById("res1").innerHTML=str; 
    m=arrayfinin.length;     
} function del_in(){ 
    let val=document.getElementById('delete').value; 
    var f=Arrayin.indexOf(val);          if(f==-1){         var str="Value :"+val+" is not present in array"; 
        document.getElementById("res1").innerHTML=str;   
    }     else{         delete Arrayin[f];         var str="Value :"+val+" is deleted"; 
        document.getElementById("res1").innerHTML=str;       
    }    
} function find_in(){ 
    var val=document.getElementById('fnd').value;     var f=Arrayin.indexOf(val); 
    if(f==-1){ 
        var str="Value :"+val+" is not present in array";         document.getElementById("res1").innerHTML=str;       }     else{ 
        var str="Value :"+val+" is present in array"; 
        document.getElementById("res1").innerHTML=str;   
    } 
} 
function Empty_in(){     Arrayin=[]; 
    document.getElementById("res1").innerHTML="Array is Emptied"; 
} 
function Display_in(){ 
    var str=""; 
    for(var i=0;i<Arrayin.length;i++){         if(Arrayin[i]!=undefined)             str+=Arrayin[i]; 
    } 
    document.getElementById("res1").innerHTML=str; 
} 


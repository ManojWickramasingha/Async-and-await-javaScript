function look(msg)
{
    document.getElementById('demo').innerHTML = msg;
}

let myPromises = new Promise(function(resolve,rejecte){
    num = 7;
    if(num<10)
    {
        resolve("function write");
    }else{
   
        rejecte("function  wrong");
    
    }
});

//call the promisess
myPromises.then(
    function(error)
{
    look(error);
},
function(e){
    look(e);
}


);

//------------------------------callback demo----
//----------
setTimeout(function(){
    dis("lokk for here");
},3000);


function dis(msg)
{
    document.getElementById('dm1').innerHTML = msg;
}

//------implement using  wait promisess--


let pr =  new Promise(function(r,rj){
    setTimeout(function(){
        ss("hello world");
    },3000)
});

function ss(value)
{
        document.getElementById('dc').innerHTML = value;
}


//------------------
let pr1 = new Promise(function(r,rj){
    setTimeout(function(){
        r("resolve it right mchn");
    },3000)
});
pr1.then(
    function(msg){
        document.getElementById('dc').innerHTML = msg;
    }
);


//-----use of real world sinario---
//---------------------------------
    function spp(msg)
    {
        document.getElementById('rl').innerHTML = msg;
    }

    function file(callback)
    {
        let eq = new XMLHttpRequest();
        eq.onload = function(){
              if(eq.status == 200){
                callback(this.responseText);
              }else{
                callback(" Error " + eq.status);
              }
        }
       eq.open('GET',"heelo.html");
        eq.send();
       
    }
    file(spp);
//async and await make promises easier to write
//---------

//async function retern to the promises
function dis(sm){
    document.getElementById('r2').innerHTML = sm;
}

async function hell()
{
    return "Hello world";
}



hell().then(
    function(value){
        dis(value);
    },
    function(err)
    {
        dis(err);
    }
);



//---------------
function aq()
{
    return Promise.resolve("hello world");
}
aq().then(
    function(value)
    {
        dis(value);
        // document.getElementById('r2').innerHTML = value;
    }
);
//----use to awit function--
//--------------------------

async function add()
{
    let promiss = new Promise(function(resolve,rejected){
        resolve("manoj wickramasingha");
    });
    document.getElementById('aw').innerHTML = await promiss;
}
add();
//---waiting for a timeout----
//-----------------
async function add1()
{

    let prm = new Promise(function(resolve){
        setTimeout(function(){
            resolve("help mee dear---");
        },3000);
    });
    document.getElementById('aw').innerHTML = await prm;
}
add1();

//-----real world sinario--
//----------------------

async function person()
{
    let eq = new Promise(function(resolve){
        let req = new XMLHttpRequest();
       
        req.onload = function()
        {
            if(req.status == 200)
            {
                resolve(req.response);
            }else{
                resolve("not fund file path..");
            }
        };
        req.open('GET', "heelo.html");
        req.send();
        
    });
    document.getElementById('aw').innerHTML = await eq;
}
person();

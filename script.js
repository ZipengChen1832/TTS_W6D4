//this part is to generate a random number
function getRandomNumber()
{
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            let rand = Math.floor(Math.random()*10);
            resolve(rand);
        }, 500)
    })
}

function asyncFunc()
{
    let a = getRandomNumber();
    a.then(val=>console.log(val));
}

asyncFunc();


//this part is to fetch remote data
function getCityInfo(city)
{
    fetch("https://geocode.xyz/"+city+"?json=1")
    .then(res =>{return res.json()})
    .then(info => console.log(info.latt+" "+info.longt));
}

getCityInfo("seattle")

let axios=require('axios')



const getWeathersOfCity=async function(res,req){
try{
    let cities=["Banglore","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]

    let cityObjArray=[]
    for(let i=0;i<cities.length;i++){
    let obj={city:cities[i]}
    let resp=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities}$appid=60ff0b79c73713b9c3ed806bea926377`)
console.log(resp.data.temp)
obj.temp=resp.data.main.temp//{city:"Bangaluru",temp:301.2}
cityObjArray.push(obj)
    }
    let sorted=cities.sort(function(a,b){return a.temp-b.temp})
    console.log(sorted)
    res.status(200).send({status:true,data:sorted})
}

catch(error){
    console.log(error)
    res.status(500).send({status:false,msg:"server error"})
}
}
module.exports.getWeathersOfCity=getWeathersOfCity
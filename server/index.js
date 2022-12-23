const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

let nameArray = ["Ahmed","Disha","Sri Ganesh","Soubhik","Chavvi","Krishna"]

function getRandomName (){
    let size = nameArray.length;//6
    let randomIndex = Math.floor(Math.random()*size);//0-5
    return nameArray[randomIndex];
}
// getById
app.get("/getByIndex/:index",(req,res)=>{
    console.log(req.params);
    let index = parseInt(req.params.index);
    console.log("index = ",nameArray[index]);
    let size = nameArray.length;
    if(nameArray[index]){
        return res.status(200).json({
            name:nameArray[index]
        })
    }
    return res.status(404).json({
        name:"I am not there !!!"
    })
})
// addName
app.post("/addName",(request,response)=>{
    let name = request.body.name;
    console.log(name);
    nameArray.push(name);
     response.status(200).json({
        message:`New Name Added ${name}`
    })
})

app.get('/home', (request, response) => {
    return response.status(200).json({
        message:`Hello 4rm ${getRandomName()} !!!`
    })
})

app.get("/allNames",(req,res)=>{
    console.log("inside /allNames backend");
    return res.status(200).json({
        message:"success",
        data:nameArray
    })
})






































































// app.get('/*', (request, response) => {
//     return response.status(401).json({
//         message:"He He Dhappa !!! (You are on the wrong route)"
//     })
// })









app.listen(5294, () => {
    console.log('app listening on port 5294');
})
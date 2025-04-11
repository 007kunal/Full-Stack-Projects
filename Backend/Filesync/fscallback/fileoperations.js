function writeAsync(){
    const fs = require("fs");
fs.writeFile("data.txt","using fs module to write it",(err)=>{
    if(err){
        console.log("error during filewrite"+err)

    }else{
        console.log("data written successfully")
    }
})

}

function readAsync(){
    const fs = require("fs");
fs.readFile("data.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error during fileread"+err)

    }else{
        console.log("data read successfully")
    }
})

}
const obj={
    writeAsync,
    readAsync
}

module.exports=obj;




//utf- 8 is used to conver buffer into human readable format
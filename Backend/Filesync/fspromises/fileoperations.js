const { readFile } = require('fs');

const fs= require('fs').promises;
// const promise=fs.writeFile('data.txt',"hello using fs promises")
// console.log(promise)

// promise.then(()=>{
//     console.log("data written successfully");
// })
// .catch((err)=>{
//     console.log("error while writting "+err)
// })
// .finally(()=>{
//     console.log("task finished")
// })

async function readData(){
    const data=await fs.readFile("data.txt",{encoding:"utf-8"});
    console.log(data);
}
readData();
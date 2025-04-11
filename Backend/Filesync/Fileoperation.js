const fs = require("fs");

function writedata(Student) {
  try {
    fs.writeFileSync("data.txt", "hello writing data using node js");
    console.log("Data written successfully");
  } catch (err) {
    console.log("Error while writing the data: " + err);
  }
}

function readdata() {
  try {
    const data = fs.readFileSync("data.txt", "utf8");
    console.log("Data read successfully:");
    console.log(data);
  } catch (err) {
    console.log("Error while reading the data: " + err);
  }
}
function appenddata(){
    try{
        fs.appendFileSync("data.txt","welcome to abes")
    console.log("data appended successfully")

    }catch(err){
        console.log("Error while appending the data: " + err)
    }
    
}

function deletedata(){
    try{
        fs.unlinkSync("data.txt","welcome to abes")
    console.log("data deleted successfully")

    }catch(err){
        console.log("Error while deleting the data: " + err)
    }
    
}


const obj={
    writedata,
readdata,
appenddata,
deletedata


}
module.exports=obj;


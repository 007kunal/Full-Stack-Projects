
const { myinfo, collegeInfo } = require('./logic'); 

function displaymyInfo(){
    console.log("My Info:");
    console.log("Name:", myinfo.name);
    console.log("Roll Number:", myinfo.rollnum);
    console.log("Branch:", myinfo.branch);
    console.log("Course:", myinfo.course);
    console.log("\n");
}

function displaycollegeInfo() {
    console.log("College Info:");
    console.log("College Name:", collegeInfo.collegeName);
    console.log("University Name:", collegeInfo.universityName);
    console.log("Address:", collegeInfo.address);
}
displaymyInfo();
displaycollegeInfo();
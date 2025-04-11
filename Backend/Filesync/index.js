const { writedata, readdata, appenddata, deletedata } = require('./Fileoperation');

const obj={
writedata,
readdata,
appenddata,
deletedata
}

require( './Fileoperation');
writedata();
readdata();
appenddata();
deletedata();
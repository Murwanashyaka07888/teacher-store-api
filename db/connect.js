const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url,{
      readPreference: 'primary',
      authMechanism: 'SCRAM',
      readPreferenceTags: {dc: "ny", rack: "rl"},
      retryWrites:true,
      retryReads:true,
    })
    .then(()=>{
        console.log("connected o the database!")
    })
    .catch((err)=>{
        console.log("Error connecting to the database,err");
    });
};

module.exports = connectDB;
const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise;

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
let uri = '' ; //Here you should put ur DB uri

mongoose.connect(uri, options).then(
() => {
    console.log('Connected to the database!')
},
    err => { console.log('Error! Could not connect') 
        console.log(err);
    }
);
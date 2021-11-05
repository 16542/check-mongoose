const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017',{
    dbName:'chek-mongoose',
    useNewUrlParser:true,
    useUnifiedTopology: true

})
.then(()=>{
    console.log('mongodb connected.')
})
.catch(()=>{
    console.error('mongodb not connected.')
})
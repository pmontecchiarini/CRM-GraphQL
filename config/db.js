const mongoose = require('mongoose');
require('dotenv').config( { path: 'variables.env'} );

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('DB connected')
    } catch (error){
        console.log('There was an error');
        console.log(error);
        process.exit(1); //stops the app since there was no connection to db
    }
}

module.exports = connectDB;
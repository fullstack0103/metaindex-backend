const mongoose = require('mongoose');

const URI = "mongodb+srv://dbUser:dbUser@cluster0.gjhqu.mongodb.net/metaIndex?retryWrites=true&w=majority"

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then(() => {
    console.log('Database connected')
  },
    error => {
      console.log('Database could not be connected : ' + error)
    }
  );
}

module.exports = connectDB;
const mongoose = require('mongoose');
module.exports.connectedToDatabase = () => {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB Connected"))
    .catch(err => console.error(err));
};


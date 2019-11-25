const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const Schema = mongoose.Schema;

// var PersonSchema = new Schema({
//   name: { type: String, required: true },
//   age: Number,
//   favoriteFoods: [String]
// });
//
// const Person = mongoose.model("Person", PersonSchema);

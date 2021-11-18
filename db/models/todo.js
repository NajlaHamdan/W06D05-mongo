const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isDelete: { type: Boolean, default: false },
  isComplete: { type: Boolean, default: false },
});

module.exports=mongoose.model("todo",todoSchema);
// module.exports={
//     todoModel
// }

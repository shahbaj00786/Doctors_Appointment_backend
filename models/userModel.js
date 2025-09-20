import mongoose from "mongoose";

const userShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default:"https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg"
  },

  address: {
    type: Object,
    default:{line1:'', line2:''}
  },

  gender: {
    type: String,
    default: "Not Selected",
  },

  dob: {
    type: Object,
    default: "Not Selected",
  },

  phone: {
    type: Object,
    default: "00000000",
  },
});

const userModel =
  mongoose.models.user || mongoose.model("user", userShema);

export default userModel

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    course: { type: String, required: true },
    id: { type: String },
});

const UserSchema = mongoose.model("User", userSchema);
export default UserSchema
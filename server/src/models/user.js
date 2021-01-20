import { Schema, model, Types } from "mongoose";
import Class from "./class";
const UserSchema = new Schema({
    username: String,
    createdAt: { type: Date, default: Date.now },
    password: String,
    classes: [{ type: Types.ObjectId, default: [], ref: "classes" }]
})

const UserModel = model("users", UserSchema);

export default UserModel;
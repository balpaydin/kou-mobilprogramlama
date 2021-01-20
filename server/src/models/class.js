import { Schema, model, Types } from "mongoose";

const ClassSchema = new Schema({
    classId: String,
    name: String,
    description: String,
    createdUser: { type: Schema.Types.ObjectId, ref: "users" },
    lessonName: String,
    homeworks: [{ type: Types.ObjectId, default: [], ref: "homeworks" }],
    users: [{ type: Schema.Types.ObjectId, default: [], ref: "users" }],
    createdAt: { type: Date, default: Date.now }
})

const ClassModel = model("classes", ClassSchema);

export default ClassModel;
import { Schema, model } from "mongoose";

const ResponseSchema = new Schema({
    homework: { type: Schema.Types.ObjectId, ref: "homeworks" },
    user: { type: Schema.Types.ObjectId, ref: "users" },
    response: String,
    createdAt: { type: Date, default: Date.now }
})

const ResponseModel = model("responses", ResponseSchema);

export default ResponseModel;
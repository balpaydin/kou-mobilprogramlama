import { Schema, model } from "mongoose";

const HomeworkSchema = new Schema({
    class: { type: Schema.Types.ObjectId, ref: "classes" },
    name: String,
    body: String,
    response: { type: [Schema.Types.ObjectId], default: [], ref: "responses" },
    createdAt: { type: Date, default: Date.now }
})

const HomeworkModel = model("homeworks", HomeworkSchema);

export default HomeworkModel;
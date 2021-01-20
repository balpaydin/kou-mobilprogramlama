import Result from "../models/Result";
import { Types } from "mongoose";
import HomeworkModel from "../models/homework";
import ClassModel from "../models/class";

const HomeworkService = {
    add: async ({ classId, name, body }) => {
        let result;
        const model = {
            class: Types.ObjectId(classId),
            name,
            body
        };
        try {
            const data = await HomeworkModel.create(model);
            const test = await ClassModel.updateOne({ _id: classId }, { $push: { homeworks: data._id } });
            result = new Result(true, "", data);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    },
    getById: async (id) => {
        let result;
        try {
            const data = await HomeworkModel.findById(id).exec();
            result = new Result(true, "", data);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    },
    remove: async (id) => {
        let result;
        try {
            const data = await HomeworkModel.deleteOne({ _id: id });
            result = new Result(true, "", data);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    }
}

export default HomeworkService;
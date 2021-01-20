import { Types } from "mongoose";
import ResponseModel from "../models/response";
import Result from "../models/Result";

const ResponseService = {
    add: async ({ homeworkId, userId, response }) => {
        let result;
        let model = {
            homework: Types.ObjectId(homeworkId),
            user: Types.ObjectId(userId),
            response
        }
        try {
            const data = await ResponseModel.create(model);
            result = new Result(true, "", data);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    },
    get: async (id) => {
        let result;
        try {
            const data = await ResponseModel.findById(id).exec();
            if (data)
                result = new Result(true, "", data);
            else result = new Result(false, "cevap bulunamadi", null);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    },
    getByQuery: async ({ homeworkId, userId }) => {
        let result;
        try {
            const data = await ResponseModel.find({ homework: homeworkId, user: userId }).exec();
            if (data.length)
                result = new Result(true, "", data);
            else result = new Result(false, "ödev bulunamadi", null);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    },
    getByHomeworkId: async (homeworkId) => {
        let result;
        try {
            const data = await ResponseModel.find({ homework: homeworkId }).populate("user").exec();
            if (data.length)
                result = new Result(true, "", data);
            else result = new Result(false, "ödev bulunamadi", null);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    }
}

export default ResponseService;
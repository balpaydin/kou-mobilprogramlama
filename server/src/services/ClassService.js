import ClassModel from "../models/class";
import { Types } from "mongoose";
import Result from "../models/Result";
import HomeworkModel from "../models/homework";
import UserModel from "../models/user";

const ClassService = {

    add: async ({ classId, name, createdUser, lessonName, description }) => {
        let result;
        const model = {
            classId,
            name,
            createdUser: Types.ObjectId(createdUser),
            lessonName,
            description,
        }
        try {
            const data = await ClassModel.create(model);
            if (data)
                result = new Result(true, "Sınıf Oluşturuldu.", data);
            else result = new Result(false, "Sınıf oluşturma başarısız.", null);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;

    },
    get: async (id) => {
        let result;
        try {
            const data = await (await ClassModel.findById(id).populate("users")).populate("createdUser");
            if (data)
                result = new Result(true, "", data);
            else result = new Result(false, "", null);

        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    },
    list: async () => {
        let result;
        try {
            const data = await ClassModel.find().populate("createdUser").exec();
            if (data)
                result = new Result(true, "", data);
            else result = new Result(false, "", null);

        } catch (error) {
            result = new Result(false, error.message, null);
        }

        return result;
    },
    setName: async ({ id, name }) => {
        const result = await ClassModel.updateOne({ _id: id }, { name }).exec();
        return result;
    },
    addUser: async ({ id, userId }) => {
        let result;
        try {
            if (typeof userId == "string") {
                await ClassModel.updateOne({ _id: id }, { $push: { users: Types.ObjectId(userId) } });
                await ClassModel.updateOne({ _id: userId }, { $push: { classes: Types.ObjectId(id) } });
            }
            else if (typeof userId == "object") {
                let users = [];
                for (let i = 0; i < Object.keys(userId).length; i++) {
                    users.push(Types.ObjectId(userId[i]));
                    const update = await UserModel.updateOne({ _id: userId[i] }, { $push: { classes: Types.ObjectId(id) } });
                }
                await ClassModel.updateOne({ _id: id }, { $push: { users: { $each: users } } });
            }
            result = new Result(true, "", null);
        } catch (error) {
            result = new Result(false, error.message, null);
        }

        return result;
    },
    removeUser: async ({ id, userId }) => {
        let result;
        try {
            const data = await ClassModel.updateOne({ _id: id }, { $pull: { users: userId } });
            result = new Result(true, "", null);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    },
    getClassesByUserId: async (userId) => {
        let result;
        try {
            const data = await ClassModel.find({ createdUser: Types.ObjectId(userId) }).exec();
            if (data)
                result = new Result(true, "", data);
            else result = new Result(false, "", null);

        } catch (error) {
            result = new Result(false, error.message, null);
        }

        return result;
    },
    getHomeworkByClassId: async (classId) => {
        let result;
        try {
            const data = await HomeworkModel.find({ class: Types.ObjectId(classId) }).exec();
            result = new Result(true, "", data);
        } catch (error) {
            result = new Result(false, error.message, null);
        }

        return result;
    },
    getClassesByRegisterId: async (userId) => {
        let result;
        try {
            const data = await ClassModel.find({ users: Types.ObjectId(userId) }).exec();
            if (data)
                result = new Result(true, "", data);
            else result = new Result(false, "", null);

        } catch (error) {
            result = new Result(false, error.message, null);
        }

        return result;
    }

}

export default ClassService;
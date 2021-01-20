import UserModel from "../models/user";
import Result from "../models/Result";
import HomeworkModel from "../models/homework";

const UserService = {
    add: async (user) => {
        let result;
        try {
            const data = await UserModel.create(user);
            result = new Result(true, "", data);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    },
    get: async (id) => {
        let result;
        try {
            const data = await UserModel.findById(id);
            if (data) result = new Result(true, "", data);
            else result = new Result(false, "Kullanıcı bulunamadı!", null);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    },
    getUsersByUsername: async (username) => {
        let result;
        try {
            const data = await UserModel.find({ username: { $regex: '.*' + username + '.*' } }).limit(3);
            if (data) result = new Result(true, "", data);
            else result = new Result(false, "Kullanıcı bulunamadı!", null);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    }
    ,
    setUsername: async ({ id, username }) => {
        let result;
        try {
            const data = await UserModel.updateOne({ _id: id }, { username }).exec();
            result = new Result(true, "", data);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    },
    login: async ({ username, hashPassword }) => {
        let result;
        try {
            const data = await UserModel.findOne({ username, password: hashPassword }).exec();
            if (data) result = new Result(true, "", data);
            else result = new Result(false, "Kullanıcı adı veya şifre yanlış!", null);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    },
    getUserByUserName: async (username) => {
        let result;
        try {
            const data = await UserModel.findOne({ username }).exec();
            if (data) result = new Result(true, "", data);
            else result = new Result(false, "Kullanıcı bulunamadı!", null);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    },
    exists: async (username) => {
        let result;
        try {
            const check = await UserModel.exists({ username });
            result = new Result(true, "", check);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    },
    getHomeworks: async (id) => {
        let result;
        try {
            const data = await UserModel.findById(id).populate({ path: "classes", populate: { path: "homeworks" } }).exec();
            let homeworks = [];
            data.classes.forEach(c => {
                homeworks.push(...c.homeworks);
            });
            result = new Result(true, "", homeworks);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    }
}

export default UserService;
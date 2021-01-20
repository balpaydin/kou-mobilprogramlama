import jwt from "jsonwebtoken";
import crypto from "crypto";
import UserService from "./user";
import Result from "../models/Result";

export default {

    login: async ({ username, password }) => {
        let result;
        const hashPassword = crypto.createHash("md5").update(password).digest("hex");
        const user = await UserService.login({ username, hashPassword });
        if (user.success) {
            const token = jwt.sign({ id: user.data.id, username: user.data.username }, "kouBaris");
            result = new Result(true, "", token);
        } else result = new Result(false, user.message, null);
        return result;
    },
    register: async (user) => {
        let result;
        const _user = {
            username: user.username,
            password: crypto.createHash("md5").update(user.password).digest("hex")
        }
        try {
            const check = await UserService.exists(user.username);
            if (!check.data) {
                const data = await UserService.add(_user);
                const token = jwt.sign({ id: data.id, username: data.username }, "kouBaris");
                result = new Result(true, "kayit basarili", token);
            } else result = new Result(false, "Kullanıcı zaten var!", null);
        } catch (error) {
            result = new Result(false, error.message, null);
        }
        return result;
    }
}


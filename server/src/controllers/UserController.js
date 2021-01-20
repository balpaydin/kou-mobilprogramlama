import UserService from "../services/user";

const UserController = {
    getUsersByUsername: async (req, res) => {
        const { username } = req.params;
        const result = await UserService.getUsersByUsername(username);
        res.json(result);
    },
    get: async (req, res) => {
        const { id } = req.params;
        const result = await UserService.get(id);
        res.json(result);
    },
    getHomeworks: async (req, res) => {
        const { id } = req.user;
        const result = await UserService.getHomeworks(id);
        res.json(result);
    }
}

export default UserController;
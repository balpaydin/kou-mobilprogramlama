import AuthService from "../services/AuthService";

const AuthController = {
    login: async (req, res) => {
        const { username, password } = req.body;
        const result = await AuthService.login({ username, password });
        res.json(result);
    },
    register: async (req, res) => {
        const { username, password } = req.body;
        const result = await AuthService.register({ username, password });
        res.json(result);
    }
}

export default AuthController;
import ResponseService from "../services/ResponseService";

const ResponseController = {
    add: async (req, res) => {
        const { homeworkId, response } = req.body;
        const userId = req.user.id;
        const result = await ResponseService.add({ homeworkId, userId, response });
        res.json(result);
    },
    get: async (req, res) => {
        const { id } = req.params;
        const result = await ResponseService.get(id);
        res.json(result);
    },
    getByQuery: async (req, res) => {
        const { homeworkId } = req.query;
        const userId = req.user.id;
        const result = await ResponseService.getByQuery({ homeworkId, userId });
        res.json(result);
    },
    getByHomeworkId: async (req, res) => {
        const { id } = req.params;
        const result = await ResponseService.getByHomeworkId(id);
        res.json(result);
    }
}

export default ResponseController;
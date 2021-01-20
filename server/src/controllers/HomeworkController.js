import hmService from "../services/HomeworkService";
const HomeworkController = {
    add: async (req, res) => {
        const { classId, name, body } = req.body;
        const result = await hmService.add({ classId, name, body });
        res.json(result);
    },
    remove: async (req, res) => {
        const { id } = req.params;
        const result = await hmService.remove(id);
        res.json(result);
    },
    get: async (req, res) => {
        const { id } = req.params;
        const result = await hmService.getById(id);
        res.json(result);
    }
};

export default HomeworkController;
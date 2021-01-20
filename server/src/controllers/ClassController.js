import ClassService from "../services/ClassService";
const ClassController = {
    add: async (req, res) => {
        let model = {
            classId: req.body.classId,
            name: req.body.name,
            createdUser: req.user.id,
            lessonName: req.body.lessonName,
            description: req.body.description
        }
        const result = await ClassService.add(model);
        res.json(result);
    },
    get: async (req, res) => {
        const { id } = req.params;
        const result = await ClassService.get(id);
        res.json(result);
    },
    list: async (req, res) => {
        const result = await ClassService.list();
        res.json(result);
    },
    addUser: async (req, res) => {
        const { id, userId } = req.body;
        const result = await ClassService.addUser({ id, userId });
        res.json(result);
    },
    removeUser: async (req, res) => {
        const { id, userId } = req.body;
        const result = await ClassService.removeUser({ id, userId });
        res.json(result);
    },
    getClassesByUserId: async (req, res) => {
        const { user } = req;
        const result = await ClassService.getClassesByUserId(user.id);
        res.json(result);
    },
    getHomeworkByClassId: async (req, res) => {
        const { id } = req.params;
        const result = await ClassService.getHomeworkByClassId(id);
        res.json(result);
    },
    getClassesByRegisterId: async (req, res) => {
        const { id } = req.user;
        const result = await ClassService.getClassesByRegisterId(id);
        res.json(result);
    }
}

export default ClassController;

import jwt from "jsonwebtoken";

const authCheck = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, "kouBaris");
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Auth failed' });
    }
}

export default authCheck;
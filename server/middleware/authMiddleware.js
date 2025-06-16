const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(403).send("A token is required for authentication");

    jwt.verify(token, 'your_jwt_secret', (err, user) => {
        if (err) return res.sendStatus(401);
        req.user = user;
        next();
    });
};
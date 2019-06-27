import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

export default app => {
    const config = app.config;
    const Users = app.datasource.models.Users;

    app.post('/login', (req, res) => {
        if (req.body.login && req.body.password) {
            const login = req.body.login;
            const password = req.body.password;
            Users.findOne({ where: { login } })
                .then(user => {
                    if (Users.isPassword(user.password, password)) {
                        
                        const payload = { id: user.id };
                        res.json({
                            token: jwt.encode(payload, config.jwtSecret),
                            firstName: user.firstName,
                            login: user.login,
                            role: user.role
                        });
                    } else {
                        res.sendStatus(HttpStatus.UNAUTHORIZED);
                    }
                })
                .catch(() => res.sendStatus(HttpStatus.UNAUTHORIZED));
        } else {
            res.sendStatus(HttpStatus.UNAUTHORIZED);
        }
    });
};
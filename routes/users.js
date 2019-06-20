import UsersController from '../controllers/users';

export default (app) => {
    const usersController = new UsersController(app.datasource.models.Users);
    app.route('/users')
        .post((req, res) => {
            usersController.create(req.body)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                })
        })
    app.route('/users/:id')
        .put((req, res) => {
            usersController.update(req.body, req.params)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                })
        })
}
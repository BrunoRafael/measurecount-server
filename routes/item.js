import ItemController from '../controllers/item';

export default (app) => {
    const itensController = new ItemController(app.datasource.models.Item);
    app.route('/itens')
    .all(app.auth.authenticate())
        .get((req, res) => {
        itensController.getAll()
            .then(response =>{
                res.status(response.statusCode);
                res.json(response.data);
            })
        })
        .post((req, res) => {
        itensController.create(req.body)
            .then(response =>{
                res.status(response.statusCode);
                res.json(response.data);
            })
        })

    app.route('/itens/:id')
    .all(app.auth.authenticate())
        .get((req, res) => {
            itensController.getById(req.params)
            .then(response =>{
                res.status(response.statusCode);
                res.json(response.data);
            })
        })
        .put((req, res) => {
            itensController.update(req.body, req.params)
            .then(response =>{
                res.status(response.statusCode);
                res.json(response.data);
            })
        })
        .delete((req, res) => {
            itensController.delete(req.params)
            .then(response =>{
                res.sendStatus(response.statusCode);
            })
        });
}
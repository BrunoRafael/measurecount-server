import HttpStatus from 'http-status';
const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
    data,
    statusCode
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
    error: message
}, statusCode);

class ItemController {
    constructor(Item) {
        this.Item = Item;
    }
    getAll() {
        return this.Item.findAll({})
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error, message));
    }
    getById(params) {
        return this.Item.findOne({ where: params })
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error, message));
    }
    create(data) {
        return this.Item.create(data)
            .then(result => defaultResponse(result, HttpStatus.CREATED))
            .catch(error => errorResponse(error, message, HttpStatus.UNPROCESSABLE_ENTITY));
    }
    update(data,params) {
        return this.Item.update(data, {where: params})
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error, message, HttpStatus.UNPROCESSABLE_ENTITY));
    }
    delete(params) {
        return this.Item.destroy({where: params})
            .then(result => defaultResponse(result,HttpStatus.NO_CONTENT))
            .catch(error => errorResponse(error, message, HttpStatus.UNPROCESSABLE_ENTITY));
    }
}

export default ItemController;
import ItemController from '../../../controllers/item';
describe('Controllers: Item', () => {
    describe('Get all itens: getAll()', () => {
        it('should return a list of itens', () => {
            const Item = {
                findAll: td.function()
            };
            const expectedResponse = [{
                id: 1,
                name: 'UpdateItem',
                unitWeight: '30',
                createdAt: '2019-06-20T12:37:59.738Z',
                updatedAt: '2019-06-20T12:37:59.750Z'
            }];
            td.when(Item.findAll({})).thenResolve(expectedResponse);

            const itemController = new ItemController(Item);
            return itemController.getAll()
                .then(response => expect(response.data).to.be.eql(expectedResponse));
        });
    });

    describe('Get all itens: getById()', () => {
        it('should return a itens', () => {
            const Item = {
                findOne: td.function()
            };
            const expectedResponse = [{
                id: 1,
                name: 'UpdateItem',
                unitWeight: '30',
                createdAt: '2019-06-20T12:37:59.738Z',
                updatedAt: '2019-06-20T12:37:59.750Z'
            }];
            td.when(Item.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);

            const itemController = new ItemController(Item);
            return itemController.getById({ id: 1 })
                .then(response => expect(response.data).to.be.eql(expectedResponse));
        });
    });

    describe('Create a item: create()', () => {
        it('should create a item', () => {
            const Item = {
                create: td.function()
            };
            const requestBody = {
                name: 'Test Item',
                unitWeight: '20'
            }
            const expectedResponse = [{
                id: 1,
                name: 'UpdateItem',
                unitWeight: '30',
                createdAt: '2019-06-20T12:37:59.738Z',
                updatedAt: '2019-06-20T12:37:59.750Z'
            }];
            td.when(Item.create(requestBody)).thenResolve(expectedResponse);

            const itemController = new ItemController(Item);
            return itemController.create(requestBody)
                .then(response => {
                    expect(response.data).to.be.eql(expectedResponse);
                    expect(response.statusCode).to.be.eql(201);

                });
        });
    });
    describe('Update a item: update()', () => {
        it('should update an existing item', () => {
            const Item = {
                update: td.function()
            };
            const requestBody = {
                id: 1,
                name: 'Teste Item Update',
                unitWeight: '20'
            }
            const expectedResponse = [{
                id: 1,
                name: 'Teste Item Update',
                unitWeight: '30',
                createdAt: '2019-06-20T12:37:59.738Z',
                updatedAt: '2019-06-20T12:37:59.750Z'
            }];
            td.when(Item.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse);

            const itemController = new ItemController(Item);
            return itemController.update(requestBody, {id:1})
                .then(response => 
                    expect(response.data).to.be.eql(expectedResponse));
        });
    });
    describe('Delete a item: delete()', () => {
        it('should delete an existing item', () => {
            const Item = {
                destroy: td.function()
            };
            
            td.when(Item.destroy({ where: { id: 1 } })).thenResolve({});

            const itemController = new ItemController(Item);
            return itemController.delete({id:1})
                .then(response => expect(response.statusCode).to.be.eql(204));
        });
    });
});
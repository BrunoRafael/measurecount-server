import jwt from 'jwt-simple';

describe('Routes Itens', () => {
    const Users = app.datasource.models.Users;
    const jwtSecret = app.config.jwtSecret;
    const Item = app.datasource.models.Item,
        defaultItem = {
            id: 1,
            name: 'Default Item',
            unitWeight: "10"
    };
    let token;

    beforeEach(done => {
        Users
        .destroy({ where: {} })
        .then(() => Users.create({
          name: 'Kalber',
          email: 'kalber@gmail.com',
          password: '12345',
        }))
        .then(user => {
          Item
          .destroy({ where: {} })
          .then(() => Item.create(defaultItem))
          .then(() => {
            token = jwt.encode({ id: user.id }, jwtSecret);
            done();
          });
        });
      });
    console.log(token);

    describe('Route GET /itens', () => {
        it('should return a list of itens', done => {
            request
                .get('/itens')
                .set('Authorization', `JWT ${token}`)
                .end((err, res) => {
                    expect(res.body[0].id).to.be.eql(defaultItem.id);
                    expect(res.body[0].name).to.be.eql(defaultItem.name);
                    expect(res.body[0].unitWeight).to.be.eql(defaultItem.unitWeight);


                        done(err);

                    });
            });
        });
        describe('Route GET /itens/{id}', () => {
            it('should return a list of itens', done => {
                request
                    .get('/itens/1')
                    .set('Authorization', `JWT ${token}`)
                    .end((err, res) => {
                        expect(res.body.id).to.be.eql(defaultItem.id);
                        expect(res.body.name).to.be.eql(defaultItem.name);
                        expect(res.body.unitWeight).to.be.eql(defaultItem.unitWeight);


                        done(err);

                    });
            });
        });
        describe('Route POST /itens', () => {
            it('should create a item', done => {
                const newItem = {
                    id: 2,
                name: 'NewItem',
                unitWeight: "20"
            };
            request
                .post('/itens')
                .set('Authorization', `JWT ${token}`)
                .send(newItem)
                .end((err, res) => {
                    expect(res.body.id).to.be.eql(newItem.id);
                    expect(res.body.name).to.be.eql(newItem.name);
                    expect(res.body.unitWeight).to.be.eql(newItem.unitWeight);
                    done(err);

                });
        });
    });
    describe('Route PUT /itens/{1}', () => {
        it('should update a item', done => {
            const updateItem = {
                id: 1,
                name: 'UpdateItem',
                unitWeight: "30"
            };
            request
                .put('/itens/1')
                .set('Authorization', `JWT ${token}`)
                .send(updateItem)
                .end((err, res) => {
                    expect(res.body).to.be.eql([1]);
                    done(err);

                });
        });
    });
    describe('Route DELETE /itens/{1}', () => {
        it('should delete a item', done => {
            request
                .delete('/itens/1')
                .set('Authorization', `JWT ${token}`)
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(204);

                    done(err);

                });
        });
    });

});
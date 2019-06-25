describe('Routes Users', () => {
    const Users = app.datasource.models.Users,
        defaultUsers = {
            id: 1,
            name: 'teste',
            email: 'kalber@gmail.com',
            password: 'test'
        };
    beforeEach(done => {
        Users
            .destroy({ where: {} })
            .then(() => Users.create(defaultUsers))
            .then(() => {
                done();
            });
    });

    describe('Route GET /Users', () => {
        it('should return a list of Users', done => {
            request
                .get('/Users')
                .end((err, res) => {
                    expect(res.body[0].id).to.be.eql(defaultUsers.id);
                    expect(res.body[0].name).to.be.eql(defaultUsers.name);
                    expect(res.body[0].email).to.be.eql(defaultUsers.email);
                    


                    done(err);

                });
        });
    });
    describe('Route GET /users/{id}', () => {
        it('should return a list of users', done => {
            request
                .get('/users/1')
                .end((err, res) => {
                    expect(res.body.id).to.be.eql(defaultUsers.id);
                    expect(res.body.name).to.be.eql(defaultUsers.name);
                    expect(res.body.email).to.be.eql(defaultUsers.email);

                    done(err);

                });
        });
    });
    describe('Route POST /users', () => {
        it('should create a Users', done => {
            const newUser = {
                id: 2,
                name: 'aaaaa',
                email: 'kas@gmail.com', 
                password: 'test'
        };
            request
                .post('/users')
                .send(newUser)
                .end((err, res) => {
                    expect(res.body.id).to.be.eql(newUser.id);
                    expect(res.body.name).to.be.eql(newUser.name);
                    expect(res.body.email).to.be.eql(newUser.email);
                    done(err);

                });
        });
    });
    describe('Route PUT /users/{1}', () => {
        it('should update a Users', done => {
            const updateUsers = {
                id: 1,
                name: 'teste',
                email: 'kalber@gmail.com',
        };
            request
                .put('/users/1')
                .send(updateUsers)
                .end((err, res) => {
                    expect(res.body).to.be.eql([1]);
                    done(err);

                });
        });
    }); 
    describe('Route DELETE /users/{1}', () => {
        it('should delete a Users', done => {
            request
                .delete('/users/1')
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(204);
                    
                    done(err);

                });
        });
    });

});
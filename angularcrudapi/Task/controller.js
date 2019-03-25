const User = require('./user.js')
const jwt = require('jsonwebtoken')

module.exports = {
    create: (req, res, next) => {
        let userData = req.body;
        console.log(userData);
        let user = new User(userData);
        user.save( (error, results) => {
            if(error) next(error);
            else {
                let payload = {subject: results._id};
                let token = jwt.sign(payload, 'token');
                res.status(200).send({token});
            }
        });
    },
    autenticate: (req, res, next) => {
        let userData = req.body;
        User.findOne({userName: userData.userName},(error, user) => {
            console.log(user);
            console.log('1');
                        if(error) {
                console.log(error);
            } else {
            console.log('2');
                
                if(!user) {
            console.log('3');
                    
                    res.status(401).send('Invalid User');
                } else

                if (user.password !== userData.password) {
            console.log('4');
                    
                    res.status(401).send('Invalid Password')
                } else {
            console.log('5');
                    
                    let payload = {subject: user._id};
                    let token = jwt.sign(payload, 'token');
                    console.log(token);
                    // res.json({userToken: token});
                    res.status(200).send({token});
                }
            }
        })
    },

    verifyToken: (req, res, next) => {
        if (!req.headers.authorization) {
            console.log(req.headers.authorization);
            return res.status(401).send('Unauthorized Request')
        }
        // let token = req.headers.authorization.split(' ')[1]
        let token = req.headers.authorization;

        console.log(token);
        if (token == 'null') {
            console.log('2');
            return res.status(401).send('Unauthorized Request')
        }
        let payload = jwt.verify(token, 'token');

        if (!payload) {
            return res.status(401).send('Unauthorized request');
        }
        req.userId = payload.subject;
        next();
    }

}
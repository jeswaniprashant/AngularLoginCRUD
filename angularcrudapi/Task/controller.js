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
                let token = jwt.sign(payload, 'secretKey');
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
                    let token = jwt.sign(payload, 'secretKey');
                    res.status(200).send({token});
                }
            }
        })
    }

}
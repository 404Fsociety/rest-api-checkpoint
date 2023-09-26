const {check , validationResult} = require ('express-validator')

exports.registerValidation = () => [
    check('name', 'this field cannot be empty' ).notEmpty(),
    check('email', 'this field cannot be empty' ).notEmpty(),
    check('email', 'this type should be email' ).isEmail(),
    check('password', 'this filed should be at least 8 caractere' ).isLength({min : 8})
]

exports.validator = (req, res, next) =>{
    const errors = validationResult(req);
    errors.isEmpty() ? next() : res.status(400).send(errors.array())
}
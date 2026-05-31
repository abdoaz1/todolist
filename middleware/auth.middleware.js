import {body, validationResult } from 'express-validator'

const validateRegister = [
    body("full_name")
        .notEmpty().withMessage("full name is required")
        .bail()
        .isLength({ min: 4}).withMessage("full name should be at least 4 letters")
        .matches(/^[A-Za-z\s]+$/).withMessage("Full name can contain letters and spaces only"),
    body("email")
        .notEmpty().withMessage("Email is required")
        .bail()
        .isEmail().withMessage("Invalid email"),
    body("password")
        .notEmpty().withMessage("password is required")
        .bail()
        .isLength({min: 8}).withMessage("Password should be at least 8 letters")
];

const validateLogin = [
    body("email")
        .notEmpty().withMessage("Email is required")
        .bail()
        .isEmail().withMessage("Invalid email"),
    body("password")
        .notEmpty().withMessage("password is required")
        .bail()
        .isLength({min: 8}).withMessage("Password should be at least 8 letters")
];

const handleValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array().map(error => error.msg)
        });
    }
    next();
};

export { validateRegister, validateLogin, handleValidation};
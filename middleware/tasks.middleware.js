import {body} from 'express-validator'

const validateAddTask = [
    body("name")
        .notEmpty().withMessage("Task name cannot be left empty!").bail()
        .isLength({min: 2, max: 300}).withMessage("Task name must be between 2 and 300 characters!")
        .trim(),
    body("description")
        .isLength({max: 500}).withMessage("Description cannot exceed 500 characters!")
        .trim(),
    body("priority")
        .optional()
        .isInt({min:1, max:5}).withMessage("Priority must be a number between 1 and 5!")
];

export { validateAddTask };
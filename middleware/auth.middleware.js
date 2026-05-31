function validateEmail(req, res, next){
    const {email} = req.body;
    if (!email){
        return res.status(400).json({
            message: "Please enter the email"
        });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
        message: "Invalid email"
        });
    }
    next();
};
function validatepassword(req, res, next){
    const {password} = req.body;
    if (!password){
        return res.status(400).json({
            message: "Please enter the password"
        });
    }
    // password must be 8 letters+
    if(password.length < 8){
        return res.status(400).json({
            message: "Password must be 8 or more letters"
        });
    }
    next();
};
function validateFullName(req,res,next){
    const {full_name} = req.body;
    const errors = [];
    // check conditions and add failed ones to the errors
    if(!full_name){
        errors.push("Full name is required");
    }
    else if(full_name.length <4){
        errors.push("Full name must be 4 or more letters");
    }
    const nameRegex = /^[A-Za-z\s]+$/;
    if(full_name && !nameRegex.test(full_name)){
        errors.push("Full name can contain letters and spaces only");
    }
    // if errors exist return them and dont continue 
    if (errors.length>0){
        return res.status(400).json({
            success: false,
            errors
        });
    }
    next();
};

const validateRegister = [validateEmail, validatepassword, validateFullName];
const validateLogin = [validateEmail, validatepassword];

export default {validateRegister, validateLogin};
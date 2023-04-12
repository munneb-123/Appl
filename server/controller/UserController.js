import User from '../Model/UserModel.js'


export const Register = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(400).json({ message: "User Already Exist." });
        }
        const result = await User.create({
            email,
            password,
            name
        });
        res.status(200).json({ message: "Register Successfully", data: result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const oldUser = await User.findOne({ email: email, password: password });
        if (!email) return res.status(404).json({ message: "Something is wrong. Please put correct information" });

        res.status(200).json({
            message: "Login Successfully",
            result: oldUser
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

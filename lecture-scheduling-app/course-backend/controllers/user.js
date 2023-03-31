import User from "../models/User/User.js"

export const registerUser = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            password,
            age
        } = req.body
        const user = new User({ firstName, lastName, password, age })
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.find({ _id: userId })
        console.log(userId)
        res.status(200).json(user)
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updatePassword = async (req, res) => {
    try {
        const userId = req.params.id;
        const { new_password } = req.body;
        const user = await User.findByIdAndUpdate(userId, {
            password: new_password
        }, { new: true })
        const updated_user = await user.save();
        res.status(200).json(updated_user)
    }
    catch {
        res.status(500).json({ error: error.message });
    }
}
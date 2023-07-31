import UserSchema from "../models/userModel.js";

export const CourseUser = async (req, res) => {
    const { name, email, course, mobile } = req.body;
    console.log({ name, email, course, mobile })
    const newUser = new UserSchema({ name, email, course, mobile });
    try {
        await newUser.save();
        res.status(201).send('Thank you for your registeration');
    } catch (error) {
        res.status(500).send('Error submitting form');
    }
}
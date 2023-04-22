import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!password) {
      return res.send({ error: "Password is required" });
    }
    if (!phone) {
      return res.send({ error: "Phone number is required" });
    }
    if (!address) {
      return res.send({ error: "Address is required" });
    }

    //Check user
    const existingUser = await userModel.findOne({ email });

    //Existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already registered, Please login",
      });
    }

    //Register user
    const hashedPassword = await hashPassword(password);

    //save
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messgae: "Error in registration",
      error,
    });
  }
};

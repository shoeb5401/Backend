//@ First and the most important thing to ask questions about is what kind of data we need to store and then start modelling those data.

//@ mongoose is used how the data will be stored and how to model data.

//@ moon modeler - paid tools for enterprises.

//@ we can use eraser.io for data models for creation of the project.

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // username : String,
    // email : String,
    // isActive : Boolean

    //@ Good practice
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required and compulsary"],
    },
  },
  { timestamps: true } //@ timestamps - createdAt and updateAt properties will be added . most common in the DB.
);

export const User = mongoose.model("User", userSchema);

//@ "User" will become 'users' {lowercase and plural}when go to mongodb (standarised practice)

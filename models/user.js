import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema (
    {
        username: String,
        password: String,
    }
)

const Users = mongoose.models.Users || mongoose.model("Users", usersSchema)

export default Users
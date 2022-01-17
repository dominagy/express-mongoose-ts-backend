import { Schema, model } from "mongoose";
import Recept from "./recept.interface";

const postSchema = new Schema<Recept>(
    {
        author: {
            ref: "User",
            type: Schema.Types.ObjectId,
        },
        receptNév: String,
        url: String,
        leírás: String,
        hozzávalók: Array,
    },
    { versionKey: false },
);

const ReceptModel = model<Recept>("Receptek", postSchema);

export default ReceptModel;

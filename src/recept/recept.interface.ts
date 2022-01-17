import { Types } from "mongoose";
export default interface Recept {
    _id: Types.ObjectId | string;
    author: Types.ObjectId | string;
    url: string;
    receptNév: string;
    leírás: string;
    hozzávalók: string[];
}

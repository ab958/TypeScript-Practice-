"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// interface IUser extends Document {
//     name: string;
//     age: number;
//     lastName?: string;
// }
const userSch = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
});
exports.User = mongoose_1.default.model('User', userSch);
// const User1 = mongoose.model('User', userSch);
// export default User;
// const build = ( att : IUser) =>{
//     return new User1(att)
// }
// build({
//     name:"1",
//     age :"erf",
// })
// new User({
//     name:1,
//     age:"fdfs"
// })

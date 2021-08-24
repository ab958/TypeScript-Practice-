"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("./routes/user");
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/TWM', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connected SuccessFully");
}).catch(() => {
    console.log("Not Connected");
});
app.use("/user", user_1.userRouter);
app.listen(5000, () => {
    console.log("Server is up");
});

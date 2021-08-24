"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.userRouter = router;
const userModel_1 = require("../model/userModel");
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usr = yield userModel_1.User.find();
    res.send(usr);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usr = yield userModel_1.User.findById(req.params.id);
    res.send(usr);
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usr = yield userModel_1.User.findById(req.params.id);
    if (usr) {
        usr.name = req.body.name || usr.name,
            usr.age = req.body.age || usr.age;
    }
    res.send(usr);
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usr = yield userModel_1.User.remove({ _id: req.params.id });
    res.send(usr);
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usr = new userModel_1.User({
        name: req.body.name,
        age: req.body.age
    });
    yield usr.save();
    res.send(usr);
}));

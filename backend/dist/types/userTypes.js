"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigninSchema = exports.SignupSchema = void 0;
const zod_1 = require("zod");
exports.SignupSchema = zod_1.z.object({
    username: zod_1.z.string().email(),
    password: zod_1.z.string().min(5),
    name: zod_1.z.string()
});
exports.SigninSchema = zod_1.z.object({
    username: zod_1.z.string().email(),
    password: zod_1.z.string().min(5),
});
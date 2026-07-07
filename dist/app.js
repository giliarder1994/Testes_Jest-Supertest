"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const crypto_1 = __importDefault(require("crypto"));
class App {
    constructor() {
        this.users = [];
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.get('/', (req, res) => {
            return res.json({ ok: true });
        });
        this.app.post('/user', (req, res) => {
            const { name, email } = req.body;
            const id = crypto_1.default.randomUUID();
            const userData = { id, name, email };
            this.users.push(userData);
            return res.status(201).json(userData);
        });
        this.app.get('/user', (req, res) => {
            return res.status(200).json(this.users);
        });
    }
    listen(port) {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}
exports.App = App;

import express, { Application, Request, Response } from "express";
import crypto from "crypto";

class App {
    public app: Application;
    private users: any[] = [];

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

    }

    private routes(){
        this.app.get('/', (req: Request, res: Response) => {
            return res.json({ ok: true });
        })

        this.app.post('/user', (req: Request, res: Response) => {
            const {name, email} = req.body;
            const id = crypto.randomUUID();

            const userData = {id, name, email};
            this.users.push(userData);

            return res.status(201).json(userData);
        })

        this.app.get('/user', (req: Request, res: Response) => {
            return res.status(200).json(this.users);
        })

    }

    public listen(port: number){
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })

    }
}

export { App };
import SondasController from "../controllers/sondas.controller.js";
import { Router } from 'express';

class SondasRouter {
    constructor() {
        this.router = new Router();
        this.controller = new SondasController();
    }

    start() {
        this.router.post("/sonda", this.controller.insertSonda);
        this.router.get("/sonda", this.controller.getAllSondas);
        this.router.get("/sonda/:id", this.controller.getSondaById);

        return this.router;
    }
}

export default SondasRouter;
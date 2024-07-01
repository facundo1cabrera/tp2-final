import SondasService from "../services/sondas.service.js";

class SondasController {
    constructor() {
        this.service = new SondasService();


        this.insertSonda = this.insertSonda.bind(this);
        this.getAllSondas = this.getAllSondas.bind(this);
        this.getSondaById = this.getSondaById.bind(this);
    }

    async insertSonda(req, res) {
        try {
            const sondaDb = await this.service.insertSonda(req.body)
            res.status(201).json(sondaDb);
        } catch (e) {
            res.status(400).json({ message: "datos no válidos" })
        }
    }

    async getAllSondas(req, res) {
        try {
            const sondas = await this.service.getAllSondas();
            res.status(200).json(sondas);
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: "Internal server error"})
        }
    }

    async getSondaById(req, res) {
        try {
            const { id } = req.params;
            const sondaDb = await this.service.getSondaById(id);

            if (sondaDb.length === 0) {
                res.status(400).json({ message: "Número de sonda incorrecto" });
                return;
            }

            res.status(200).json(sondaDb);
        } catch (e) {
            res.status(400).json({ message: "Número de sonda incorrecto" })
        }
    }
}

export default SondasController;
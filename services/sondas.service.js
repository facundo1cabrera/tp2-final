import config from "../config.js";
import ModelFactory from "../models/dao/Factory.js";

class SondasService {
    constructor() {
        this.model = ModelFactory.get(config.PERSISTENCE);
    }

    async insertSonda(sonda) {
        try {
            if (!sonda) {
                throw new Error("Sonda paramater must be defined.");
            }

            const { id, temperatura } = sonda;

            if (!id || !temperatura) {
                throw new Error("id and temperatura must be defined.");
            }

            const newSonda = {
                id,
                temperatura,
                savedAt: Date.now()
            }

            const savedSonda = await this.model.insert(newSonda);

            return savedSonda;
        } catch (e) {
            console.log("error persisting sonda: ", sonda)
            throw new Error(e.message);
        }
    }

    async getAllSondas() {
        try {
            const sondas = await this.model.getAllSondas();
            return sondas;
        } catch (e) {
            console.log("Error getting data from persistance layer.");
            throw new Error("Error getting data from db");
        }
    }

    async getSondaById(id) {
        try {
            if (!id) {
                throw new Error("Id must be provided.");
            }
            const sonda = await this.model.getSondaById(+id);
            return sonda;
        } catch (e) {
            throw new Error("e");
        }
    }
}

export default SondasService;
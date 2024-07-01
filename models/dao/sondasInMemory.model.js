import { delay } from "../../utils/delay.js"

const items = [];

class SondaInMemoryModel {
    constructor() {}

    async insert(sonda) {
        await delay(200);
        items.push(sonda);
        return items[items.length - 1];
    }

    async getAllSondas() {
        await delay(200);
        return items;
    }

    async getSondaById(id) {
        await delay(200);
        return items.filter(x => x.id === id);
    }
}

export default SondaInMemoryModel
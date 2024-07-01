import SondaInMemoryModel from "./sondasInMemory.model.js";

class ModelFactory{
    static get(type){
        switch (type) {
            case 'MEM':
                console.log('Using in memory persistance.')
                return new SondaInMemoryModel();
            default:
                throw new Error("Persistance type is not defined.")
        }
    }

}

export default ModelFactory
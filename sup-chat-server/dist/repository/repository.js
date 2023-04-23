export class Repository {
    model;
    constructor(model) {
        this.model = model;
    }
    async add(obj) {
        await this.model.create(obj);
    }
    async getAll() {
        const items = await this.model.find().exec();
        return items;
    }
    async update(obj) {
    }
    async delete(id) {
    }
}
//# sourceMappingURL=repository.js.map
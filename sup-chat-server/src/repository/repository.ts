import mongoose, { Model, Document } from "mongoose";
import { IRepository } from "./interfaces/IRepository.js";

export class Repository<T> implements IRepository<T> {
  private model: Model<T>
  constructor(model: Model<T>) {
    this.model = model;
  }

  async add(obj: T): Promise<void> {
    await this.model.create(obj);
  }

  async getAll(): Promise<T[]> {
    const items = await this.model.find().exec();
    return items;
  }

  async update(obj: T): Promise<void> {
    
  }

  async delete(id: String): Promise<void> {

  }
}



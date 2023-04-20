import { Model, Document } from "mongoose";
import mongoose from "mongoose";
import { IRepository } from "./interfaces/IRepository";

export class Repository<T> implements IRepository<T> {
  constructor(public model: Model<T>) {}

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



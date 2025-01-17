import { Schema } from "mongoose";

export interface IRepository<T> {
  add(obj: T): Promise<void>;
  getAll(): Promise<T[]>;
  update(id: Schema.Types.ObjectId, obj: T): Promise<void>;
  delete(id: String): Promise<void>;
  getById(id:Schema.Types.ObjectId) : Promise<T>;
}

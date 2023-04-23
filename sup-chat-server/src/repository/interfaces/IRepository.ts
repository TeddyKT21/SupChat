export interface IRepository<T> {
  add(obj: T): Promise<void>;
  getAll(): Promise<T[]>;
  update(obj: T): Promise<void>;
  delete(id: String): Promise<void>;
}

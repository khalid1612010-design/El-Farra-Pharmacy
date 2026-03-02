export interface IStorage {
  // Static site, no storage needed
}

export class MemStorage implements IStorage {
}

export const storage = new MemStorage();

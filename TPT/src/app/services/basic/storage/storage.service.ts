import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    if (!this._storage) {
      this._storage = await this.storage.create();
    }
  }

  async get(key: string): Promise<any> {
    await this.init();
    return this._storage?.get(key);
  }

  async set(key: string, value: any): Promise<void> {
    await this.init();
    await this._storage?.set(key, value);
  }

  async remove(key: string): Promise<void> {
    await this.init();
    await this._storage?.remove(key);
  }
}

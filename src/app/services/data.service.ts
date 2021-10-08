import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[] = ["mishal", "khaldi", "nora"]
  info2: string[] = ["salem", "ahmed", "sara"]

  getInfo1(): string[] {
    return this.info1
  }

  getInfo2(): string[] {
    return this.info2
  }

  constructor() { }
}

import {Injectable} from '@angular/core';

/**
 * Service to do X.
 */
@Injectable()
export class BazService {
  private name = 'TSI Example App';

  setName(value: string) { this.name = value; }

  getName(): string { return this.name; }
}

import { PersistencyProtocol } from '../classes/interfaces/persistency-protocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    onsole.log('Order saved successfully...');
  }
}

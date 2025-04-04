type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('Message sent:', msg);
  }

  saveOrder(): void {
    onsole.log('Order saved successfully...');
  }

  clear(): void {
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}

const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCartLegacy.addItem({ name: 'Caderno', price: 9.9 });
shoppingCartLegacy.addItem({ name: 'Lapis', price: 1.59 });

console.log(shoppingCartLegacy.items);
console.log(shoppingCartLegacy.total());
shoppingCartLegacy.checkout();
console.log(shoppingCartLegacy.orderStatus);

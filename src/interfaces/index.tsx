export interface Collections {
  id: number;
  title: string;
  routeName: string;
  items: Item[];
}

export interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
}

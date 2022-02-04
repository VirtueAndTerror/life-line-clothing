export type CurrentUser = {
  id: string;
  email: string;
  displayName: string;
  createdAt: Date;
} | null;
export interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
}
export interface Collection {
  routeName: string;
  id: string;
  title: string;
  items: Item[];
}

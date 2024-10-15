export interface Book {
  isbn: string;
  title: string;
  subtitle: string;
  author: string;
  price: number;
  description: string;
  tags: string[];
  date: Date | string;
}

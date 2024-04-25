export interface IBooks {
  id: number;
  title: string;
  author: string;
  publication_year: number;
  genre: [string, string];
  description: string;
  cover_image: string;
}
export const bookGenreTypes = [
  { title: 'Fiction', value: 'fiction' },
  { title: 'Epic', value: 'epic' },
  { title: 'Historical Fiction', value: 'historical fiction' },
  { title: 'Magical Realism', value: 'magical realism' },
  { title: 'Literary Fiction', value: 'literary fiction' },
  { title: 'Adventure', value: 'adventure' },
  { title: 'Fantasy', value: 'fantasy' },
  { title: 'Coming-of-age', value: 'coming-of-age' },
];

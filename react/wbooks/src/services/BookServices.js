import { api } from '../config/api';

export const serviceGetBooks = () => api.get('/booksgenretitleauthordescription');

export const getBooks = async () => {
  const books = await serviceGetBooks();
  return books.ok ? { ok: true, data: books.data } : { ok: false, problem: books.problem };
};

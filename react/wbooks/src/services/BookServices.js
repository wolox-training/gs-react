import { api } from '../config/api';
import { regex } from '../constants/validations';

export const serviceGetBooks = () => api.get('/booksgenretitleauthordescription');

export const serviceDetailOfBook = id => api.get(`/books/${id}`);

export const getBooks = async () => {
  const books = await serviceGetBooks();
  return books.ok ? { ok: true, data: books.data } : { ok: false, problem: books.problem };
};

export const getDetailBook = async id => {
  const detailBook = await serviceDetailOfBook(id);

  return detailBook.ok
    ? { ok: true, data: JSON.parse(detailBook.data.replace(regex, '')) }
    : { ok: false, problem: detailBook.problem };
};

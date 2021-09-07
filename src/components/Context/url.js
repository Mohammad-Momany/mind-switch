const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const url = (query, booksFilter) => {
  const filter = `${booksFilter && `&filter=${booksFilter}`}`;

  return `https://www.googleapis.com/books/v1/volumes?q=${query}${filter}&key=${API_KEY}&maxResults=20`;
};

export default url;
// import BookCard from "../components/global/Book/BookCard";
// import Stack from "@mui/material/Stack";

import bookService from "../services/book.service";
import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";

const Book = () => {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const res = await bookService.searchBook({});
    setBooks(res);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ paddingY: "1rem" }}>
      ADMIN BOOK PAGE
    </Container>
  );
};

export default Book;

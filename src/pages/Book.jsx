import BookCard from "../components/global/Book/BookCard";
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
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 5 }}
        alignItems="stretch"
      >
        {books.map((ele) => {
          return (
            <Grid item md={3} key={ele.name}>
              <BookCard
                title={ele.name}
                price={ele.price}
                author={ele.category}
                img={ele.base64image}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Book;

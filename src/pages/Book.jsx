import BookCard from "../components/global/Book/BookCard";
import Stack from "@mui/material/Stack";
import React from "react";

const data = [
  {
    title: "Ramayan",
    price: 1999,
    author: "Sage Valmiki",
  },
  {
    title: "Doglapan",
    price: 299,
    author: "Ashneer",
  },
  {
    title: "Rich Dad poor Dad",
    price: 200,
    author: "Robert Kiyosaki",
  },
];

const Book = () => {
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {data.map((ele) => {
          return (
            <BookCard
              title={ele.title}
              price={ele.price}
              author={ele.author}
              img={ele.img}
            />
          );
        })}
      </Stack>
    </div>
  );
};

export default Book;

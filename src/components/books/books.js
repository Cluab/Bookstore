import React from "react";
import Book from "../../hooks/book/book";

export default function Books() {
  return (<>
  <div>{Book("hello", "book")}</div>
  <div></div></>
  );
}
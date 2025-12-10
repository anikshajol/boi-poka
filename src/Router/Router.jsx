import { createBrowserRouter } from "react-router";
import Home from "../Page/Home";
import ListedBooks from "../Page/ListedBooks";
import App from "../App";
import PagesToRead from "../Page/PagesToRead";
import ErrorPage from "../Page/ErrorPage";
import BookDetails from "../Components/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "book-details/:id",
        Component: BookDetails,
        loader: () => fetch(`/booksData.json`),
      },
      { path: "listed-books", Component: ListedBooks },
      { path: "read-pages", Component: PagesToRead },
    ],
  },
]);

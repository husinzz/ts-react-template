import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";
import NotFound from "./pages/404";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />,
    children: [

    ],
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  );
}


export default App;

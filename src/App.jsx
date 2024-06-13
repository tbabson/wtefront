import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Blog,
  Profile,
  Cart,
  Error,
  Foods,
  SingleFood,
  Checkout,
  Orders,
  Admin,
  ChangePassword,
  Login,
  Register,
  AddFood,
  UpdateFood,
  DeleteFood,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Foods />,
      },
      {
        path: "foods/:id",
        element: <SingleFood />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "changePassword",
    element: <ChangePassword />,
    errorElement: <Error />,
  },
  {
    path: "admin",
    element: <Admin />,
    errorElement: <Error />,
    children: [
      {
        path: "addFood",
        element: <AddFood />,
      },
      {
        path: "updateFood",
        element: <UpdateFood />,
      },
      {
        path: "deleteFood",
        element: <DeleteFood />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

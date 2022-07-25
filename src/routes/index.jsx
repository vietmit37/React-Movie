import Loader from "components/Loader";
import { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// layout
const MainLayout = lazy(() => import("layout/mainLayout"));

// pages
const DetailMovie = lazy(() => import("pages/DetailMovie"));
const HomePage = lazy(() => import("pages/HomePage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const BookingTicket = lazy(() => import("pages/bookingTicket"));
const NotFound = lazy(() => import("pages/notFound"));

const routes = [
  {
    path: "",
    layout: MainLayout,
    element: HomePage,
  },
  {
    path: "auth",
    element: LoginPage,
  },
  {
    path: "/detailMovie/:id",
    layout: MainLayout,
    element: DetailMovie,
  },
  {
    path: "/bookingTicket/:id",
    element: BookingTicket,
  },
  {
    path: "*",
    element: () => <NotFound />,
  },
];
function RouteMain() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((routeItem, index) => {
            let { path, element, layout } = routeItem;
            const Component = element;
            const Layout = layout || Fragment;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default RouteMain;

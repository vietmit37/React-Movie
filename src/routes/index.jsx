import Loader from "components/Loader";
import { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// layout
const MainLayout = lazy(() => import("layout/mainLayout"));
const AdminLayout = lazy(() => import("layout/AdminLayout"));

// pages
const DetailMovie = lazy(() => import("pages/User/DetailMovie"));
const HomePage = lazy(() => import("pages/User/HomePage"));
const LoginPage = lazy(() => import("pages/User/LoginPage"));
const BookingTicket = lazy(() => import("pages/User/bookingTicket"));
const NotFound = lazy(() => import("pages/User/notFound"));
const RegisterPage = lazy(() => import("pages/User/RegisterPage"));
const Dasboard = lazy(() => import("pages/Admin/Dashboard"));
const Films = lazy(() => import("pages/Admin/Films"));
const AddNew = lazy(() => import("pages/Admin/Films/AddNew"));
const Edit = lazy(() => import("pages/Admin/Films/Edit"));
const TaoLichChieu = lazy(() => import("pages/Admin/Films/TaoLichChieu"));
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
    path: "register",
    element: RegisterPage,
  },
  {
    path: "*",
    element: () => <NotFound />,
  },
  {
    path: "admin",
    layout: AdminLayout,
    element: Dasboard,
  },
  {
    path: "admin/films",
    layout: AdminLayout,
    element: Films,
  },
  {
    path: "admin/films/addNew",
    layout: AdminLayout,
    element: AddNew,
  },
  {
    path: "admin/films/edit/:id",
    layout: AdminLayout,
    element: Edit,
  },
  {
    path: "admin/films/taoLichChieu/:id",
    layout: AdminLayout,
    element: TaoLichChieu,
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

// import { Route } from "react-router-dom";
// import { lazy } from "react";

// const routes = [
//   {
//     path: "",
//     element: lazy(() => import("./../containers/HomeTemplate")),
//     nested: [
//       {
//         path: "",
//         element: lazy(() => import("./../containers/HomeTemplate/HomePage")),
//       },
//       {
//         path: "about",
//         element: lazy(() => import("./../containers/HomeTemplate/AboutPage")),
//       },
//       {
//         path: "list-movie",
//         element: lazy(() =>
//           import("./../containers/HomeTemplate/ListMoviePage")
//         ),
//       },
//       {
//         path: "hooks",
//         element: lazy(() => import("./../containers/HomeTemplate/HooksPage")),
//       },
//       {
//         path: "hoc",
//         element: lazy(() => import("./../containers/HomeTemplate/HocPage")),
//       },
//       {
//         path: "detail/:id",
//         element: lazy(() => import("./../containers/HomeTemplate/DetailMovie")),
//       },
//     ],
//   },
//   {
//     path: "auth",
//     element: lazy(() => import("./../containers/AdminTemplate/AuthPage")),
//   },
// ];

// const renderRoutes = () => {
//   return routes.map((item, index) => {
//     if (item.nested) {
//       return (
//         <Route key={index} path={item.path} element={<item.element />}>
//           {item.nested.map((route, index) => (
//             <Route key={index} path={route.path} element={<route.element />} />
//           ))}
//         </Route>
//       );
//     } else {
//       return <Route key={index} path={item.path} element={<item.element />} />;
//     }
//   });
// };

// export { renderRoutes };

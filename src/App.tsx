import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader";
import ProtectedRoute from "./Utils/ProtectedRoute";
import routePath from "./Utils/route";

export default function App() {
  const routeData = routePath();

  return (
    <>
      <Routes>
        {/* <Route element={<ProtectedRoute />}> */}
        {routeData.map(
          ({ path, component: Component, isProtected = false }, index) => {
            if (isProtected) {
              return (
                <Route element={<ProtectedRoute />}>
                  <Route
                    path={path}
                    key={index}
                    element={
                      <Suspense fallback={<Preloader />}>
                        <Component label="hello world" name="" />
                      </Suspense>
                    }
                  />
                </Route>
              );
            } else {
              return (
                <Route
                  path={path}
                  key={index}
                  element={
                    <Suspense fallback={<Preloader />}>
                      <Component label="hello world" name="" />
                    </Suspense>
                  }
                />
              );
            }
          }
        )}
        {/* </Route> */}
        {/*    
        <Route element={<ProtectedRoutes />}>
          {protectedRouteData.map(({ path, component: Component }, index) => {
            return (
              <Route
                path={path}
                key={index}
                element={
                  <Suspense fallback={<div>loading...</div>}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route> */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

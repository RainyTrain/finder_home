import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/router/RouterConfig';

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map((element) => (
        <Route
          path={element.path}
          element={<Suspense fallback="Loading...">{element.element}</Suspense>}
        />
      ))}
    </Routes>
  );
};

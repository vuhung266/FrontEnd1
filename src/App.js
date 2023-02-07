import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';

function App () {
  return (
    <Router basename={process.env.BASE_URL}>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = route.layout || DefaultLayout || Fragment;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout selected={route.path} pageTitle={route.title}>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

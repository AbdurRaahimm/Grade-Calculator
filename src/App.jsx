import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from '~react-pages'
// console.log(routes);

const router = createBrowserRouter(routes);

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>

  )
}

export default App

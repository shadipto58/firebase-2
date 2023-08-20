
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './components/layout/Main'
import Register from './components/Register/Register'
import Login from './components/Login/Login'



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    }

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App

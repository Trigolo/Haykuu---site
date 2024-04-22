import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Haykuu from "./pages/Haykuu"

const router = createBrowserRouter([{
  path: "/",
  element: <Haykuu/>
  }])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App

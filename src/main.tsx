import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Academics from './pages/Academics.tsx'
import Admissions from './pages/Admissions.tsx'
import StudentLife from './pages/StudentLife.tsx'
import Contact from './pages/Contact.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "academics",
        element: <Academics />
      },
      {
        path: "admissions",
        element: <Admissions />
      },
      {
        path: "studentlife",
        element: <StudentLife />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
],
  {
    basename: "/task-3-adv/"
  }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

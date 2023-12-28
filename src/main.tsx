import { render } from 'preact'
import { Map } from './page/Map/Map.tsx'
import App from './page/App/App.tsx';
import SrcMap from './page/SrcMap.tsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/map",
    element: <Map/>,
  },
  {
    path: "/srcMap",
    element: <SrcMap />
  }
]);

render(<RouterProvider router={router} />, document.getElementById('app')!)

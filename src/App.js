import React, { Suspense } from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import IndexNotFound from "./components/NotFound/IndexNotFound";
import IndexHeader from "./components/Header/IndexHeader";
import IndexMain from "./features/Photo/Pages/Main/IndexMain";
// Dùng lazy loading hình ảnh
const Photo = React.lazy(() => import("./features/Photo/Photo"));

function App() {
  return (
    <div className="photo_app">
      {/* loading giữa các trang */}
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <IndexHeader />
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route component={IndexNotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

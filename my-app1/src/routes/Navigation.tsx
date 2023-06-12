import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import routes from "./routes";
import { Suspense } from "react";

interface LinkItemProps {
  to: string;
  name: string;
}

const LinkItem = ({ to, name }: LinkItemProps) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        {name}
      </NavLink>
    </li>
  );
};

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <h1 style={{ color: "white" }}>Logo react here</h1>
            <ul>
              {routes.map(({ to, name, path }) => (
                <LinkItem to={to} name={name} key={path} />
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route path={path} element={<Component />} key={path} />
            ))}
            <Route path="/*" element={<Navigate to="/lazy1" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

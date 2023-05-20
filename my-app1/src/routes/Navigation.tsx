import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import routes from "./routes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <h1 style={{ color: "white" }}>Logo react here</h1>
          <ul>
            {routes.map(({ to, name }) => (
              <li>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {routes.map(({ path, Component }) => (
            <Route path={path} element={<Component />} />
          ))}
          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

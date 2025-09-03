// src/components/Breadcrumb.jsx
import { Link, useLocation, useParams } from "react-router-dom";
import { useTheme } from "../../components/context/ThemeProvider";

const Breadcrumb = () => {
  const location = useLocation();
  const { agentIdx } = useParams();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Custom logic for /agents/:agentId/leads
  if (pathnames.length >= 3 && pathnames[0] === "agents" && pathnames[2] === "leads") {
    return (
      <nav className={`flex items-center space-x-1 text-sm mb-4 ${isDark ? "text-gray-300" : "text-gray-500"} flex-wrap`}>
        <Link
          to="/"
          className={`hover:${isDark ? "text-blue-300" : "text-blue-500"} truncate max-w-[100px] sm:max-w-none`}
          title="Home"
        >
          Home
        </Link>
        <span className="hidden sm:inline">/</span>
        <Link
          to="/agents"
          className={`hover:${isDark ? "text-blue-300" : "text-blue-500"} truncate max-w-[100px] sm:max-w-none`}
          title="Agents"
        >
          Agents
        </Link>
        <span>/</span>
        <span
          className={`${isDark ? "text-gray-200" : "text-gray-700"} truncate max-w-[120px] sm:max-w-none`}
          title={agentIdx}
        >
          {agentIdx}
        </span>
      </nav>
    );
  }

  // Default breadcrumb for other routes
  return (
    <nav className={`flex items-center space-x-1 text-sm mb-4 ${isDark ? "text-gray-300" : "text-gray-500"} flex-wrap`}>
      <Link
        to="/"
        className={`hover:${isDark ? "text-blue-300" : "text-blue-500"} truncate max-w-[100px] sm:max-w-none`}
        title="Home"
      >
        Home
      </Link>
      {pathnames.length > 0 && <span className="hidden sm:inline">/</span>}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={to} className="flex items-center">
            {isLast ? (
              <span
                className={`${isDark ? "text-gray-200" : "text-gray-700"} truncate max-w-[120px] sm:max-w-none`}
                title={value.replace(/-/g, " ")}
              >
                {value.replace(/-/g, " ")}
              </span>
            ) : (
              <>
                <Link
                  to={to}
                  className={`hover:${isDark ? "text-blue-300" : "text-blue-500"} truncate max-w-[120px] sm:max-w-none`}
                  title={value.replace(/-/g, " ")}
                >
                  {value.replace(/-/g, " ")}
                </Link>
                <span className="hidden sm:inline">/</span>
              </>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;

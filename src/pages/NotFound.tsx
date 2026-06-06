import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Page not found — Campus Counsel</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to the Campus Counsel homepage to explore engineering admission counselling." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://xtnadmisssions.lovable.app/404" />
        <meta property="og:title" content="Page not found — Campus Counsel" />
        <meta property="og:description" content="The page you're looking for doesn't exist." />
        <meta property="og:url" content="https://xtnadmisssions.lovable.app/404" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
<<<<<<< HEAD
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
=======
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold font-heading text-foreground">
          404
        </h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a
          href="/"
          className="text-primary underline decoration-primary/80 underline-offset-4 font-semibold transition-colors duration-250 ease-in-out hover:text-[#2EE60F]"
        >
>>>>>>> 94512aa (final edit)
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

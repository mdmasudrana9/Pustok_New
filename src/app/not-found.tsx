"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 text-center relative">
      <h1 className="text-[6rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 drop-shadow-lg">
        404
      </h1>

      <p className="mt-2 text-2xl font-semibold text-gray-800">
        Oops! Page Not Found
      </p>

      <p className="mt-3 text-gray-500 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-white font-medium shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
      >
        Return to Home
      </Link>

      <div className="absolute bottom-10 text-gray-400 text-sm">
        Error: <span className="font-mono">{pathname}</span>
      </div>
    </div>
  );
}

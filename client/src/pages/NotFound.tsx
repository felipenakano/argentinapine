// ArgentinaPine.com — 404 Not Found Page
// Design: Timber Atlas

import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section
        className="py-32 text-center"
        style={{ backgroundColor: "var(--warm-white)" }}
      >
        <div className="container">
          <span
            className="font-display text-8xl font-bold block mb-4"
            style={{ color: "var(--pine-green)", opacity: 0.15 }}
          >
            404
          </span>
          <h1
            className="font-display text-3xl font-semibold mb-4"
            style={{ color: "var(--pine-green)" }}
          >
            Page Not Found
          </h1>
          <p
            className="text-base mb-8 max-w-md mx-auto"
            style={{ color: "var(--warm-gray)", fontFamily: "'Lato', sans-serif" }}
          >
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="btn-pine inline-flex">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}

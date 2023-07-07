import React from "react";
import Link from "next/link";
import MovieSearch from "../components/MovieSearch";

export default function page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto py-10 px-4 flex flex-col item-center justify-center">
        <h1 className="text 4x1 text-white font-bold mb-8">Movies </h1>
        <MovieSearch />
      </div>
    </div>
  );
}

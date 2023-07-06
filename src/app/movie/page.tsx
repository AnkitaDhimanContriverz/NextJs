import React from "react";
import MovieSearch from "../components/MovieSearch";

export default function page() {
  return (
    <div className="bg-black min-h-screen">
      <main className="container mx-auto py-10 px-4 flex flex-col item-center justify-center">
        <h1 className="text 4x1 text-white font-bold mb-8">Movies </h1>
        <MovieSearch />
      </main>
    </div>
  );
}

import React from "react";

export default function Home() {
  return (
    <main className="items-center justify-center mx-auto">
      <div className="container mx-auto bg-primary py-10">
        <h1 className="text-3xl font-bold text-secondary text-center opacity-95 mb-8">
          Welcome to Mox-Multisport E-Commerce Store
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
      </div>
    </main>
  );
}

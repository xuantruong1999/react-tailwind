import React from "react";
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gray-800">E-Commerce Brand</div>
            <nav className="space-x-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Shop</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-6 py-8">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-3xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="mb-4">Discover the best products at unbeatable prices.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Shop Now
          </button>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">Product 1</h2>
            <p className="mb-4">Description of product 1.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">Product 2</h2>
            <p className="mb-4">Description of product 2.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">Product 3</h2>
            <p className="mb-4">Description of product 3.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-white shadow mt-8">
        <div className="container mx-auto px-6 py-3 text-center">
          <p className="text-gray-800">&copy; 2023 E-Commerce Brand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
};

export default App;

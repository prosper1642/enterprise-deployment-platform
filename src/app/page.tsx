export default function Home() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: "$99.99", category: "Electronics" },
    { id: 2, name: "Running Shoes", price: "$59.99", category: "Footwear" },
    { id: 3, name: "Coffee Maker", price: "$45.99", category: "Kitchen" },
    { id: 4, name: "Yoga Mat", price: "$29.99", category: "Fitness" },
    { id: 5, name: "Laptop Stand", price: "$39.99", category: "Office" },
    { id: 6, name: "Water Bottle", price: "$19.99", category: "Lifestyle" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ShopEnterprise</h1>
          <nav className="flex gap-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Products</a>
            <a href="#" className="hover:underline">Cart (0)</a>
          </nav>
        </div>
      </header>

      <section className="bg-blue-500 text-white text-center py-16 px-4">
        <h2 className="text-4xl font-bold mb-4">Enterprise E-commerce Platform</h2>
        <p className="text-xl mb-6">Secure. Fast. Scalable. Built for millions of customers.</p>
        <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100">
          Shop Now
        </button>
      </section>

      <section className="bg-white py-6 border-b">
        <div className="max-w-6xl mx-auto flex justify-center gap-8 text-sm text-gray-600 flex-wrap">
          <span>SSL Encrypted</span>
          <span>PCI Compliant Payments</span>
          <span>Fraud Protection</span>
          <span>30-Day Returns</span>
          <span>Free Shipping Over $50</span>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-4">
        <h3 className="text-2xl font-bold mb-8 text-gray-800">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center mb-4">
                <span className="text-gray-400 text-lg">Product Image</span>
              </div>
              <span className="text-xs text-blue-600 font-semibold uppercase">{product.category}</span>
              <h4 className="text-lg font-bold text-gray-800 mt-1">{product.name}</h4>
              <p className="text-2xl font-bold text-blue-600 mt-2">{product.price}</p>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-8 mt-12">
        <p className="text-sm">2026 ShopEnterprise | PCI-DSS Compliant | Secure Checkout</p>
        <p className="text-xs text-gray-400 mt-2">Environment: {process.env.NEXT_PUBLIC_APP_ENV || 'production'}</p>
      </footer>
    </main>
  );
}

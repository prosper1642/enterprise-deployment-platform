export default function Home() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: "$99.99", original: "$149.99", category: "Electronics", badge: "Best Seller" },
    { id: 2, name: "Running Shoes", price: "$59.99", original: "$89.99", category: "Footwear", badge: "Sale" },
    { id: 3, name: "Coffee Maker", price: "$45.99", original: "$65.99", category: "Kitchen", badge: "New" },
    { id: 4, name: "Yoga Mat", price: "$29.99", original: "$44.99", category: "Fitness", badge: "Popular" },
    { id: 5, name: "Laptop Stand", price: "$39.99", original: "$59.99", category: "Office", badge: "Sale" },
    { id: 6, name: "Water Bottle", price: "$19.99", original: "$29.99", category: "Lifestyle", badge: "New" },
  ];

  const categories = ["All", "Electronics", "Footwear", "Kitchen", "Fitness", "Office", "Lifestyle"];

  return (
    <main className="min-h-screen bg-gray-50 font-sans">

      {/* Top Banner */}
      <div className="bg-blue-700 text-white text-center py-2 text-sm font-medium tracking-wide">
        Free shipping on orders over $50 -- Use code ENTERPRISE20 for 20% off
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white font-black text-xl px-3 py-1 rounded-lg">SE</div>
            <span className="text-xl font-bold text-gray-800">ShopEnterprise</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-blue-600 transition">Home</a>
            <a href="#" className="hover:text-blue-600 transition">Products</a>
            <a href="#" className="hover:text-blue-600 transition">Deals</a>
            <a href="#" className="hover:text-blue-600 transition">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="border border-gray-200 rounded-full px-4 py-2 text-sm w-48 focus:outline-none focus:border-blue-400"
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Enterprise Grade
            </span>
            <h1 className="text-5xl font-black mt-4 mb-6 leading-tight">
              Shop Smarter.<br />Live Better.
            </h1>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Discover premium products with enterprise-level security, 
              PCI-compliant checkout, and lightning-fast delivery worldwide.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition shadow-lg">
                Shop Now
              </button>
              <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-blue-700 transition">
                View Deals
              </button>
            </div>
            <div className="flex gap-8 mt-10 text-sm text-blue-100">
              <div><span className="text-white font-bold text-2xl block">50K+</span>Products</div>
              <div><span className="text-white font-bold text-2xl block">2M+</span>Customers</div>
              <div><span className="text-white font-bold text-2xl block">4.9</span>Rating</div>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-white bg-opacity-10 rounded-2xl h-36 flex items-center justify-center backdrop-blur-sm border border-white border-opacity-20">
                <span className="text-white text-opacity-60 text-sm">Product {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-10 text-sm text-gray-500 font-medium">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            SSL Encrypted
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            PCI-DSS Compliant
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Fraud Protection
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            30-Day Returns
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Free Shipping Over $50
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            24/7 Support
          </span>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition border ${
                cat === "All"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-black text-gray-800">Featured Products</h2>
            <p className="text-gray-500 mt-1">Handpicked deals just for you</p>
          </div>
          <button className="text-blue-600 font-semibold text-sm hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-48 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-md flex items-center justify-center">
                  <span className="text-gray-300 text-xs text-center">Product<br/>Image</span>
                </div>
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {product.badge}
                </span>
                <button className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full shadow flex items-center justify-center text-gray-400 hover:text-red-500 transition">
                  +
                </button>
              </div>
              <div className="p-5">
                <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">{product.category}</span>
                <h3 className="text-lg font-bold text-gray-800 mt-1 mb-3">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} className="text-yellow-400 text-sm">*</span>
                  ))}
                  <span className="text-gray-400 text-xs ml-1">(128)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-blue-600">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">{product.original}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition group-hover:scale-105 transform duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-16 px-6 text-white text-center mx-6 rounded-3xl mb-16 max-w-7xl md:mx-auto">
        <h2 className="text-3xl font-black mb-4">Special Offer -- Up to 40% Off</h2>
        <p className="text-blue-100 mb-8">Limited time deal on selected items. Shop before it ends!</p>
        <button className="bg-white text-blue-700 font-bold px-10 py-3 rounded-full hover:bg-blue-50 transition shadow-lg">
          Claim Offer
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 text-white font-black text-sm px-2 py-1 rounded">SE</div>
              <span className="font-bold">ShopEnterprise</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Enterprise-grade shopping with world-class security and reliability.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition">Deals</a></li>
              <li><a href="#" className="hover:text-white transition">Categories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
              <li><a href="#" className="hover:text-white transition">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Security</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>PCI-DSS Compliant</li>
              <li>SSL Encrypted</li>
              <li>Fraud Protection</li>
              <li>Privacy Protected</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>2026 ShopEnterprise. All rights reserved. | PCI-DSS Compliant | Secure Checkout</p>
          <p className="mt-1 text-xs">Environment: {process.env.NEXT_PUBLIC_APP_ENV || 'production'}</p>
        </div>
      </footer>
    </main>
  );
}

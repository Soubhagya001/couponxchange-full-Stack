
import React, { useState, useEffect } from 'react';
import { Search, Plus, User, Wallet, Star, Clock, Tag, ArrowRight, Heart, Filter } from 'lucide-react';

const CouponMarketplace = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for coupons
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      title: 'Swiggy 40% Off',
      platform: 'Swiggy',
      originalValue: 500,
      sellingPrice: 300,
      discount: '40%',
      expiryDate: '2025-06-30',
      seller: 'rahul_21',
      rating: 4.8,
      category: 'food',
      verified: true
    },
    {
      id: 2,
      title: 'Amazon ₹200 Off',
      platform: 'Amazon',
      originalValue: 200,
      sellingPrice: 150,
      discount: '25%',
      expiryDate: '2025-07-15',
      seller: 'priya_gen',
      rating: 4.9,
      category: 'shopping',
      verified: true
    },
    {
      id: 3,
      title: 'Zomato Free Delivery',
      platform: 'Zomato',
      originalValue: 100,
      sellingPrice: 70,
      discount: '30%',
      expiryDate: '2025-06-25',
      seller: 'foodie_18',
      rating: 4.7,
      category: 'food',
      verified: false
    },
    {
      id: 4,
      title: 'Myntra ₹500 Off',
      platform: 'Myntra',
      originalValue: 500,
      sellingPrice: 350,
      discount: '30%',
      expiryDate: '2025-08-01',
      seller: 'fashion_lover',
      rating: 4.6,
      category: 'fashion',
      verified: true
    }
  ]);
  useEffect(() => {
  fetch("http://localhost:8080/api/coupons")
    .then(res => res.json())
    .then(data => setCoupons(data))
    .catch(err => console.error("Failed to fetch coupons:", err));
}, []);

  const categories = [
    { id: 'all', name: 'All', icon: '🏷️' },
    { id: 'food', name: 'Food', icon: '🍕' },
    { id: 'shopping', name: 'Shopping', icon: '🛍️' },
    { id: 'fashion', name: 'Fashion', icon: '👕' },
    { id: 'travel', name: 'Travel', icon: '✈️' }
  ];

  const filteredCoupons = coupons.filter(coupon => {
    const matchesSearch = coupon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         coupon.platform.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || coupon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const CouponCard = ({ coupon }) => (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {coupon.platform[0]}
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{coupon.title}</h3>
            <p className="text-sm text-gray-500">{coupon.platform}</p>
          </div>
        </div>
        {coupon.verified && (
          <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">✓ Verified</span>
        )}
      </div>
      
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-green-600">₹{coupon.sellingPrice}</span>
          <span className="text-sm text-gray-500 line-through">₹{coupon.originalValue}</span>
          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">{coupon.discount} OFF</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
        <div className="flex items-center space-x-1">
          <User className="w-4 h-4" />
          <span>{coupon.seller}</span>
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span>{coupon.rating}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>Exp: {new Date(coupon.expiryDate).toLocaleDateString()}</span>
        </div>
      </div>
      
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
        <span>Buy Now</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );

  const SellForm = () => {
    const [formData, setFormData] = useState({
      platform: '',
      title: '',
      originalValue: '',
      sellingPrice: '',
      category: '',
      expiryDate: '',
      description: ''
    });

    return (
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">List Your Coupon</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.platform}
              onChange={(e) => setFormData({...formData, platform: e.target.value})}
            >
              <option value="">Select Platform</option>
              <option value="swiggy">Swiggy</option>
              <option value="zomato">Zomato</option>
              <option value="amazon">Amazon</option>
              <option value="flipkart">Flipkart</option>
              <option value="myntra">Myntra</option>
              <option value="paytm">Paytm</option>
              <option value="phonepe">PhonePe</option>
              <option value="gpay">Google Pay</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Coupon Title</label>
            <input 
              type="text"
              placeholder="e.g., Swiggy 40% Off on orders above ₹300"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Original Value (₹)</label>
              <input 
                type="number"
                placeholder="500"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.originalValue}
                onChange={(e) => setFormData({...formData, originalValue: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Price (₹)</label>
              <input 
                type="number"
                placeholder="300"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.sellingPrice}
                onChange={(e) => setFormData({...formData, sellingPrice: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="">Select Category</option>
                <option value="food">Food & Dining</option>
                <option value="shopping">Shopping</option>
                <option value="fashion">Fashion</option>
                <option value="travel">Travel</option>
                <option value="entertainment">Entertainment</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
              <input 
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.expiryDate}
                onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea 
              placeholder="Add any special terms or conditions..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">💰 Earnings Breakdown</h3>
            <div className="text-sm text-blue-700">
              <p>You'll receive: ₹{formData.sellingPrice ? Math.floor(formData.sellingPrice * 0.9) : '0'} (90%)</p>
              <p>Platform fee: ₹{formData.sellingPrice ? Math.floor(formData.sellingPrice * 0.1) : '0'} (10%)</p>
            </div>
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
            List Coupon for Sale
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Tag className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CouponXchange
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                <Wallet className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">₹1,247</span>
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('browse')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'browse'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Browse Coupons
            </button>
            <button
              onClick={() => setActiveTab('sell')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'sell'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Sell Coupon
            </button>
            <button
              onClick={() => setActiveTab('my-orders')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'my-orders'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              My Orders
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {activeTab === 'browse' && (
          <div>
            {/* Search and Filters */}
            <div className="mb-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search coupons, brands, or categories..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </button>
              </div>

              {/* Categories */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Coupons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCoupons.map(coupon => (
                <CouponCard key={coupon.id} coupon={coupon} />
              ))}
            </div>

            {filteredCoupons.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No coupons found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'sell' && <SellForm />}

        {activeTab === 'my-orders' && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wallet className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Orders</h3>
            <p className="text-gray-600 mb-4">Track your purchases and sales</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              View Order History
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default CouponMarketplace;

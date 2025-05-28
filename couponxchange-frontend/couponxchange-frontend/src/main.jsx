
import React from 'react'
import ReactDOM from 'react-dom/client'
import CouponMarketplace from './components/CouponMarketplace'
import './index.css'; // ✅ This must exist


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CouponMarketplace />
  </React.StrictMode>
)

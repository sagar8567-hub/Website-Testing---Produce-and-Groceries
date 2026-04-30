/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AnnouncementBar, Navigation, Footer } from './components/Layout';
import { CartDrawer } from './components/CartDrawer';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Subscription from './pages/Subscription';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <AnnouncementBar />
        <Navigation />
        <CartDrawer />
        <ExitIntentPopup />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/subscription" element={<Subscription />} />
            {/* Catch all for missing pages to show Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}

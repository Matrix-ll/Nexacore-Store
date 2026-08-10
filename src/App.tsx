import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from '@/pages/SharedLayout'
import HomePage from '@/pages/HomePage'
import SuccessPage from '@/pages/SuccessPage'
import CancelPage from '@/pages/CancelPage'
import TermsPage from '@/pages/TermsPage'
import PrivacyPage from '@/pages/PrivacyPage'
import RefundPage from '@/pages/RefundPage'
import DigitalDeliveryPage from '@/pages/DigitalDeliveryPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/cancel" element={<CancelPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund-policy" element={<RefundPage />} />
          <Route path="/digital-delivery-policy" element={<DigitalDeliveryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

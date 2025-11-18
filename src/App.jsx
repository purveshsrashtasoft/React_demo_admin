import './App.css';
import './index.css';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import Policy from './pages/policy/Policy';
import Faq from './pages/Faq/Faq';
import Add from './pages/policy/Add';
import AddFaq from './pages/Faq/Add';
import AddAsset from './pages/Manageassetlist/Add';
import Lifedeclaration from './pages/Lifedeclaration/LifeDeclaration';
import DeathCertificate from './pages/Managedeathcertificate/DeathCertificate';
import Subscription from './pages/Managesubscription/Subscription';
import AddSubscriptionPlan from './pages/Addsubscription/AddSubscriptionPlan';
import PromoCodes from './pages/Managepromocodes/PromoCodes';
import Communications from './pages/Managecommunications/Communications';
import Reports from './pages/Managereports/Reports';





import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManageAssetList from './pages/Manageassetlist/ManageAssetList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/policy/add" element={<Add />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/faq/add" element={<AddFaq />} />
        <Route path="/manage-asset-list" element={<ManageAssetList />} />
        <Route path="/manage-asset-list/add" element={<AddAsset />} />
        <Route path="/life-declaration" element={<Lifedeclaration />} />
        <Route path="/death-certificate" element={<DeathCertificate />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/subscription/add-subscription-plan" element={<AddSubscriptionPlan />} />
        <Route path="/promo-codes" element={<PromoCodes />} />
        <Route path="/communications" element={<Communications />} />
        <Route path="/reports" element={<Reports />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;

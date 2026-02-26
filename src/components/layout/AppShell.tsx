import { useMemo, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useProgressContext } from '../../context/useProgressContext';
import { buildCourseNavGroups } from '../../data/navigation';
import LandingPage from '../landing/LandingPage';
import DashboardPage from '../dashboard/DashboardPage';
import ModulePage from '../module/ModulePage';
import CompletionPage from '../completion/CompletionPage';
import TopNav from './TopNav';
import LeftSidebar from './LeftSidebar';
import MobileDrawer from './MobileDrawer';
import Footer from './Footer';

export default function AppShell() {
  const location = useLocation();
  const { isModuleUnlocked, isModuleComplete } = useProgressContext();
  const [drawerState, setDrawerState] = useState<{ open: boolean; route: string }>({
    open: false,
    route: location.pathname,
  });

  const navGroups = useMemo(
    () =>
      buildCourseNavGroups({
        pathname: location.pathname,
        isModuleUnlocked,
        isModuleComplete,
      }),
    [location.pathname, isModuleUnlocked, isModuleComplete]
  );

  const mobileDrawerOpen = drawerState.open && drawerState.route === location.pathname;

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <TopNav onOpenMenu={() => setDrawerState({ open: true, route: location.pathname })} />

      <div className="shell-layout">
        <LeftSidebar groups={navGroups} pathname={location.pathname} />

        <main id="main-content" className="shell-main">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/module/:id" element={<ModulePage />} />
            <Route path="/completion" element={<CompletionPage />} />
          </Routes>
          <Footer />
        </main>
      </div>

      <MobileDrawer
        open={mobileDrawerOpen}
        groups={navGroups}
        pathname={location.pathname}
        onClose={() => setDrawerState(prev => ({ ...prev, open: false }))}
      />
    </div>
  );
}

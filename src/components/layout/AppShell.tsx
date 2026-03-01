import { useMemo, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useProgressContext } from '../../context/useProgressContext';
import { buildCourseNavGroups, buildTopNavItems } from '../../data/navigation';
import { getDepthLevel } from '../../data/depth-levels';
import { allModules } from '../../data/modules';
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
  const { isModuleUnlocked, isModuleComplete, getModuleProgress, getOverallPercent, progress } = useProgressContext();
  const currentStreak = progress.streak.current;
  const [drawerState, setDrawerState] = useState<{ open: boolean; route: string }>({
    open: false,
    route: location.pathname,
  });

  const navGroups = useMemo(
    () =>
      buildCourseNavGroups({
        pathname: location.pathname,
        isModuleComplete,
      }),
    [location.pathname, isModuleComplete]
  );

  const topNavItems = useMemo(
    () =>
      buildTopNavItems({
        pathname: location.pathname,
        isModuleComplete,
      }),
    [location.pathname, isModuleComplete]
  );

  const topNavMetrics = useMemo(() => {
    const depthLevel = getDepthLevel(progress.xp);
    return {
      xp: progress.xp,
      level: depthLevel.level,
      streak: currentStreak,
      overallPercent: getOverallPercent(),
    };
  }, [progress.xp, currentStreak, getOverallPercent]);

  const continueCta = useMemo(() => {
    const allComplete = allModules.every(moduleData => isModuleComplete(moduleData.id));
    if (allComplete) {
      return {
        href: '/completion',
        label: 'View Completion',
      };
    }

    const unlockedIncomplete = allModules.filter(
      moduleData => isModuleUnlocked(moduleData.id) && !isModuleComplete(moduleData.id)
    );

    const resumedModule = unlockedIncomplete.find(moduleData => getModuleProgress(moduleData.id).started);
    const targetModule = resumedModule ?? unlockedIncomplete[0];
    if (targetModule) {
      return {
        href: `/module/${targetModule.number}`,
        label: 'Continue Course',
      };
    }

    return {
      href: '/',
      label: 'Start Course',
    };
  }, [getModuleProgress, isModuleComplete, isModuleUnlocked]);

  const mobileDrawerOpen = drawerState.open && drawerState.route === location.pathname;

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <TopNav
        onOpenMenu={() => setDrawerState({ open: true, route: location.pathname })}
        brandLabel="Codex In Plain English"
        items={topNavItems}
        metrics={topNavMetrics}
        cta={continueCta}
      />

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

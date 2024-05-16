import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Header } from '../components/NavBar';
import { Footer } from '../components/Footer';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="bg-gradient-to-r from-[#27314e] to-[#4a044e]">
        <Header />
        <Outlet />
        <Footer />
      </div>

      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});

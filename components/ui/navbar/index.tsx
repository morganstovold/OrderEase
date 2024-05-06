import Link from 'next/link';

import { Button } from '../button';
import { MobileMenu } from './MobileMenu';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 border-b">
      <div className="relative mx-auto flex h-16 justify-between lg:container lg:px-16 xl:px-20">
        <div className="flex flex-1 items-center justify-between px-6 sm:items-stretch lg:px-0">
          <div className="flex items-center">
            <div className="flex shrink-0 items-center">
              <Link
                href="/"
                as="/"
                className="ml-2 hidden font-mono text-lg uppercase leading-4 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 xl:block"
              >
                OrderEase
              </Link>
            </div>
            <div className="hidden h-16 items-center pl-8 font-mono text-sm uppercase leading-4 sm:space-x-4 lg:flex">
              <span>test</span>
              <span>test</span>
              <span>test</span>
              <span>test</span>
              <Button variant="default">Dashboard</Button>
              <Button variant="secondary">Dashboard</Button>
              <Button variant="outline">Dashboard</Button>
              <Button variant="dashed">Dashboard</Button>
              <Button variant="link">Dashboard</Button>
              <Button variant="warning">Dashboard</Button>
              <Button variant="danger">Dashboard</Button>
              <Button variant="text">Dashboard</Button>
            </div>
          </div>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

export { Navbar };

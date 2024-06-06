import Image from 'next/image';
// import {dark} from "@clerk/themes";
import Link from 'next/link';
import { ClerkProvider, SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="hr logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          HourMeet
        </p>
      </Link>
      <div className="flex-between gap-5 bg-red">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;

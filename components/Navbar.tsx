import { appName } from '../config/constants';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';

export function Navbar() {
  return (
    <div className=" bg-base-200 fixed left-0 right-0 top-0 z-10">
      <div className="navbar container mx-auto h-20">
        <div className="flex-1">
          <Link
            href="#home"
            scroll={false}
            className="btn btn-ghost normal-case text-xl"
          >
            {appName}
          </Link>
        </div>
        <ul className="flex items-center gap-2">
          <li>
            <Link
              href="https://github.com/Gryta-Krutt/home"
              target="_blank"
              className="btn btn-ghost gap-2 normal-case"
            >
              <BsGithub className="w-4 h-4" />
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="#download"
              scroll={false}
              className="btn btn-ghost normal-case"
            >
              Download
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
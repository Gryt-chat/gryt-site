import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineFileDownload } from 'react-icons/md';
import { selfHostLink } from '../config/constants';

export function Hero() {
  let agent = '';
  if (typeof window !== 'undefined') {
    agent = window.navigator.userAgent;
  }
  return (
    <div className="hero bg-base-200 pt-28 pb-4 xl:pt-32 xl:pb-20">
      <div className="custom-container container flex flex-col gap-12 xl:flex-row-reverse xl:gap-24">
        <Image
          alt=""
          src="/images/screenshots/ddd.png"
          className="lg:rounded-lg rounded-md shadow-2xl"
          width={1600}
          height={1200}
        />
        <div>
          <h1 className="text-5xl font-bold">
            A{' '}
            <span className="text-gradient bg-gradient-to-t from-pink-300 to-purple-500">
              brand new
            </span>{' '}
            <br />
            chat-platform
          </h1>
          <p className="py-6">
            Tired of being limited to 720p when streaming to friends? Wish to be
            in control of your data? Download the Gryt Client today and
            experience a new and refreshing form of control!
          </p>
          <div className="flex gap-2">
            <button
              className="btn btn-primary font-bold gap-2 shadow  normal-case"
              suppressHydrationWarning={true}
            >
              <MdOutlineFileDownload className="w-6 h-6" />
              {`Download ${agent.search('Windows') ? 'for Windows' : 'now!'}`}
            </button>
            <Link
              href={selfHostLink}
              target="_blank"
              className="btn btn-ghost  normal-case"
            >
              Self Host
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

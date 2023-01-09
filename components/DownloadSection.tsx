import { useUserAgent } from 'next-useragent';
import Link from 'next/link';
import { FaApple, FaLinux, FaWindows } from 'react-icons/fa';
import { selfHostLink } from '../config/constants';
import { download } from '../utils/downloadHelper';

export default function DownloadSection({ uaString }: { uaString: string }) {
  const os = useUserAgent(uaString).os;
  return (
    <div
      id="download"
      className="hero bg-base-200 text-neutral-content min-h-screen"
    >
      <div className="custom-container container mx-auto text-center grid gap-12">
        <h2 className="text-4xl font-extrabold md:text-6xl">
          Ready to download?
        </h2>
        <div className="flex flex-col gap-6 md:flex-row">
          <button
            onClick={() => {
              download(os);
            }}
            className="btn gap-2 normal-case"
          >
            <FaWindows className="w-5 h-5" />
            Windows
          </button>
          <button
            className="btn gap-2 normal-case"
            onClick={() => {
              download(os);
            }}
          >
            <FaApple className="w-5 h-5" />
            macOs
          </button>
          {/* <div
            className="tooltip tooltip-bottom"
            data-tip="The client does not currently support Linux"
          > */}
          <button
            className="btn gap-2 normal-case"
            onClick={() => {
              download(os);
            }}
          >
            <FaLinux className="w-5 h-5" />
            Linux
          </button>
          {/* </div> */}
        </div>
        <Link href={selfHostLink} target="_self" className="Link text-gray-500">
          Self Hosting
        </Link>
      </div>
    </div>
  );
}

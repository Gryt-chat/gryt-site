import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineFileDownload } from 'react-icons/md';
import { downloadLinks, selfHostLink } from '../../config/constants';
import { useUserAgent } from 'next-useragent';
import { useEffect, useState } from 'react';
import { download } from '../../utils/downloadHelper';

function DownloadButton({ os }: { os: string }) {
  const [d, setD] = useState('');

  useEffect(() => {
    const a = downloadLinks[os.toLowerCase()];
    if (a) setD(a);
  }, []);

  const css = 'btn btn-primary font-bold gap-2 shadow  normal-case';
  const dIcon = <MdOutlineFileDownload className="w-6 h-6" />;
  return d ? (
    <div
      className="tooltip tooltip-bottom"
      data-tip="Gryt is not publicly available yet. Follow our GitHub page for updates!"
    >
      <button
        disabled
        className={css}
        onClick={() => {
          download(os);
        }}
      >
        {dIcon}
        {`Download for ${os}`}
      </button>
    </div>
  ) : (
    <Link href="#download" scroll={false} className={css}>
      {dIcon}
      Download now
    </Link>
  );
}

export function Hero({ uaString }: { uaString: string }) {
  const os = useUserAgent(uaString).os;

  return (
    <div className="hero bg-base-200 pt-28 pb-4 xl:pt-32 xl:pb-20">
      <div className="custom-container container flex flex-col gap-6">
        <h1 className="text-5xl font-bold">
          A{' '}
          <span className="text-gradient bg-gradient-to-b from-primary to-accent">
            brand new
          </span>{' '}
          chat platform
        </h1>
        <p>
          Say goodbye to outdated chat platforms; Welcome Gryt, the new standard
          in secure, customizable communication.
        </p>
        <div className="flex gap-2">
          <DownloadButton os={os} />
          <Link
            href={selfHostLink}
            target="_self"
            className="btn btn-ghost  normal-case"
          >
            Self Host
          </Link>
        </div>
        <Image
          alt="An early mockup of the Gryt chat client"
          src="/images/screenshots/server.avif"
          className="lg:rounded-lg rounded-md shadow-2xl w-full"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
    </div>
  );
}

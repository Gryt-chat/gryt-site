import Image from 'next/image';
import { FeatureCard } from '../FeatureCard';
import {
  IoBrowsersOutline,
  IoHeart,
  IoInfiniteSharp,
  IoServer,
} from 'react-icons/io5';
import { MdOutlineMoneyOff } from 'react-icons/md';

const icon = 'w-16 h-16 text-primary';
const duck = (
  <div className="avatar flex">
    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
      <Image
        alt=""
        width={256}
        height={256}
        src="/images/features/duck.gif"
        quality={100}
      />
    </div>
  </div>
);
const limits = <IoInfiniteSharp className={icon} />;
const selfHost = <IoServer className={icon} />;
const openSource = <IoHeart className={icon} />;
const freeForever = <MdOutlineMoneyOff className={icon} />;
const adminPanel = <IoBrowsersOutline className={icon} />;

export function ThirdSection() {
  return (
    <div
      id="features"
      className="hero bg-base-300 text-neutral-content min-h-screen"
    >
      <div className="grid custom-container container mx-auto text-center">
        <h2 className="text-4xl font-extrabold md:text-6xl">Features</h2>
        <div className="mt-8 gap-12 flex flex-col">
          <div className="flex flex-row gap-12 flex-wrap lg:flex-nowrap">
            <FeatureCard
              className="xl:basis-2/6 lg:basis-2/4"
              title="Gif profile pictures"
              description="Everyone can use gifs or any other image formats specified by
                  the server as their profile picture. Profile banners and other customization is also included"
              displayElement={duck}
            />
            <FeatureCard
              className="xl:basis-2/6 lg:basis-2/4"
              title="Customizable server"
              description="Almost everything about the server can be customized, including customization for maximum file-upload size, voice- and video-stream-bitrate per channel, and a lot more"
              displayElement={limits}
            />
            <FeatureCard
              className="xl:basis-2/6 lg:basis-2/4"
              title="Self hosting"
              description="The server itself can easily be hosted through the use of an .exe file or a docker image. No previous hosting experience needed"
              displayElement={selfHost}
            />
          </div>
          <div className="flex flex-row gap-12 flex-wrap lg:flex-nowrap">
            <FeatureCard
              className="xl:basis-2/6 lg:basis-2/4"
              title="Open Source"
              description="Gryt is open source, which means everyone can contribute to improving and expanding it. This also means you can create a spin-off version, a personalized client or server for you and your friends to use"
              displayElement={openSource}
            />
            <FeatureCard
              className="xl:basis-2/6 lg:basis-2/4"
              title="No paywalls"
              description="Gryt will never require you to pay for any of the features the client or the server offer. This does not apply to paid hosting services, as these services are not provided by Gryt"
              displayElement={freeForever}
            />
            <FeatureCard
              className="xl:basis-2/6 lg:basis-2/4"
              title="Admin Panel"
              description="The server includes an admin panel where you can easily configure and manage your server. It can be accessed from the web at port 4898"
              displayElement={adminPanel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

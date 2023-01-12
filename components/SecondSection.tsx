import Link from 'next/link';
import { githubLink } from '../config/constants';

export function SecondSection() {
  return (
    <div
      id="anotherCopy?"
      className="hero bg-base-100 text-neutral-content min-h-screen"
    >
      <div className="grid custom-container container mx-auto text-center">
        <h2 className="text-4xl font-extrabold md:text-6xl">
          Another discord copy?
        </h2>
        <h3 className="my-8 text-3xl font-bold">
          <u>No.</u>
        </h3>
        <p className="mx-auto max-w-lg">
          Gryt is an{' '}
          <Link
            href={githubLink}
            target="_blank"
            className="link link-primary"
          >
            open source
          </Link>{' '}
          alternative to discord that allows you to be <b>in control</b>. No
          more limiting stream quality and emotes behind a paywall! The aim is
          to give you full control while still offering good <b>quality</b> and
          high <b>security</b>.
        </p>
      </div>
    </div>
  );
}

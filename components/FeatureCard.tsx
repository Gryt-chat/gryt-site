import { ReactNode } from 'react';

export function FeatureCard({
  title,
  description,
  displayElement,
  className,
}: {
  title?: string;
  description?: string;
  displayElement?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`card bg-base-200 shadow-xl p-8 gap-5 justify-center items-center ${className}`}
    >
      {displayElement}
      <div className="p-0 gap-2 flex flex-col">
        <h2 className="text-lg font-semibold capitalize">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

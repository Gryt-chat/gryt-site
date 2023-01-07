import Link from 'next/link';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <div className="w-100 bg-neutral py-4">
      <footer className="container footer items-center mx-auto text-neutral-content">
        <div className="items-center grid-flow-col">
          <svg
            className="fill-current w-9 h-9"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="814.000000pt"
            height="814.000000pt"
            viewBox="0 0 814.000000 814.000000"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,814.000000) scale(0.100000,-0.100000)"
              stroke="none"
              fill="currentColor"
            >
              <path
                d="M2337 8115 c-21 -8 -60 -30 -85 -49 -26 -19 -529 -518 -1118 -1108
-865 -866 -1076 -1083 -1095 -1123 -34 -73 -38 -180 -9 -260 21 -57 48 -85
556 -595 l533 -535 -9 -120 c-19 -245 -8 -538 30 -800 76 -532 288 -1028 607
-1425 477 -593 1163 -960 1973 -1055 182 -21 515 -29 675 -17 l130 11 490
-489 c552 -551 543 -543 680 -543 146 0 59 -79 1292 1156 1226 1229 1146 1139
1146 1282 0 137 16 117 -570 705 l-523 525 0 383 0 382 -1585 0 -1585 0 0
-535 0 -535 920 0 c804 0 920 -2 920 -15 0 -25 -59 -166 -115 -273 -190 -364
-512 -624 -895 -722 -320 -82 -750 -63 -1085 47 -238 78 -483 239 -633 415
-266 315 -392 708 -394 1228 -1 217 11 339 48 509 72 324 204 570 424 791 236
237 511 366 873 411 136 16 423 6 547 -19 347 -72 642 -260 800 -510 l45 -71
806 -1 807 0 -24 83 c-120 413 -339 792 -624 1077 -429 429 -1012 696 -1690
775 -272 31 -710 29 -920 -4 l-45 -8 -505 503 c-474 471 -509 503 -563 523
-68 25 -171 27 -230 6z m425 -842 c170 -170 308 -311 308 -314 0 -4 -34 -18
-76 -33 -267 -95 -593 -280 -834 -473 -119 -95 -312 -289 -410 -413 -214 -269
-384 -586 -491 -918 l-33 -102 -333 332 c-183 183 -333 337 -333 343 0 13
1872 1885 1885 1885 5 0 148 -138 317 -307z m4546 -4546 l282 -282 -948 -948
-947 -947 -299 299 c-164 164 -294 301 -290 303 5 3 34 13 64 23 348 111 757
351 1050 617 327 296 634 751 767 1137 15 45 30 81 33 81 3 0 132 -127 288
-283z"
                stroke="none"
                fill="currentColor"
              />
            </g>
          </svg>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link
            href="https://github.com/Gryta-Krutt"
            target="_blank"
            className="link"
          >
            <BsGithub className="w-6 h-6" />
          </Link>
          <Link
            href="https://twitter.com/grytaKrutt"
            target="_blank"
            className="link"
          >
            <BsTwitter className="w-6 h-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/sivertgullberghansen/"
            target="_blank"
            className="link"
          >
            <BsLinkedin className="w-6 h-6" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
import Link from "next/link";
import Image from "next/image";
import whiteLogo from "@/app/generic/images/white-logo.svg";
import GradientBar from "./GradientBar";

const Footer = () => {
  return (
    <footer>
      <GradientBar />
      <div className="bg-[#1c1b1a] pt-24 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_auto] gap-10 lg:gap-12">
            {/* Logo & Info Column */}
            <div className="flex flex-col gap-6">
              <Image src={whiteLogo} alt="Carmine Corino" height={60} />
              <p className="text-footerheading uppercase text-theme-blue-400 font-medium mt-4">
                Redefining Financial Advisory
              </p>
              <div className="text-xs text-white/60">
                <p>&copy; Carmine Corino. All rights reserved.</p>
                <p>
                  Brand creative and website by{" "}
                  <Link
                    href="https://www.uncommoncrowd.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#fb6938] transition-colors"
                  >
                    Uncommon Crowd
                  </Link>
                  .
                </p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-sm uppercase tracking-widest text-white font-medium">
                  Follow
                </span>
                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/carminecorino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                {/* YouTube */}
                <Link
                  href="https://www.youtube.com/@CornerstonePlanningGroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Book Column */}
            <div className="flex flex-col gap-3">
              <Link
                href="/broken-dealer"
                className="text-footerheading uppercase tracking-wider text-white hover:text-white/80 transition-colors"
              >
                Book
              </Link>
              <Link
                href="/broken-dealer"
                className="text-footerlink text-white/70 hover:text-white transition-colors"
              >
                Broken Dealer
              </Link>
              <Link
                href="https://www.amazon.com/Broken-Dealer-Navigating-Financial-Independence/dp/1642256552"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footerlink text-white/70 hover:text-white transition-colors"
              >
                Buy Now
              </Link>
              <Link
                href="/"
                className="text-footerlink text-white/70 hover:text-white transition-colors"
              >
                Broken Dealer Podcast
              </Link>
            </div>

            {/* Speaking Column */}
            <div className="flex flex-col gap-3">
              <Link
                href="/speaking"
                className="text-footerheading font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors"
              >
                Speaking
              </Link>

              <Link
                href="/contact?type=general"
                className="text-footerlink text-white/70 hover:text-white transition-colors"
              >
                Book Carmine
              </Link>
              <Link
                href="/speaking#select-a-keynote"
                className="text-footerlink text-white/70 hover:text-white transition-colors"
              >
                Select Your Experience
              </Link>
              <a
                href="/CarmineCorino_SpeakerSheet.pdf"
                download
                className="text-footerlink text-white/70 hover:text-white transition-colors"
              >
                Speaker Sheet
              </a>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="text-footerheading font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="text-footerlink text-white/70 hover:text-white transition-colors"
              >
                Reach Out
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

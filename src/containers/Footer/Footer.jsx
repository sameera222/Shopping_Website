import React from "react";
import {
  BiLogoInstagram,
  BiLogoPinterestAlt,
  BiLogoTwitter,
  BiLogoFacebook,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 bg-black p-4">
      <div className="w-1/2 flex flex-row items-center justify-center  flex-1 flex-wrap">
        <div className="text-white flex flex-col items-start  text-[12px] flex-1 gap-4">
          <div>
            <h1 className="font-bold text-lg">ABOUT BODDESS</h1>
          </div>
          <h6>About Us</h6>
          <h6>In News</h6>
          <h6>Store Locator</h6>
        </div>
        <div className="text-white flex flex-col items-start text-[12px] flex-1 gap-4 mt-8">
          <div>
            <h1 className="font-bold text-lg">Help & Support</h1>
          </div>
          <h6>FAQs</h6>
          <h6>Contact Us</h6>
          <h6>Terms $ Condition</h6>
          <h6>Privacy Policy</h6>
        </div>
        <div className="text-white flex flex-col items-start text-[12px] flex-1 gap-4 mt-8">
          <div>
            <h1 className="font-bold text-lg">TOP CATEGORIES</h1>
          </div>
          <h6>Make Up</h6>
          <h6>Skin</h6>
          <h6>Bath & Body</h6>
          <h6>Hair</h6>
          <h6>Hygiene & Wellbeing</h6>
          <h6>Men</h6>
          <h6>Accessories</h6>
          <h6>Appliances</h6>
          <h6>Fragrances</h6>
        </div>
        <div className="text-white flex flex-col items-start text-[12px] flex-1 gap-4">
          <div>
            <h1 className="font-bold text-lg">USEFUL LINKS</h1>
          </div>
          <h6>Blog</h6>
          <h6>Loyalty Program</h6>
          <h6>Promotion</h6>
        </div>
        <div className="text-white flex flex-col items-start text-[12px] flex-1 justify-start gap-4">
          <div>
            <h1 className="font-bold">
              {" "}
              HELP & SUPPORT (MONDAY TO SUNDAY 9:00 TO 8:00 PM)
            </h1>
          </div>

          <h6>+917303395449</h6>
          <h6>care@boddess.in</h6>
          <h6>Chat With Us</h6>
        </div>
      </div>

      <hr className="w-1/2 border-t-1 border-white flex flex-col my-4" />

      <div className="flex flex-row items-center justify-between text-white gap-5 w-1/2">
        <div>
          <div className="flex flex-col items-start pb-2">
            <h6>Payment</h6>
          </div>
          <img
            src="https://static.boddess.com/media/ktpl/icons/payments-icons.svg"
            alt="payment"
          />
        </div>
        <div>
          <div className="pb-2 text-sm">
            <h5>Experience Boddess app on mobile</h5>
          </div>
          <div className="flex flex-row gap-2">
            <img
              src="https://static.boddess.com/media/ktpl/icons/googleplay.svg"
              alt="googleplay"
            />
            <img
              src="https://static.boddess.com/media/ktpl/icons/appstore.svg"
              alt="appstore"
            />
          </div>
        </div>
      </div>
      <hr className="w-1/2 border-t-1 border-white flex flex-col my-4" />

      <div className="flex flex-row items-center justify-between text-white gap-5 w-1/2">
        <div>
          <h3 className="pb-2 text-[12px] font-serif">
            Show us some <span className="text-red-600">♥ </span>love on social
            media
          </h3>
          <div className="flex flex-row gap-4">
            <div className="border-white border rounded-full w-8  h-8 p-2">
              <a
                rel="noreferrer"
                href="https://www.facebook.com/BoddessBeautyOasis/"
                target="_blank"
              >
                <BiLogoFacebook />
              </a>
            </div>
            <div className="border-white border rounded-full w-8  h-8 p-2">
              <a
                rel="noreferrer"
                href="https://www.facebook.com/BoddessBeautyOasis/"
                target="_blank"
              >
                <BiLogoInstagram />
              </a>
            </div>
            <div className="border-white border rounded-full w-8  h-8 p-2">
              <a
                rel="noreferrer"
                href="https://www.facebook.com/BoddessBeautyOasis/"
                target="_blank"
              >
                <BiLogoPinterestAlt />
              </a>
            </div>
            <div className="border-white border rounded-full w-8  h-8 p-2">
              <a
                rel="noreferrer"
                href="https://www.facebook.com/BoddessBeautyOasis/"
                target="_blank"
              >
                <BiLogoTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-2 text-sm">
          <h5>Terms & Conditions</h5>
          <h5>Privacy Policy</h5>
          <h5>SiteMap</h5>
        </div>
      </div>

      <p className="flex flex-col items-start justify-center w-2/3 text-white text-[10px]">
        House of Beauty Pvt. Ltd. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;

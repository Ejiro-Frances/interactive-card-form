import desktopBg from "/images/bg-main-desktop.png";
import mobileBg from "/images/bg-main-mobile.png";

// store
import { useCardStore } from "@/store/useCardStore";

const CardBG = () => {
  const { isSubmitted, details } = useCardStore();

  return (
    <div className="relative">
      <picture className="block w-full">
        <source srcSet={desktopBg} media="(min-width: 1024px)" />
        <img
          src={mobileBg}
          alt="Background illustration"
          className="h-72 w-full lg:h-screen "
        />
      </picture>

      {/* the back of the debit card */}
      <div className="absolute top-10 lg:top-4/7 left-20 lg:left-auto lg:-right-1/2 lg:-translate-y-1/2 max-w-[75%]">
        <img src="/images/bg-card-back.png" alt="The back of a debit card" />
        <span className="absolute top-[42%] lg:top-[60px] right-10 text-xs text-gray-100">
          {isSubmitted ? details.cvc : "000"}
        </span>
      </div>

      {/* the front of the debit card */}
      <div className="absolute top-2/4 lg:top-1/5 left-7 lg:left-auto lg:-right-1/3 max-w-[75%]">
        <div className="">
          <img
            src="/images/bg-card-front.png"
            alt="The front of a debit card"
          />
          {/* details of the debit card */}
          <section className="absolute top-0 left-0 w-full px-6 py-3">
            {/* two circles */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white"></div>
              <div className="w-3 h-3 border border-white rounded-full bg-transparent"></div>
            </div>
            {/* details */}
            <div className="mt-7 md:mt-10">
              <p className="text-white text-base md:text-xl">
                {isSubmitted ? details.cardnumber : "0000 0000 0000 0000"}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-white/90 text-xs font-medium uppercase">
                  {isSubmitted ? details.cardname : "Jane Appleseed"}
                </p>
                {/* month/year */}
                <p className="text-white/90 text-xs font-medium uppercase mt-3">
                  <span>{isSubmitted ? details.month : "00"}</span>/
                  <span>{isSubmitted ? details.year : "00"}</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CardBG;

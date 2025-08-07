import desktopBg from "/images/bg-main-desktop.png";
import mobileBg from "/images/bg-main-mobile.png";

// store
import { useCardStore } from "@/store/useCardStore";

const CardBG = () => {
  const { isSubmitted, details } = useCardStore();

  return (
    <div className="relative p-2">
      <picture className="">
        <source srcSet={desktopBg} media="(min-width: 800px)" />
        <img src={mobileBg} alt="Background illustration" className="w-full" />
      </picture>

      <div className="absolute top-10 left-20 max-w-[75%]">
        <img src="/images/bg-card-back.png" alt="The back of a debit card" />
      </div>

      {/* the front of the debit card */}
      <div className="absolute top-2/4 left-7 max-w-[75%]">
        <div className="">
          <img
            src="/images/bg-card-front.png"
            alt="The front of a debit card"
          />
          {/* details of the debit card */}
          <section className="absolute top-0 left-0 w-full px-6 py-3">
            {/* container for the details within */}
            {/* <div className=""> */}
            {/* two circles */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white"></div>
              <div className="w-3 h-3 border border-white rounded-full bg-transparent"></div>
            </div>
            {/* details */}
            <div className="mt-10">
              <p className="text-white text-[1.6rem]">
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
            {/* </div> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default CardBG;

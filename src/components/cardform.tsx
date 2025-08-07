import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cardSchema, type CardFormData } from "@/schema/schema";

// store
import { useCardStore } from "@/store/useCardStore";

//ui
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CardForm = () => {
  const { details, isSubmitted, setIsSubmitted, setDetails } = useCardStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CardFormData>({ resolver: zodResolver(cardSchema) });

  const onSubmit = async (data: CardFormData) => {
    setDetails(data);
    setIsSubmitted(true);
    alert("Successful");
    alert(JSON.stringify(data));
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="px-6 py-10 max-w-md mx-auto text-center space-y-6">
        <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg uppercase tracking-wide">Card Front</h2>
          <p className="text-xl font-mono mt-4">
            {details.cardnumber || "0000 0000 0000 0000"}
          </p>
          <div className="flex justify-between mt-4 text-sm">
            <span>{details.cardname || "JANE APPLESEED"}</span>
            <span>
              {details.month || "MM"}/{details.year || "YY"}
            </span>
          </div>
        </div>

        <div className="bg-gray-600 text-white p-4 rounded-xl shadow-md mt-4">
          <h2 className="text-sm">Card Back</h2>
          <p className="mt-2">CVC: {details.cvc || "000"}</p>
        </div>

        <Button className="w-full">Back to Edit</Button>
      </div>
    );
  }
  return (
    <div className="px-6 py-20">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Cardholder Name */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="cardname"
            className="uppercase text-primary font-medium"
          >
            Cardholder Name
          </label>
          <Input
            id="cardname"
            {...register("cardname")}
            type="text"
            placeholder="e.g. Jane Appleseed"
          />
          {errors.cardname && (
            <p className="text-red-500 text-sm">{errors.cardname.message}</p>
          )}
        </div>

        {/* Card Number */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="cardnumber"
            className="uppercase text-primary font-medium"
          >
            Card Number
          </label>
          <Input
            id="cardnumber"
            {...register("cardnumber")}
            type="text"
            inputMode="numeric"
            placeholder="e.g. 1234 5678 9123 0000"
          />
          {errors.cardnumber && (
            <p className="text-red-500 text-sm">{errors.cardnumber.message}</p>
          )}
        </div>

        {/* Expiry Date & CVC */}
        <fieldset className="grid grid-cols-2 gap-3">
          {/* Expiry */}
          <div className="flex flex-col gap-1">
            <label className="uppercase text-primary font-medium">
              Exp. Date (MM/YY)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <Input
                {...register("month")}
                type="text"
                inputMode="numeric"
                maxLength={2}
                placeholder="MM"
              />
              <Input
                {...register("year")}
                type="text"
                inputMode="numeric"
                maxLength={2}
                placeholder="YY"
              />
            </div>
            {(errors.month || errors.year) && (
              <p className="text-red-500 text-sm">
                {errors.month?.message || errors.year?.message}
              </p>
            )}
          </div>

          {/* CVC */}
          <div className="flex flex-col gap-1">
            <label htmlFor="cvc" className="uppercase text-primary font-medium">
              CVC
            </label>
            <Input
              id="cvc"
              {...register("cvc")}
              type="text"
              inputMode="numeric"
              maxLength={4}
              placeholder="e.g. 123"
            />
            {errors.cvc && (
              <p className="text-red-500 text-sm">{errors.cvc.message}</p>
            )}
          </div>
        </fieldset>

        <Button type="submit" className="w-full h-12 mt-10">
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default CardForm;

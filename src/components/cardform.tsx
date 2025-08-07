import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import { cardSchema, type CardFormData } from "@/schema/schema";

// store
import { useCardStore } from "@/store/useCardStore";

//ui
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CardForm = () => {
  const { setIsSubmitted, setDetails } = useCardStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CardFormData>({ resolver: zodResolver(cardSchema) });

  const onSubmit = async (data: CardFormData) => {
    // Show loading toast and save the toast ID
    const toastId = toast.loading("Submitting...");

    try {
      setDetails(data);
      // simulate async
      await new Promise((res) => setTimeout(res, 1000));

      setIsSubmitted(true);
      reset();

      // Replace loading toast with success message
      toast.update(toastId, {
        render: "Details Added Successfully",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
    } catch (err) {
      // In case of error
      toast.update(toastId, {
        render: err instanceof Error ? err.message : "Something went wrong",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center px-5 py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[350px] space-y-4"
      >
        {/* Cardholder Name */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="cardname"
            className="text-sm md:text-base uppercase text-primary font-medium"
          >
            Cardholder Name
          </label>
          <Input
            id="cardname"
            {...register("cardname")}
            type="text"
            maxLength={30}
            placeholder="e.g. Jane Appleseed"
            className="cursor-pointer"
          />
          {errors.cardname && (
            <p className="text-red-500 text-sm">{errors.cardname.message}</p>
          )}
        </div>

        {/* Card Number */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="cardnumber"
            className="text-sm md:text-base uppercase text-primary font-medium"
          >
            Card Number
          </label>
          <Input
            id="cardnumber"
            {...register("cardnumber")}
            type="text"
            inputMode="numeric"
            maxLength={16}
            minLength={16}
            placeholder="e.g. 1234 5678 9123 0000"
            className="cursor-pointer"
          />
          {errors.cardnumber && (
            <p className="text-red-500 text-sm">{errors.cardnumber.message}</p>
          )}
        </div>

        {/* Expiry Date & CVC */}
        <fieldset className="grid grid-cols-2 gap-2 lg:gap-3">
          {/* Expiry */}
          <div className="flex flex-col gap-1">
            <label className="text-sm md:text-base uppercase text-primary font-medium">
              Exp. Date (MM/YY)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <Input
                {...register("month")}
                type="text"
                inputMode="numeric"
                maxLength={2}
                placeholder="MM"
                className="cursor-pointer"
              />
              <Input
                {...register("year")}
                type="text"
                inputMode="numeric"
                maxLength={2}
                placeholder="YY"
                className="cursor-pointer"
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
            <label
              htmlFor="cvc"
              className="text-sm md:text-base uppercase text-primary font-medium"
            >
              CVC
            </label>
            <Input
              id="cvc"
              {...register("cvc")}
              type="text"
              inputMode="numeric"
              maxLength={3}
              placeholder="e.g. 123"
              className="cursor-pointer"
            />
            {errors.cvc && (
              <p className="text-red-500 text-sm">{errors.cvc.message}</p>
            )}
          </div>
        </fieldset>

        <Button
          type="submit"
          className="w-full h-12 mt-10"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Confirm"}
        </Button>
      </form>
    </div>
  );
};

export default CardForm;

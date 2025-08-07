import { create } from "zustand";

type CardDetails = {
  cardname: string;
  cardnumber: string;
  month: string;
  year: string;
  cvc: string;
};

type CardStore = {
  details: CardDetails;
  isSubmitted: boolean;
  setDetails: (data: CardDetails) => void;
  setIsSubmitted: (submitted: boolean) => void;
  reset: () => void;
};

export const useCardStore = create<CardStore>((set) => ({
  details: {
    cardname: "",
    cardnumber: "",
    month: "",
    year: "",
    cvc: "",
  },
  isSubmitted: false,
  setDetails: (data) => set({ details: data }),
  setIsSubmitted: (submitted) => set({ isSubmitted: submitted }),
  reset: () =>
    set({
      details: {
        cardname: "",
        cardnumber: "",
        month: "",
        year: "",
        cvc: "",
      },
    }),
}));

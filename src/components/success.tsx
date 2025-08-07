import { Button } from "./ui/button";

const Success = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-6 py-20">
      <img src="/images/icon-complete.svg" alt="" />
      <div className="space-y-2">
        <h4 className="text-center text-primary text-3xl font-bold">
          THANK YOU!
        </h4>

        <p className="text-gray-400">We've added your card details</p>
      </div>
      <Button className="w-full h-14 ">Continue</Button>
    </div>
  );
};

export default Success;

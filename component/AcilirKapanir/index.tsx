import { Disclosure } from "@headlessui/react";
import { ReactNode } from "react";

export const AcilirKapanir = ({
  title,
  desc,
}: {
  title: string;
  desc: ReactNode | string;
}) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="py-[12px] space-y-[8px] text-lg text-center">
          <Disclosure.Button className="py-2 text-mint text-center w-full flex justify-center items-start font-bold relative">
            {title}

            <div className="text-2xl text-white font-normal w-3 text-center absolute right-0 top-0">
              {open ? "-" : "+"}
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 font-medium text-white">
            {desc}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

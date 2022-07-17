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
        <div className="py-[12px] space-y-[8px] text-lg">
          <Disclosure.Button className="py-2 text-mint text-left w-full flex justify-between items-start font-bold">
            {title}

            <div className="text-2xl text-white font-normal">
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

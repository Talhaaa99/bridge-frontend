import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FC } from "react";
import { JsxElement } from "typescript";

const Dropdown = () => {
  return (
    <Menu as="div">
      <div>
        <Menu.Button className="w-full bg-[#F1F2F7] rounded-2xl flex justify-between items-center">
          <div className="inline-flex items-center gap-4">
            <img src="./poly.png"></img>
            <p>Polygon</p>
          </div>
          <ChevronDownIcon
            className="w-15.5 h-7 text-[#A0A5BA] font-black text-base leading-8"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Menu.Items>
        <Menu.Item>
          <div className="z-30 absolute w-full bg-[#F1F2F7] px-6 py-4 rounded-2xl flex justify-between items-center">
            <p>Polygon</p>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="z-30 absolute w-full bg-[#F1F2F7] px-6 py-4 rounded-2xl flex justify-between items-center">
            <p>Polygon</p>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="z-30 absolute w-full bg-[#F1F2F7] px-6 py-4 rounded-2xl flex justify-between items-center">
            <p>Polygon</p>
          </div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};
export default Dropdown;

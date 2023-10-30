import Image from "next/image";
import { ReactNode } from "react";
import { RiAddCircleFill } from "react-icons/ri";
const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className='max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      {children}
    </div>
  );
};

export default Card;

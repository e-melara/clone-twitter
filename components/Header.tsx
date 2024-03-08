import React, { useCallback } from "react";
import { useRouter } from "next/router";

import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();

  const handlerBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <header className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            color="white"
            onClick={handlerBack}
            className="cursor-pointer hover:opacity-70 transition "
            size={24}
          />
        )}
        <h1 className="text-white text-xl font-semibold">{label}</h1>
      </div>
    </header>
  );
};

export default Header;

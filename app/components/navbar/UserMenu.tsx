"use client";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useRentModal from "@/app/hooks/useRentModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

interface UserMenuProps {
  currentUser?: User;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [registerModal.isOpen, loginModal.isOpen]);

  const onRent = () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    return rentModal.onOpen();
  };

  return (
    <div className="relative">
      <div className=" flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
        {isOpen && (
          <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
            <div className="flex flex-col cursor-pointer">
              {currentUser ? (
                <>
                  <hr />
                  <MenuItem
                    onClick={() => {
                      router.push("/trips");
                      setIsOpen(false);
                    }}
                    label="My trips"
                  />
                  <hr />
                  <MenuItem
                    onClick={() => {
                      router.push("/reservations");
                      setIsOpen(false);
                    }}
                    label="My reservations"
                  />
                  <hr />
                  <MenuItem
                    onClick={() => {
                      router.push("/favorites");
                      setIsOpen(false);
                    }}
                    label="My favorites"
                  />
                  <hr />
                  <MenuItem
                    onClick={() => {
                      router.push("/properties");
                      setIsOpen(false);
                    }}
                    label="My properties"
                  />
                  <hr />
                  <MenuItem
                    onClick={() => {
                      signOut().catch(() => {});
                      setIsOpen(false);
                    }}
                    label="Logout"
                  />
                </>
              ) : (
                <>
                  <MenuItem onClick={loginModal.onOpen} label="Login" />
                  <MenuItem onClick={registerModal.onOpen} label="Sign up" />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;

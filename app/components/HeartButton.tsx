"use client";

import { User } from "@prisma/client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavorite from "../hooks/useFavorite";

interface HeartButtonProps {
  listingId: string;
  currentUser?: User | null;
}
function HeartButton({ listingId, currentUser }: HeartButtonProps) {
  const { toggleFavorite, hasFavorited } = useFavorite({
    listingId,
    currentUser,
  });
  return (
    <div
      className="relative hover:opacity-80 transition cursor-pointer"
      onClick={toggleFavorite}
    >
      <AiOutlineHeart
        className="fill-white absolute -top-[2px] -right-[2px]"
        size={28}
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
}

export default HeartButton;

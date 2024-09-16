import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-center">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="text-sm font-semibold px-6 sm:block hidden border-x-[1px]  text-center">
          Any Week
        </div>
        <div className="text-sm font-semibold px-6 pr-2 text-gray-600 flex flex-grow items-center gap-3">
          Add Guests
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

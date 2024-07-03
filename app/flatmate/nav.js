import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-200 p-4 grid grid-cols-3 items-center sm:px-6 md:px-24 lg:px-48">
  
        <div className="col-span-1 flex items-center justify-start sm:justify-center md:justify-start">
          <Link href="#">
            <span className="text-gray-800 cursor-pointer"> Back</span>
          </Link>
        </div>
        
        <Link href="/flatmate">
        <div className="col-span-1 flex justify-center">
          <div className="font-bold text-lg sm:text-xl text-gray-800">Flatmates</div>
        </div>
        </Link>
        <Link href="/flatmate">

        <div className="col-span-1 flex justify-end sm:justify-center md:justify-end">
          <button className="text-red-800 cursor-pointer">Close</button>
        </div>
        </Link>

      </nav>
    </>
  );
};

import BannerImg from "@/assets/banner.jpg";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="max-w-300 mx-auto flex justify-between items-center mt-10">
      <div className="space-y-4 ml-4 md:ml-0 mr-4 md:mr-0">
        <h1 className="font-bold text-3xl text-blue-400">Book Store</h1>
        <p className="font-medium text-[18px]">
          An online platform where users can browse, search, and <br /> borrow
          books digitally with ease and security.
        </p>
        <button className="btn">
          <Link href={"/all-books"}>Learn More</Link>
        </button>
      </div>
      <div>
        <Image
          src={BannerImg}
          width={500}
          height={500}
          alt=""
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Banner;

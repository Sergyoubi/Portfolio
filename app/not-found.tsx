import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="w-screen h-screen bg-slate-900 flex-center">
      <div className="w-[90%] h-[80%] flex-center flex-col gap-10">
        <p className="text-slate-300 font-bold text-7xl lg:text-8xl">Sorry!</p>
        <p className="font-bold text-3xl text-teal-300 text-center tracking-wide">
          The page you are trying to access does not exist
        </p>
        <Link href="/" className="primary-btn">
          Back home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

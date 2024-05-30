import LeftSideBar from "@/components/left-sidebar";

export default function Layout({ children }) {
  return (
    <>
      <div className="grid grid-cols-7 bg-[#F9F9F9]">
        <div className="col-span-1">
          <LeftSideBar />
        </div>

        <div className=" h-screen col-span-6">
          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
}

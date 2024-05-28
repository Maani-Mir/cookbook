import LeftSideBar from "@/components/left-sidebar";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex bg-[#F9F9F9]">
        <div className="flex-none ">
          <LeftSideBar />
        </div>

        <div className=" flex h-screen flex-col md:flex-row">
          <div className="flex-grow ">{children}</div>
        </div>
      </div>
    </>
  );
}

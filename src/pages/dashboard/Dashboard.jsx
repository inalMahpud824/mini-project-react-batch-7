import { WrapperDashboard } from "../../components/WrapperDashboard"

export const Dashboard = () => {
  return (
    <WrapperDashboard tabActive={"dashboard"}>
      <div className="min-h-screen p-5">
        <div className="bg-gradient-to-br from-primary to-neutral w-full min-h-[50vh] rounded-2xl flex justify-center flex-col px-3">
          <h1 className="lg:text-4xl text-3xl text-white font-bold">
            Selamat Datang di Dashboard{" "}
            <span className="heading-font text-primary">
              Green<span className="text-neutral">Insight</span>
            </span>
          </h1>
        </div>
      </div>
    </WrapperDashboard>
  );
}
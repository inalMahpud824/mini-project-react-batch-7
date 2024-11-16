import { WrapperDashboard } from "../../components/WrapperDashboard";

export const DashboardArticle = () => {
  return (
    <>
    <WrapperDashboard itemTabActive="article" tabActive={"konten"}>
      <div className="px-7 py-4 bg-white min-h-screen">
        <h1 className="text-2xl font-bold py-7">List Article</h1>
        <button className="btn btn-sm btn-neutral my-2 text-white">Add Article</button>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Create At</th>
              <th>Update at</th>
              <th className="rounded-tr-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>12</td>
              <td>13</td>
              <td><div className="flex gap-2">
                <button className="btn btn-sm bg-blue-600 text-white border-none">Edit</button>
                <button className="btn btn-sm bg-red-600 text-white border-none">Delete</button>
                </div></td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </WrapperDashboard>
    </>
  );
}
export const ModuleTable = ({
  rows,
}: {
  rows: { code: string; name: string }[];
}) => (
  <div className="overflow-x-auto rounded border border-gray-200">
    <table className="w-full text-sm text-left border-collapse">
      <thead>
        <tr className="bg-primary text-white">
          <th className="py-2 px-4 font-semibold w-28 border-r border-blue-400">
            Mã Module
          </th>
          <th className="py-2 px-4 font-semibold">Tên Module</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr
            key={i}
            className={`transition-colors duration-200 ${i % 2 === 0 ? "bg-white" : "bg-blue-50"}`}
          >
            <td className="py-2.5 px-4 font-semibold text-primary border-r border-gray-200">
              {r.code}
            </td>
            <td className="py-2.5 px-4 text-gray-700">{r.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

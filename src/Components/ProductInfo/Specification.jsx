export default function Specification() {
  const specifications = [
    { label: "Brand", value: "Apple" },
    { label: "Item Height", value: "18 Millimeters" },
    { label: "Item Width", value: "31.4 Centimeters" },
    { label: "Screen Size", value: "13 Inches" },
    { label: "Item Weight", value: "1.6 Kg" },
    { label: "Product Dimensions", value: "21.9 x 31.4 x 1.8 cm" },
    { label: "Item model number", value: "MF841HN/A" },
    { label: "Processor Brand", value: "Intel" },
    { label: "Processor Type", value: "Core i5" },
    { label: "Processor Speed", value: "2.9 GHz" },
    { label: "RAM Size", value: "8 GB" },
    { label: "Hard Drive Size", value: "512 GB" },
    { label: "Hard Disk Technology", value: "Solid State Drive" },
    { label: "Graphics Coprocessor", value: "Intel Integrated Graphics" },
    { label: "Graphics Card Description", value: "Integrated Graphics Card" },
    { label: "Hardware Platform", value: "Mac" },
    { label: "Operating System", value: "Mac OS" },
    { label: "Average Battery Life (in hours)", value: "9" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Technical Specifications</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="text-left font-semibold py-2">Feature</th>
            <th className="text-left font-semibold py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {specifications.map((spec, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="py-2 px-4">{spec.label}</td>
              <td className="py-2 px-4">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

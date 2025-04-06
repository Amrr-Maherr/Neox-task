export default function AuthTitle({title}) {
    return (
      <div className="my-5">
        <h2 className="text-xl md:text-2xl border-b-2 border-yellow-400 w-1/3 font-light text-gray-800">
         {title}
        </h2>
        <hr />
      </div>
    );
}
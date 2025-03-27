export default function ActiveMenu({ link }) {
  return (
    <>
      <div className="absolute top-full left-0 bg-white shadow-md rounded">
        {link.content}
      </div>
    </>
  );
}
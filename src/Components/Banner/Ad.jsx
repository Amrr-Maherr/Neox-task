import Image from "../../Assets/rachit-tank-2cFZ_FB08UM-unsplash.jpg";
export default function Ad() {
  return (
    <>
      <section
        className="h-[100px] md:h-[200px] w-[85%] mx-auto object-cover flex justify-start items-center px-10"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit:"contain"
        }}
      >
        <div className="flex items-center gap-10">
          <h3 className="text-sm md:text-4xl font-extralight">
            {" "}
            SHOP AND{" "}
            <span className="font-bold text-sm md:text-4xl">BIG SAVE</span> ON
            HOTTEST TABLETS
          </h3>
          <div className="bg-yellow-400 p-3 md:p-5 rounded-full text-base md:text-xl text-center">
            starting at
            <br />
            <span className="font-extrabold text-lg md:text-2xl">
              $79<sup>99</sup>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

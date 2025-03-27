import ProductColumn from "../AllCategories/ProductColumn";
import ImagOne from "../../Assets/360-camers.webp";
export default function LatestProducts() {
      const products = [
        {
          category: "Laptops, Laptops &",
          name: "Notebook Widescreen Y700-",
          price: "$1,299.00",
          imageUrl: ImagOne,
        },
        {
          category: "Laptops, Laptops &",
          name: 'Laptop WiFi CX61 2QF 15.6" 4210M',
          price: "$2,299.00",
          imageUrl: ImagOne,
        },
        {
          category: "Laptops, Laptops &",
          name: "Laptop Screener CX70 2QF-621XPL",
          price: "$2,399.00",
          imageUrl: ImagOne,
        },
        {
          category: "Computer Cases,",
          name: "Aerocool EN52377 Dead Silence",
          price: "$150.00",
          originalPrice: "$180.00",
          imageUrl: ImagOne,
        },
        {
          category: "Printers, Printers & Ink",
          name: "Full Color LaserJet Pro M452dn",
          price: "$1,050.00",
          imageUrl: ImagOne,
        },
        {
          category: "Cameras, Cameras &",
          name: "White NX Mini F1 SMART NX",
          price: "$559.00",
          imageUrl: ImagOne,
        },
      ];

      const firstColumn = products.slice(0, 3);
    return (
      <>
        <ProductColumn title="Featured Products" products={firstColumn} />
      </>
    );
}
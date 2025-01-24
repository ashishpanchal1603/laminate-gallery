import flexPDF from "../assets/pdf/FlexStone_Bricks_2023.pdf";
import centuryPly from "../assets/pdf/SASSY_FOLDER-1.pdf"
import DecoLiner from "../assets/pdf/CenturyLaminates-Deco-Liner-Booklet-2023-single-pager.pdf"
import deco from "../assets/linerpro.jpg"
import laminatelook from "../assets/laminatelook-Cover-size-400x600.jpg"
import Product from "../assets/product_brochure.jpg"
const pdfList = [
  {
    id: 1,
    name: "hello",
    image: deco,
    pdf: centuryPly,
  },
  {
    id: 2,
    name: "FlexStone Bricks",
    image: laminatelook,
    pdf: flexPDF,
  },
  {
    id:3,
    name :"DecoLiner",
    image:Product,
    pdf:DecoLiner
  }
];

export default pdfList;

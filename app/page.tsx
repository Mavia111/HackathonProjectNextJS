import Product_cat, { Product_Gallery } from "./components/carasoule";
import { Catelink, Dontmiss, Essent, Featured } from "./components/Featured";
import { Section1 } from "./components/Section1";

export default function Home() {
  return (
  <div>
   <Section1/>
   <Product_Gallery/>
   <Featured/>
   <Product_cat/>
   <Dontmiss/>
   <Essent/>
   <Catelink/>
  </div>
  );
}

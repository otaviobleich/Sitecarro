import CarItem from "./CarItem";

import img1 from "../img/carro1.jpg";
import img2 from "../img/carro2.jpg";
import img3 from "../img/carro3.jpg";
import img4 from "../img/carro4.jpg";

export default function CarGrid() {
  return (
    <section
      style={{
        flex: 2,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
      }}
    >
      <CarItem image={img1} />
      <CarItem image= {img2}/>
      <CarItem image= {img3} />
      <CarItem image= {img4} />
    </section>
  );
} 

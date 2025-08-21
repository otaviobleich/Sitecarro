import CarItem from "./CarItem";

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
      <CarItem image="https://source.unsplash.com/400x300/?car" />
      <CarItem image="https://source.unsplash.com/400x300/?sportscar" />
      <CarItem image="https://source.unsplash.com/400x300/?luxurycar" />
      <CarItem image="https://source.unsplash.com/400x300/?classiccar" />
    </section>
  );
}

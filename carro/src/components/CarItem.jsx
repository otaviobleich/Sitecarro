export default function CarItem({ image }) {
  return (
    <div
      style={{
        backgroundColor: "#7f6ad4ff",
        borderRadius: 8,
        minHeight: 160,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <img
        src={image}
        alt="Carro"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          border: "4px solid white", // borda média
          borderRadius: 8,
        }}
      />
    </div>
  );
}

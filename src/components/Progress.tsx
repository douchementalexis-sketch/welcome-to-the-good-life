export default function Progress() {
  const progress = 68;

  return (
    <div>
      <p
        style={{
          marginBottom: 15,
          fontWeight: "bold",
          color: "#355f4b",
        }}
      >
        🎯 Objectifs du jour
      </p>

      <div
        style={{
          height: "18px",
          background: "#e5ebe6",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#4d7b62",
            transition: ".4s",
          }}
        />
      </div>

      <h2
        style={{
          marginTop: 20,
          color: "#355f4b",
        }}
      >
        {progress} %
      </h2>

      <p
        style={{
          color: "#777",
        }}
      >
        Continue comme ça Rachel 🌸
      </p>
    </div>
  );
}
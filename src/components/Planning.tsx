import { planning } from "../data/planning";

export default function Planning() {
  const upcoming = planning.slice(1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {upcoming.map((session) => (
        <div
          key={session.id}
          style={{
            background: "#f9f9f9",
            borderRadius: 16,
            padding: "14px 18px",
            border: "1px solid #ececec",
            boxShadow: "0 3px 10px rgba(0,0,0,.04)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#4d7b62",
                fontSize: 16,
              }}
            >
              📅 {session.day}
            </h3>

            <span
              style={{
                color: "#888",
                fontSize: 13,
              }}
            >
              🕒 {session.hour}
            </span>
          </div>

          <p
            style={{
              margin: "0 0 8px 0",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            {session.title}
          </p>

          <span
            style={{
              color: "#777",
              fontSize: 13,
            }}
          >
            ⏱ {session.duration}
          </span>
        </div>
      ))}
    </div>
  );
}
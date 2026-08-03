import "../styles/Card.css";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <section className="card">
      <h3>{title}</h3>

      {children}
    </section>
  );
}
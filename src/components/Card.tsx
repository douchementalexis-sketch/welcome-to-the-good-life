import "./Card.css";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>

      {children}
    </div>
  );
}
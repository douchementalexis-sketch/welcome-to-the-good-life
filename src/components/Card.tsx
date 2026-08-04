import type { ReactNode } from "react";

import "../styles/Card.css";

type CardProps = {
  title: string;
  children: ReactNode;
};

export default function Card({
  title,
  children,
}: CardProps) {

  return (

    <section className="card">

      <h3>
        {title}
      </h3>

      {children}

    </section>

  );

}
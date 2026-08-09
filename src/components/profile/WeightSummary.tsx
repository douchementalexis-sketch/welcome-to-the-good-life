import {

  useMemo,

} from "react";

import type {

  Weight,

} from "../../types/Weight";

type Props = {

  weights: Weight[];

};

export default function WeightSummary({

  weights,

}: Props) {

  const lastWeight = useMemo(

    () =>

      [...weights]

        .sort(

          (a, b) =>

            new Date(

              b.created_at

            ).getTime()

            -

            new Date(

              a.created_at

            ).getTime()

        )[0],

    [weights]

  );

  return (

    <div className="evolutionGrid">

      <div className="evolutionBox">

        <span>

          ⚖️ Poids actuel

        </span>

        <strong>

          {

            lastWeight

              ?

              `${lastWeight.weight} kg`

              :

              "-- kg"

          }

        </strong>

      </div>

      <div className="evolutionBox">

        <span>

          🎯 Objectif

        </span>

        <strong>

          55 kg

        </strong>

      </div>

      <div className="evolutionBox">

        <span>

          📅 Dernière pesée

        </span>

        <strong>

          {

            lastWeight

              ?

              new Date(

                lastWeight.created_at

              ).toLocaleDateString(

                "fr-FR"

              )

              :

              "Aucune"

          }

        </strong>

      </div>

      <div className="evolutionBox">

        <span>

          📈 Total des pesées

        </span>

        <strong>

          {weights.length}

        </strong>

      </div>

    </div>

  );

}
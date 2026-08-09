import {

  ResponsiveContainer,

  LineChart,

  Line,

  XAxis,

  YAxis,

  CartesianGrid,

  Tooltip,

} from "recharts";

import {

  useMemo,

} from "react";

import type {

  Weight,

} from "../../types/Weight";

import "../../styles/WeightChart.css";

type Props = {

  weights: Weight[];

};

export default function WeightChart({

  weights,

}: Props) {

  const data = useMemo(

    () =>

      [...weights]

        .sort(

          (a, b) =>

            new Date(

              a.created_at

            ).getTime()

            -

            new Date(

              b.created_at

            ).getTime()

        )

        .map(

          (weight) => ({

            date:

              new Date(

                weight.created_at

              ).toLocaleDateString(

                "fr-FR",

                {

                  day: "2-digit",

                  month: "2-digit",

                }

              ),

            weight:

              weight.weight,

          })

        ),

    [weights]

  );

  if (

    data.length === 0

  ) {

    return (

      <div className="weightChartEmpty">

        Aucune pesée enregistrée.

      </div>

    );

  }

  return (

    <div className="weightChart">

      <ResponsiveContainer

        width="100%"

        height="100%"

      >

        <LineChart

          data={data}

          margin={{

            top: 20,

            right: 20,

            left: 0,

            bottom: 10,

          }}

        >

          <CartesianGrid

            strokeDasharray="3 3"

          />

          <XAxis

            dataKey="date"

          />

          <YAxis

            domain={["dataMin - 1", "dataMax + 1"]}

            tickFormatter={(value) => `${value} kg`}

          />

          <Tooltip

            formatter={(value) => [

              `${value} kg`,

              "Poids",

            ]}

            labelFormatter={(label) =>

              `Date : ${label}`

            }

          />

          <Line

            type="monotone"

            dataKey="weight"

            stroke="#2ecc71"

            strokeWidth={3}

            dot={{

              r: 5,

            }}

            activeDot={{

              r: 7,

            }}

            animationDuration={800}

            animationEasing="ease-in-out"

          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}
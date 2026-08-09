import {

  useState,

} from "react";

import type {

  Weight,

} from "../../types/Weight";

type Props = {

  weights: Weight[];

  updateWeight: (

    id:string,

    weight:number

  ) => Promise<void>;

  deleteWeight: (

    id:string

  ) => Promise<void>;

};

export default function WeightHistory({

  weights,

  updateWeight,

  deleteWeight,

}: Props) {

  const [

    editingId,

    setEditingId,

  ] = useState<string | null>(null);

  const [

    editingWeight,

    setEditingWeight,

  ] = useState("");

  const sortedWeights =

    [...weights].sort(

      (a,b)=>

        new Date(

          b.created_at

        ).getTime()

        -

        new Date(

          a.created_at

        ).getTime()

    );

  async function handleUpdateWeight(){

    if(

      !editingId

    ){

      return;

    }

    const value = Number(

      editingWeight

    );

    if(

      !value ||

      value <= 0

    ){

      return;

    }

    await updateWeight(

      editingId,

      value

    );

    setEditingId(null);

    setEditingWeight("");

  }

  async function handleDelete(

    id:string

  ){

    if(

      !window.confirm(

        "Supprimer cette pesée ?"

      )

    ){

      return;

    }

    await deleteWeight(id);

  }

  return (

    <>

      <hr className="profileSeparator" />

      <h3>

        📋 Historique des pesées

      </h3>

      <div className="weightHistory">        {

          sortedWeights.length === 0 && (

            <p>

              Aucune pesée enregistrée.

            </p>

          )

        }

        {

          sortedWeights.map(

            (weight)=>(

              <div

                key={weight.id}

                className="weightRow"

              >

                {

                  editingId===weight.id

                  ?

                  <>

                    <input

                      type="number"

                      step="0.1"

                      value={editingWeight}

                      onChange={(e)=>

                        setEditingWeight(

                          e.target.value

                        )

                      }

                      className="profileInput"

                    />

                    <button

                      className="profileButton"

                      onClick={handleUpdateWeight}

                    >

                      💾 Sauvegarder

                    </button>

                    <button

                      className="profileButton"

                      onClick={()=>{

                        setEditingId(null);

                        setEditingWeight("");

                      }}

                    >

                      ❌ Annuler

                    </button>

                  </>

                  :

                  <>

                    <div

                      className="weightInfo"

                    >

                      <strong>

                        {weight.weight} kg

                      </strong>

                      <span>

                        {

                          new Date(

                            weight.created_at

                          ).toLocaleDateString(

                            "fr-FR"

                          )

                        }

                      </span>

                    </div>

                    <div

                      className="weightActions"

                    >

                      <button

                        className="profileButton"

                        onClick={()=>{

                          setEditingId(

                            weight.id

                          );

                          setEditingWeight(

                            String(

                              weight.weight

                            )

                          );

                        }}

                      >

                        ✏️ Modifier

                      </button>

                      <button

                        className="profileButton"

                        onClick={()=>

                          handleDelete(

                            weight.id

                          )

                        }

                      >

                        🗑 Supprimer

                      </button>

                    </div>

                  </>

                }

              </div>

            )

          )

        }      </div>

    </>

  );

}
import {

  useState,

} from "react";

type Props = {

  addWeight: (

    weight:number

  ) => Promise<void>;

};

export default function WeightInput({

  addWeight,

}: Props) {

  const [

    newWeight,

    setNewWeight,

  ] = useState("");

  async function handleAddWeight(){

    const value = Number(

      newWeight

    );

    if(

      !value ||

      value <= 0

    ){

      return;

    }

    await addWeight(

      value

    );

    setNewWeight("");

  }

  return (

    <>

      <input

        type="number"

        step="0.1"

        placeholder="Entrer votre poids"

        value={newWeight}

        onChange={(e)=>

          setNewWeight(

            e.target.value

          )

        }

        className="profileInput"

      />

      <button

        className="profileButton"

        onClick={handleAddWeight}

      >

        ⚖️ Ajouter une pesée

      </button>

    </>

  );

}
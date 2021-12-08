import React, {useState} from "react";
import {initFieldModel} from "../../shared/utils/initFieldModel";

const INITIAL_FIELD_MODEL = initFieldModel()

const PlayingField = () => {
  const [fieldModel, setFieldModel] = useState(INITIAL_FIELD_MODEL)

  console.log(fieldModel)

  return <div>Playing field</div>
}

export default PlayingField
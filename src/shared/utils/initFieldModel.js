export const initFieldModel = () => {
  const fieldModel = []
  for (let col = 0; col < 7; col++) {
    const newColumn = []
    for (let row = 0; row < 6; row++) {
      newColumn.push(0)
    }
    fieldModel.push(newColumn)
  }
  return fieldModel
}

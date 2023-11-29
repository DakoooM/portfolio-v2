// import { v4 as uuidv4 } from "uuid";

export const InputWithLabel = ({ 
  pattern = undefined,
  type = "text",
  label = "label",
  register = () => undefined,
  uniqueId = "test_1",
  required = false,
  placeholder = "Entrez l'informations",
  onChange = () => undefined
}) => {
  return (
    <div className="InputWithLabel">
      <input type={type} pattern={pattern} required={required} {...register(uniqueId)} name={uniqueId} id={uniqueId} placeholder={placeholder} onChange={e => onChange(e)} className="input"/>
      <label htmlFor={uniqueId} className="label">{label}</label>
    </div>
  )
}

export const TextAreaWithLabel = ({ 
  type = "text",
  label = "label",
  register = () => undefined,
  required = false,
  uniqueId = "area_id",
  placeholder = "Entrez l'informations",
  onChange = () => undefined
}) => {
  return (
    <div className="TextAreaWithLabel">
      <textarea type={type} required={required} {...register(uniqueId)} name={uniqueId} rows={5} id={uniqueId} placeholder={placeholder} onChange={e => onChange(e)} className="area"/>
      <label htmlFor={uniqueId} className="label">{label}</label>
    </div>
  )
}
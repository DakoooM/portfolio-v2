// import { v4 as uuidv4 } from "uuid";

export const InputWithLabel = ({ 
  pattern = undefined,
  type = "text",
  label = "label",
  register = () => undefined,
  uniqueId = "test_1",
  required = false,
  maxWidth = 280,
  value = undefined,
  placeholder = "Entrez l'informations",
  onChange = () => undefined
}) => {
  return (
    <div className="InputWithLabel" style={{ width: maxWidth }}>
      <input 
        type={type} 
        pattern={pattern} 
        required={required} 
        {...register(uniqueId)} 
        name={uniqueId} 
        id={uniqueId} 
        value={value}
        placeholder={placeholder} 
        onChange={e => onChange(e)} 
        className="input"
      />

      <label htmlFor={uniqueId} className="label">{label}</label>
    </div>
  )
}

export const TextAreaWithLabel = ({ 
  type = "text",
  label = "label",
  register = () => undefined,
  required = false,
  maxWidth = "100%",
  rows = 5,
  minLength = undefined,
  uniqueId = "area_id",
  placeholder = "Entrez l'informations",
  onChange = () => undefined
}) => {
  return (
    <div className="TextAreaWithLabel" style={{ width: maxWidth }}>
      <textarea 
        type={type} 
        required={required} 
        minLength={minLength} 
        {...register(uniqueId)} 
        name={uniqueId} 
        rows={rows} 
        id={uniqueId} 
        placeholder={placeholder} 
        onChange={e => onChange(e)} 
        className="area"
      />
      <label htmlFor={uniqueId} className="label">{label}</label>
    </div>
  )
}
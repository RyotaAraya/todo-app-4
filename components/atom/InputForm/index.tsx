type Props = {
    value: string
    placeholder: string
    handleChange: (e: any) => void
}
export const InputForm = ({ value, placeholder, handleChange }: Props) => {
    return <input value={value} placeholder={placeholder} onChange={(e) => handleChange(e)} />
}

type Props = {
    value: string
    disabled: boolean
    placeholder?: string
    onChange?: (e: any) => void
}
export const InputForm = ({ value, disabled = true, placeholder, onChange }: Props) => {
    return <input value={value} disabled={disabled} placeholder={placeholder} onChange={onChange} />
}

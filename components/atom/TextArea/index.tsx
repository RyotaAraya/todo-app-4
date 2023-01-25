type Props = {
    value: string
    disabled: boolean
    onChange?: (e: any) => void
}
export const TextArea = ({ value, disabled = false, onChange }: Props) => {
    return <textarea value={value} disabled={disabled} onChange={onChange} />
}

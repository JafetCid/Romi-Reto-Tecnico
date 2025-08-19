import React from 'react'

type propsCheckbox = {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export default function Checkbox({ label, checked, onChange }: propsCheckbox) {
    return (
        <div className="flex gap-2 items-center">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="h-4 w-4 accent-blue-500 cursor-pointer"
            />
            <label>{label}</label>
        </div>
    )
}

import React from 'react'

type propsInput = {
    style?: string;
    label: string;
    type: string;
    value: string;
    error?: string;
    onChange: (value: string) => void;
}

export default function Input({ style, label, type, value, error, onChange }: propsInput) {
    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`${style} mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none py-1 px-3 border`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}

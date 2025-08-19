import React from 'react'

type propsTextarea = {
    label: string;
    rows: number;
    error?: string;
    value: string;
    onChange: (value: string) => void;
}

export default function Textarea({ label, rows, error, value, onChange }:propsTextarea) {
    return (

        <>
            <label>{label}</label>
            <textarea
                rows={rows}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none py-2 px-3 border"
            ></textarea>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>

    )
}

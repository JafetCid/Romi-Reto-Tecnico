import React from 'react'

type propsButton = {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text, onClick }: propsButton) {
    return (
        <div className="flex justify-center">
            <button className="bg-blue-600 p-2 w-full text-white rounded-lg cursor-pointer" onClick={onClick}>{text}</button>
        </div>
    )
}

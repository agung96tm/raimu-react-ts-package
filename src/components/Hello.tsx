import React from "react";

interface IHelloProps {
    children?: React.ReactNode
}

const Hello = ({ children }: IHelloProps) => {
    return (
        <div>
            <h1>Hello World</h1>
            <div>{children}</div>
        </div>
    )
}

export default Hello;
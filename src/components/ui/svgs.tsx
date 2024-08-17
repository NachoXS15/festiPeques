import { HTMLAttributes } from "react";
type SVGProps = HTMLAttributes<SVGElement>;


export function ArrowBack(props: SVGProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#fff" width={72} height={72} {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    )
}
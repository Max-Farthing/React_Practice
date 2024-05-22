import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export function useAccordianItemContext() {
    const ctx = useContext(AccordionItemContext);

    if(!ctx) {
        throw new Error('Accordian-Item related components must be wrapped');
    }

    return ctx;
}

export default function AccordionItem({ id, children, className }) {
    return (
        <AccordionItemContext.Provider value={id}>
            <li className={className}>
                {children}
            </li>
        </AccordionItemContext.Provider>
    );
}
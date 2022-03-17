import {createElement, FunctionComponent, h, VNode} from "preact";
import JSX = createElement.JSX;


interface Props {
    href: string
    label: VNode | string
}

export const ExternalLink: FunctionComponent<Props> = ({href,label}) => {
    return (
        <a href={href} target={"_blank"} rel={"noopener"}>{label}</a>
    )
}
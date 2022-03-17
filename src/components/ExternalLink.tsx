import React, {FunctionComponent, ReactChild} from "react";

interface Props {
    href: string
    label: ReactChild
}

export const ExternalLink: FunctionComponent<Props> = ({href,label}) => {
    return (
        <a href={href} target={"_blank"} rel={"noopener"}>{label}</a>
    )
}
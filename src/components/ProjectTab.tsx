import {createElement, FunctionComponent, VNode} from "preact";
import {Container, Tabs} from "@mantine/core";


interface Props {
    label: string
    content: VNode
}

export const ProjectTab: FunctionComponent<Props> = ({label,content}) => {
    return (
        <Tabs.Tab label={label}><Container sx={{
            paddingBottom: "16px"
        }}>{content}</Container></Tabs.Tab>
    )
}
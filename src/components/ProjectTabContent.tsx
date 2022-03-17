import React, {FunctionComponent, ReactChild} from "react";
import {Chip, Container, Group, Image, Tab, Tabs} from "@mantine/core";
import {Api, Book, BrandGithub, BrandGitlab, BrandGooglePlay, BrandTwitter} from "tabler-icons-react";
import {ExternalLink} from "./ExternalLink";
import FDroidIcon from "../resources/f-droid.png"
import GoogPlayIcon from "../resources/google-play.png"

interface Props {
    title: string
    description: string
    techStack: string []
    screenshot: string
    url?: string
    github?: string
    gitlab?: string
    googlePlay?: string
    fDroid?: string
    api?: string
    documentation?: string
    twitter?: string
}

export const ProjectTabContent: FunctionComponent<Props> = ({
                                                                title,
                                                                description,
                                                                techStack,
                                                                screenshot,
                                                                url,
                                                                github,
                                                                gitlab,
                                                                googlePlay,
                                                                fDroid,
                                                                api,
                                                                documentation,
                                                                twitter,
                                                            }) => {
    return (
        <Container sx={{
            paddingBottom: "16px"
        }}>
            <h3>{title}</h3>
            <p>
                {description}
            </p>
            <h3>Tech stack</h3>
            <Group spacing={"xs"}>{techStack.map(tag => <Chip checked={false} key={tag}>{tag}</Chip>)}</Group>
            <h3>Check it out</h3>
            <Group>
                {url && <ExternalLink
                    href={url}
                    label={url}
                />}
                {googlePlay && <ExternalLink
                    href={googlePlay}
                    label={<Image src={GoogPlayIcon} width={200} color={"white"}/>}
                />}
                {fDroid && <ExternalLink
                    href={fDroid}
                    label={<Image src={FDroidIcon} width={200} color={"white"}/>}
                />}
                {github && <ExternalLink
                    href={github}
                    label={<BrandGithub size={24} color={"white"}/>}
                />}
                {gitlab && <ExternalLink
                    href={gitlab}
                    label={<BrandGitlab size={24} color={"white"}/>}
                />}
                {documentation && <ExternalLink
                    href={documentation}
                    label={<Book size={24} color={"white"}/>}
                />}
                {twitter && <ExternalLink
                    href={twitter}
                    label={<BrandTwitter size={24} color={"white"}/>}
                />}
                {api && <ExternalLink
                    href={api}
                    label={<Api size={24} color={"white"}/>}
                />}
            </Group>
            <Image src={screenshot} width={"100%"} mt={24}/>
        </Container>
    )
}
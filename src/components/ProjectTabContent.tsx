import React, {FunctionComponent} from "react";
import {Chip, Container, Group, Image} from "@mantine/core";
import {Api, Book, BrandGithub, BrandGitlab, BrandTwitter} from "tabler-icons-react";
import {ExternalLink} from "./ExternalLink";

interface Props {
    title: string
    description: string
    techStack: Record<string, string>
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
            paddingBottom: "16px",
            textAlign: "left"
        }}>
            <h3>{title}</h3>
            <p>
                {description}
            </p>
            <h3>Tech stack</h3>
            <Chip.Group spacing={"xs"}>{
                Object.entries(techStack).map(([name, url]) =>
                    <Chip
                        checked={false}
                        key={name}
                        color={"#673ab8"}
                        sx={{
                            a: {
                                textDecoration: "none"
                            },
                        }}
                        onClick={() => window.open(url)}
                    >{name}</Chip>
                )
            }</Chip.Group>
            <h3>Check it out</h3>
            <Group mb={24}>
                {url && <ExternalLink
                    href={url}
                    label={url}
                />}
                {googlePlay && <ExternalLink
                    href={googlePlay}
                    label={<Image src={"/icons/google-play.png"} width={200} color={"white"}/>}
                />}
                {fDroid && <ExternalLink
                    href={fDroid}
                    label={<Image src={"/icons/f-droid.png"} width={200} color={"white"}/>}
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
            <Image src={screenshot} width={"100%"} alt={`${title} screenshot`} radius={"md"}/>
        </Container>
    )
}

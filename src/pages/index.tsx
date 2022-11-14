import {Center, Container, Group, Image, Tabs} from "@mantine/core";
import {BrandGithub, BrandLinkedin, BrandTwitter, BrandYoutube, CurrencyBitcoin, Mail} from "tabler-icons-react";
import {ExternalLink} from "../components/ExternalLink";
import {ProjectTabContent} from "../components/ProjectTabContent";
import React from "react";
import {useViewportSize} from "@mantine/hooks";

export default function Index() {
    const {width} = useViewportSize();
    return (
        <>
            <h1>Julius Henke</h1>
            <p>Building apps for work and fun!</p>
            <Center><Group>
                <ExternalLink href={"https://github.com/JuliusHenke"}
                              label={<BrandGithub size={24} color={"white"}/>}/>
                <ExternalLink href={"https://twitter.com/Julius_Henke"}
                              label={<BrandTwitter size={24} color={"white"}/>}/>
                <ExternalLink href={"https://www.youtube.com/channel/UCbg7puqKKCvH_fYMPvUjhYA"}
                              label={<BrandYoutube size={24} color={"white"}/>}/>
                <ExternalLink href={"https://www.linkedin.com/in/juliushenke"}
                              label={<BrandLinkedin size={24} color={"white"}/>}/>
                <ExternalLink href={"mailto:mail@juliushenke.com"}
                              label={<Mail size={24} color={"white"}/>}/>
                <ExternalLink href={"https://tippin.me/@Julius_Henke"}
                              label={<CurrencyBitcoin size={24} color={"white"}/>}/>
            </Group></Center>
            <h2>Projects I worked on</h2>
            <Container>
                <Tabs color={"white"} defaultValue={"tormap"}>
                    <Tabs.List grow={width > 1050} styles={{
                        tab: {
                            "&:hover": {
                                backgroundColor: "white"
                            }
                        },
                        '&:hover': {
                            backgroundColor: "#FFF",
                        },
                    }}>
                        <Tabs.Tab value={"tormap"}
                                  icon={<Image src={"/icons/tormap.png"} width={24}/>} styles={{
                                      root: {
                                          backgroundColor: "#FFF",
                                          '&:hover': {
                                              backgroundColor: "#FFF",
                                          },
                                      },
                                      tab: {
                                          "&:hover": {
                                              backgroundColor: "white"
                                          }
                                      },
                                    '&:hover': {
                                        backgroundColor: "#FFF",
                                    },
                        }}>TorMap</Tabs.Tab>
                        <Tabs.Tab value="lightningpuzzle" icon={<Image src={"/icons/lightningpuzzle.png"} width={24}/>}>Lightning
                            Puzzle</Tabs.Tab>
                        <Tabs.Tab value="kalkulierbar"
                                  icon={<Image src={"/icons/kalkulierbar.png"} width={24}/>}>KalkulierbaR</Tabs.Tab>
                        <Tabs.Tab value="smart-timetable" icon={<Image src={"/icons/smart-timetable.png"} width={24}/>}>Smart
                            Timetable</Tabs.Tab>
                        <Tabs.Tab value="tintok" icon={<Image src={"/icons/tintok.png"} width={24}/>}>TinTok</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value={"tormap"}>
                        <ProjectTabContent
                            title={"TorMap"}
                            description={`
                                    The Tor network currently consists of thousands of relays which route anonymous internet
                                    traffic
                                    daily. TorMap is a world map displaying approximate locations where Tor relays are being
                                    hosted.
                                    With our app you can group, filter and analyze Tor relays. The historic state of the
                                    network can
                                    be viewed for any day between October 2007 and today.
                                `}
                            techStack={{
                                "TypeScript": "https://www.typescriptlang.org/",
                                "React": "https://reactjs.org/",
                                "MUI": "https://mui.com/",
                                "Leaflet": "https://leafletjs.com/",
                                "Kotlin": "https://kotlinlang.org/",
                                "Spring Boot": "https://spring.io/projects/spring-boot",
                                "H2": "https://www.h2database.com/",
                            }}
                            screenshot={"/screenshots/tormap.png"}
                            url={"https://tormap.org"}
                            github={"https://github.com/TorMap/tormap"}
                            api={"https://api.tormap.org"}
                            twitter={"https://twitter.com/TorMapOrg"}
                        />
                    </Tabs.Panel>
                    <Tabs.Panel value={"lightningpuzzle"}>
                        <ProjectTabContent
                            title={"Lightning Puzzle"}
                            description={`
                                    Lightning Puzzle is a community platform for puzzles. Anybody can create a challenging
                                    puzzle or
                                    try to solve the 90+ existing user puzzles. There are also competitions which you can take
                                    part
                                    in with Bitcoin payments.
                                `}
                            techStack={{
                                "PHP": "https://www.php.net/",
                                "Code Igniter": "https://codeigniter.com/",
                                "MySQL": "https://www.mysql.com/",
                                "Bootstrap": "https://getbootstrap.com/",
                                "jQuery": "https://jquery.com/",
                            }}
                            screenshot={"/screenshots/lightningpuzzle.png"}
                            url={"https://lightningpuzzle.com"}
                            twitter={"https://twitter.com/lightningpuzzle"}
                        />
                    </Tabs.Panel>
                    <Tabs.Panel value={"kalkulierbar"}>
                        <ProjectTabContent
                            title={"KalkulierbaR"}
                            description={`
                                    KalkulierbaR is a web app for doing logical calculi proofs. It is intended as an education
                                    app
                                    for IT students. We developed it in a team of 5 students.
                                `}
                            techStack={{
                                "TypeScript": "https://www.typescriptlang.org/",
                                "Preact": "https://preactjs.com/",
                                "Sass": "https://sass-lang.com/",
                                "Kotlin": "https://kotlinlang.org/",
                                "Javalin": "https://javalin.io/",
                            }}
                            screenshot={"/screenshots/kalkulierbar.png"}
                            url={"https://kbar.app"}
                            api={"https://api.kbar.app"}
                            github={"https://github.com/KalkulierbaR/kalkulierbar"}
                        />
                    </Tabs.Panel>
                    <Tabs.Panel value={"smart-timetable"}>
                        <ProjectTabContent
                            title={"Smart Timetable"}
                            description={`
                                    Smart Timetable is a small Android app I developed in my school time. My school timetable
                                    rotated every week and I did not immediately find any app that supported this feature.
                                    So I
                                    took this challenge to code my own app, which was a great learning experience.
                                `}
                            techStack={{
                                "Kotlin": "https://kotlinlang.org/",
                            }}
                            screenshot={"/screenshots/smart-timetable.png"}
                            github={"https://github.com/JuliusHenke/Timetable-App"}
                            googlePlay={"https://play.google.com/store/apps/details?id=juliushenke.smarttt"}
                            fDroid={"https://f-droid.org/packages/juliushenke.smarttt/"}
                        />
                    </Tabs.Panel>
                    <Tabs.Panel value={"tintok"}>
                        <ProjectTabContent
                            title={"TinTok"}
                            description={`
                                    TinTok is an Android app which helps you connect with you local community. You can post
                                    text / images / videos and like / dislike content others in your area are posting. The algorithm
                                    then
                                    automatically creates matches with other people, based on your likes. We developed this
                                    app in a team of 5 students.
                                `}
                            techStack={{
                                "Kotlin": "https://kotlinlang.org/",
                                "Material Design": "https://material.io/design",
                                "Spring Boot": "https://spring.io/projects/spring-boot",
                                "Neo4j": "https://neo4j.com/",
                            }}
                            screenshot={"/screenshots/tintok.png"}
                            gitlab={"https://gitlab.com/tintok"}
                            api={"https://tintok.gitlab.io/openapi/"}
                            documentation={"https://gitlab.com/tintok/openapi/-/blob/master/Documentation.pdf"}
                        />
                    </Tabs.Panel>
                </Tabs>
            </Container>
        </>
    )
}

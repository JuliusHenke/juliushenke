import {AppShell, Center, Container, Group, Image, MantineProvider, Tabs} from "@mantine/core";
import {
    BrandGithub,
    BrandGitlab,
    BrandInstagram,
    BrandTwitter,
    BrandYoutube,
    CurrencyBitcoin,
    Mail
} from "tabler-icons-react";
import KalkulierbarIcon from "./resources/icons/kalkulierbar.png"
import TorMapIcon from "./resources/icons/tormap.png"
import LightningPuzzleIcon from "./resources/icons/lightningpuzzle.png"
import SmartTimetableIcon from "./resources/icons/smart-timetable.png"
import TinTokIcon from "./resources/icons/tintok.png"
import TorMapScreenshot from "./resources/screenshots/tormap-screenshot.png"
import KalkulierbarScreenshot from "./resources/screenshots/kalkulierbar-screenshot.png"
import LighningPuzzleScreenshot from "./resources/screenshots/lightningpuzzle-screenshot.png"
import TinTokScreenshot from "./resources/screenshots/tintok-screenshot.png"
import SmartTimetableScreenshot from "./resources/screenshots/smart-timetable-screenshot.png"
import {ExternalLink} from "./components/ExternalLink";
import StyledTabs from "./components/StyledTabs";
import {ProjectTabContent} from "./components/ProjectTabContent";
import React from "react";

export default function App() {
    return (
        <MantineProvider theme={{
            colorScheme: 'dark',
        }}>
            <AppShell sx={{
                textAlign: "center",
                color: "#fff",
                fontSize: "1.5em",
                paddingBottom: "16px"
            }}>
                <h1>Julius Henke</h1>
                <p>Building apps for work and fun!</p>
                <Center><Group>
                    <ExternalLink href={"https://github.com/JuliusHenke"}
                                  label={<BrandGithub size={24} color={"white"}/>}/>
                    <ExternalLink href={"https://gitlab.com/JuliusHenke"}
                                  label={<BrandGitlab size={24} color={"white"}/>}/>
                    <ExternalLink href={"https://twitter.com/Julius_Henke"}
                                  label={<BrandTwitter size={24} color={"white"}/>}/>
                    <ExternalLink href={"https://www.youtube.com/channel/UCbg7puqKKCvH_fYMPvUjhYA"}
                                  label={<BrandYoutube size={24} color={"white"}/>}/>
                    <ExternalLink href={"https://www.instagram.com/juliushenke/"}
                                  label={<BrandInstagram size={24} color={"white"}/>}/>
                    <ExternalLink href={"mailto:mail@juliushenke.com"}
                                  label={<Mail size={24} color={"white"}/>}/>
                    <ExternalLink href={"https://tippin.me/@Julius_Henke"}
                                  label={<CurrencyBitcoin size={24} color={"white"}/>}/>
                </Group></Center>
                <h2>Projects I worked on</h2>
                <Container>
                    <StyledTabs color={"white"} sx={{
                        color: "white",
                        backgroundColor: "#2b2238",
                        textAlign: "left",
                        fontSize: "0.8em",
                    }}>
                        <Tabs.Tab label={"TorMap"} icon={<Image src={TorMapIcon} width={24}/>}>
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
                                techStack={[
                                    "TypeScript",
                                    "React",
                                    "MUI",
                                    "Leaflet",
                                    "Kotlin",
                                    "Spring Boot",
                                    "H2",
                                ]}
                                screenshot={TorMapScreenshot}
                                url={"https://tormap.org"}
                                github={"https://github.com/TorMap/tormap"}
                                api={"https://api.tormap.org"}
                                twitter={"https://twitter.com/TorMapOrg"}
                            />
                        </Tabs.Tab>
                        <Tabs.Tab label="Lightning Puzzle" icon={<Image src={LightningPuzzleIcon} width={24}/>}>
                            <ProjectTabContent
                                title={"Lightning Puzzle"}
                                description={`
                                    Lightning Puzzle is a community platform for puzzles. Anybody can create a challenging
                                    puzzle or
                                    try to solve the 90+ existing user puzzles. There are also competitions which you can take
                                    part
                                    in with Bitcoin payments.
                                `}
                                techStack={[
                                    "PHP",
                                    "Code Igniter",
                                    "MySQL",
                                    "Bootstrap",
                                    "jQuery",
                                ]}
                                screenshot={LighningPuzzleScreenshot}
                                url={"https://lightningpuzzle.com"}
                                twitter={"https://twitter.com/lightningpuzzle"}
                            />
                        </Tabs.Tab>
                        <Tabs.Tab label="KalkulierbaR" icon={<Image src={KalkulierbarIcon} width={24}/>}>
                            <ProjectTabContent
                                title={"KalkulierbaR"}
                                description={`
                                    KalkulierbaR is a web app for doing logical calculi proofs. It is intended as an education
                                    app
                                    for IT students. We developed it in a team of 5 students.
                                `}
                                techStack={[
                                    "TypeScript",
                                    "Preact",
                                    "Sass",
                                    "Kotlin",
                                    "Javalin",
                                ]}
                                screenshot={KalkulierbarScreenshot}
                                url={"https://kbar.app"}
                                api={"https://api.kbar.app"}
                                github={"https://github.com/KalkulierbaR/kalkulierbar"}
                            />
                        </Tabs.Tab>
                        <Tabs.Tab label="Smart Timetable" icon={<Image src={SmartTimetableIcon} width={24}/>}>
                            <ProjectTabContent
                                title={"Smart Timetable"}
                                description={`
                                    Smart Timetable is a small Android app I developed in my school time. My school timetable
                                    rotated every week and I did not immediately find any app that supported this feature.
                                    So I
                                    took this challenge to code my own app, which was a great learning experience.
                                `}
                                techStack={[
                                    "Kotlin",
                                ]}
                                screenshot={SmartTimetableScreenshot}
                                github={"https://github.com/JuliusHenke/Timetable-App"}
                                googlePlay={"https://play.google.com/store/apps/details?id=juliushenke.smarttt"}
                                fDroid={"https://f-droid.org/packages/juliushenke.smarttt/"}
                            />
                        </Tabs.Tab>
                        <Tabs.Tab label="TinTok" icon={<Image src={TinTokIcon} width={24}/>}>
                            <ProjectTabContent
                                title={"TinTok"}
                                description={`
                                    TinTok is an Android app which helps you connect with you local community. You can post
                                    text / images / videos and like / dislike content others in your area are posting. The algorithm
                                    then
                                    automatically creates matches with other people, based on your likes. We developed this
                                    app in a team of 5 students.
                                `}
                                techStack={[
                                    "Kotlin",
                                    "Material Design",
                                    "Spring Boot",
                                    "Neo4j",
                                ]}
                                screenshot={TinTokScreenshot}
                                gitlab={"https://gitlab.com/tintok"}
                                api={"https://tintok.gitlab.io/openapi/"}
                                documentation={"https://gitlab.com/tintok/openapi/-/blob/master/Documentation.pdf"}
                            />
                        </Tabs.Tab>
                    </StyledTabs>
                </Container>
            </AppShell>
        </MantineProvider>
    )
}

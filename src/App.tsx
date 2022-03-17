import {ActionIcon, AppShell, Container, Grid, Image, MantineProvider, SimpleGrid, Tab, Tabs} from "@mantine/core";
import {ArrowUp, BrandGithub, BrandTwitter, BrandYoutube, Globe, Mail} from "tabler-icons-react";
import {ExternalLink} from "./components/ExternalLink";
import {h} from "preact";
import KalkulierbarIcon from "./resources/kalkulierbar.png"
import TorMapIcon from "./resources/tormap.png"
import LightningPuzzleIcon from "./resources/lightningpuzzle.png"
import SmartTimetableIcon from "./resources/smart-timetable.png"
import TinTokIcon from "./resources/tintok.png"
import TorMapScreenshot from "./resources/tormap-screenshot.png"

export function App() {
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
                <Container sx={{
                    width: "200px"
                }}><SimpleGrid cols={4}>
                    <ExternalLink href={"https://github.com/JuliusHenke"}
                                  label={<BrandGithub size={24} color={"white"}/>}/>
                    <ExternalLink href={"https://twitter.com/Julius_Henke"}
                                  label={<BrandTwitter size={24} color={"white"}/>}/>
                    <ExternalLink href={"https://www.youtube.com/channel/UCbg7puqKKCvH_fYMPvUjhYA"}
                                  label={<BrandYoutube size={24} color={"white"}/>}/>
                    <ExternalLink href={"mailto:mail@juliushenke.com"}
                                  label={<Mail size={24} color={"white"}/>}/>
                </SimpleGrid></Container>
                <h2>Projects I worked on</h2>
                <Container>
                    <Tabs color={"white"} sx={{
                        color: "white",
                        backgroundColor: "#2b2238",
                        textAlign: "left",
                        fontSize: "0.6em",
                    }}>
                        <Tab label="TorMap" icon={<Image src={TorMapIcon} width={24}/>}><Container sx={{
                            paddingBottom: "16px"
                        }}>
                            <p>The Tor network currently consists of thousands of relays which route anonymous internet
                                traffic
                                daily. TorMap is a world map displaying approximate locations where Tor relays are being
                                hosted.
                                With our app you can group, filter and analyze Tor relays. The historic state of the
                                network can
                                be viewed for any day between October 2007 and today.
                            </p>

                            <SimpleGrid cols={2}>
                                <Image src={TorMapScreenshot} width={"100%"}/>
                                <div>
                                    <h3>Check out TorMap</h3>
                                    <ExternalLink href={"https://github.com/TorMap/tormap"}
                                                  label={<BrandGithub size={24} color={"white"}/>}/>
                                    <ExternalLink href={"https://twitter.com/Julius_Henke"}
                                                  label={<BrandTwitter size={24} color={"white"}/>}/>
                                    <ExternalLink href={"https://tormap.org"}
                                                 label={"tormap.org"}/>
                                </div>
                            </SimpleGrid>
                        </Container></Tab>
                        <Tabs.Tab label="KalkulierbaR" icon={<Image src={KalkulierbarIcon} width={24}/>}><Container
                            sx={{
                                paddingBottom: "16px"
                            }}>
                            KalkulierbaR is a web app for doing logical calculi proofs. It is intended as an education
                            app
                            for IT students. We developed it in a team of 5 students.
                        </Container></Tabs.Tab>
                        <Tabs.Tab label="Lightning Puzzle"
                                  icon={<Image src={LightningPuzzleIcon} width={24}/>}><Container
                            sx={{
                                paddingBottom: "16px"
                            }}>
                            Lightning Puzzle is a community platform for puzzles. Anybody can create a challenging
                            puzzle or
                            try to solve the 90+ existing user puzzles. There are also competitions which you can take
                            part
                            in with Bitcoin payments.
                        </Container></Tabs.Tab>
                        <Tabs.Tab label="TinTok" icon={<Image src={TinTokIcon} width={24}/>}><Container sx={{
                            paddingBottom: "16px"
                        }}>
                            TinTok is an Android App which helps you connect with you local community. You can post
                            text/images/videos and like/dislike content others in your area are posting. The algorithm
                            then
                            automatically creates matches with other people, based on your likes. We developed this
                            app in a team of 5 students.
                        </Container></Tabs.Tab>
                        <Tabs.Tab label="Smart Timetable" icon={<Image src={SmartTimetableIcon} width={24}/>}><Container
                            sx={{
                                paddingBottom: "16px"
                            }}>
                            Smart Timetable is a small Android app I developed in my school time. My school timetable
                            rotated every two weeks and I did not immediately find any app that supported this feature.
                            So I
                            took this challenge to code my own app, which was a great learning experience.
                        </Container></Tabs.Tab>
                    </Tabs>
                </Container>
            </AppShell>
        </MantineProvider>
    )
}

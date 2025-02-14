'use client';

import React from 'react';
import { useRouter } from 'next/navigation'
import Aurora from './components/Aurora';
import Dock from './components/Dock';
import { VscHome, VscInfo, VscGithub, VscAccount } from 'react-icons/vsc';
import SpotlightCard from './components/SpotlightCard';
import ShinyText from './components/ShinyText';
import GradientText from './components/GradientText';
import FadeContent from './components/FadeContent';

export default function Page() {

    const router = useRouter();

    const items = [
        { icon: <VscHome size={18} />, label: 'Home', onClick: () => router.push('/page') },
        { icon: <VscInfo size={18} />, label: 'About', onClick: () => router.push('/about') },
        { icon: <VscGithub size={18} />, label: 'Projects', onClick: () => router.push('/') },
        { icon: <VscAccount size={18} />, label: 'Contact', onClick: () => router.push('/contact') },
    ];

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <div className="fixed inset-0 z-0">
                <Aurora
                    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                    speed={0.5}
                />
            </div>

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 px-4">
                <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
                    <div className="flex flex-wrap justify-center gap-6">
                        <SpotlightCard
                            className="w-72 h-96 bg-black/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center"
                            spotlightColor="rgba(0, 229, 255, 0.2)"
                        >
                            <h2 className="text-2xl font-bold text-white mb-4">
                                <GradientText
                                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                    animationSpeed={3}
                                    showBorder={false}
                                    className="custom-class"
                                >
                                    Projects
                                </GradientText>
                            </h2>
                            <div className="text-white/80 text-center">
                                <ShinyText
                                    text="Explore my latest software development projects and contributions"
                                    disabled={false}
                                    speed={3}
                                    className='custom-class'
                                />
                            </div>
                        </SpotlightCard>

                        <SpotlightCard
                            className="w-72 h-96 bg-black/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center"
                            spotlightColor="rgba(0, 229, 255, 0.2)"
                        >
                            <h2 className="text-2xl font-bold text-white mb-4">
                                <GradientText
                                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                    animationSpeed={3}
                                    showBorder={false}
                                    className="custom-class"
                                >
                                    Skills
                                </GradientText>
                            </h2>
                            <div className="text-white/80 text-center">
                                <ShinyText
                                    text="Overview of my technical skills and expertise in various technologies"
                                    disabled={false}
                                    speed={3}
                                    className='custom-class'
                                />
                            </div>
                        </SpotlightCard>

                        <SpotlightCard
                            className="w-72 h-96 bg-black/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center"
                            spotlightColor="rgba(0, 229, 255, 0.2)"
                        >
                            <h2 className="text-2xl font-bold text-white mb-4">
                                <GradientText
                                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                    animationSpeed={3}
                                    showBorder={false}
                                    className="custom-class"
                                >
                                    Contact
                                </GradientText>
                            </h2>
                            <div className="text-white/80 text-center">
                                <ShinyText
                                    text="Get in touch with me for collaborations and opportunities"
                                    disabled={false}
                                    speed={3}
                                    className='custom-class'
                                />
                            </div>
                        </SpotlightCard>
                    </div>
                </FadeContent>
            </div>

            {/*<FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>*/}
            <div className="fixed bottom-0 left-0 right-0 z-20">
                <Dock
                    items={items}
                    panelHeight={68}
                    baseItemSize={50}
                    magnification={70}
                />
            </div>
            {/*</FadeContent>*/}
        </div>
    );
}

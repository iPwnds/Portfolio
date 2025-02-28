'use client';

import React from 'react';
import { useRouter } from 'next/navigation'
import Aurora from './components/Aurora';
import Dock from './components/Dock';
import { VscHome, VscInfo, VscGithub, VscAccount, VscCode, VscMortarBoard } from 'react-icons/vsc';
import SpotlightCard from './components/SpotlightCard';
import ShinyText from './components/ShinyText';
import GradientText from './components/GradientText';
import FadeContent from './components/FadeContent';

export default function Page() {

    const router = useRouter();

    const items = [
        { icon: <VscHome size={20} />, label: 'Home', onClick: () => router.push('/') },
        { icon: <VscInfo size={20} />, label: 'About', onClick: () => router.push('/about') },
        { icon: <VscCode size={20} />, label: 'Skills', onClick: () => router.push('/skills') },
        { icon: <VscGithub size={20} />, label: 'Projects', onClick: () => router.push('/projects') },
        { icon: <VscAccount size={20} />, label: 'Contact', onClick: () => router.push('/contact') },
        { icon: <VscMortarBoard size={20} />, label: 'Blog', onClick: () => router.push('/blog') },
    ];

    const cards = [
        {
            title: "Projects",
            description: "Explore my latest software development projects and contributions",
            // action: () => router.push('/projects'),
            icon: <VscGithub size={32} className="mb-4 text-white/90" />
        },
        {
            title: "Skills",
            description: "Overview of my technical skills and expertise in various technologies",
            // action: () => router.push('/skills'),
            icon: <VscCode size={32} className="mb-4 text-white/90" />
        },
        {
            title: "Contact",
            description: "Get in touch with me for collaborations and opportunities",
            // action: () => router.push('/contact'),
            icon: <VscAccount size={32} className="mb-4 text-white/90" />
        }
    ];

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <div className="fixed inset-0 z-0">
                <Aurora
                    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                    speed={0.5}
                />
            </div>

            <main className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 px-4">
                <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            <GradientText
                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                animationSpeed={3}
                                showBorder={false}
                            >
                                Florian Braun
                            </GradientText>
                        </h1>
                        <div className="text-xl text-white/80 max-w-2xl mx-auto">
                            <ShinyText
                                text="Computer Science student by day, tech entrepreneur by night. Building the future one line of code at a time."
                                disabled={false}
                                speed={2}
                            />
                        </div>
                    </div>
                </FadeContent>

                <FadeContent blur={true} duration={800} easing="ease-out" initialOpacity={0} delay={200}>
                    <div className="flex flex-wrap justify-center gap-6">
                        {cards.map((card, index) => (
                            <SpotlightCard
                                key={index}
                                className="w-72 h-96 bg-black/20 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
                                spotlightColor="rgba(70, 131, 255, 0.3)"
                                // onClick={card.action}
                            >
                                {card.icon}
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    <GradientText
                                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                        animationSpeed={3}
                                        showBorder={false}
                                    >
                                        {card.title}
                                    </GradientText>
                                </h2>
                                <div className="text-white/80 text-center">
                                    <ShinyText
                                        text={card.description}
                                        disabled={false}
                                        speed={3}
                                    />
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </FadeContent>
            </main>

            {/*<FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={400}>*/}
                <div className="fixed bottom-0 left-0 right-0 z-20">
                    <Dock
                        items={items}
                        panelHeight={70}
                        baseItemSize={50}
                        magnification={70}
                    />
                </div>
            {/*</FadeContent>*/}
        </div>
    );
}

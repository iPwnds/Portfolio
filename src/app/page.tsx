'use client';

import React from 'react';
import Aurora from './components/Aurora';
import Dock from './components/Dock';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';
import SpotlightCard from './components/SpotlightCard';

const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
];

export default function Page() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <div className="fixed inset-0 z-0">
                <Aurora
                    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                    speed={0.5}
                />
            </div>

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 px-4">
                <div className="flex flex-wrap justify-center gap-6">
                    <SpotlightCard
                        className="w-72 h-96 bg-black/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center"
                        spotlightColor="rgba(0, 229, 255, 0.2)"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">Projects</h2>
                        <p className="text-white/80 text-center">
                            Explore my latest software development projects and contributions
                        </p>
                    </SpotlightCard>

                    <SpotlightCard
                        className="w-72 h-96 bg-black/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center"
                        spotlightColor="rgba(0, 229, 255, 0.2)"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
                        <p className="text-white/80 text-center">
                            Overview of my technical skills and expertise in various technologies
                        </p>
                    </SpotlightCard>

                    <SpotlightCard
                        className="w-72 h-96 bg-black/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center"
                        spotlightColor="rgba(0, 229, 255, 0.2)"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
                        <p className="text-white/80 text-center">
                            Get in touch with me for collaborations and opportunities
                        </p>
                    </SpotlightCard>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 z-20">
                <Dock
                    items={items}
                    panelHeight={68}
                    baseItemSize={50}
                    magnification={70}
                />
            </div>
        </div>
    );
}
import { useState } from 'react';
import TabButton from './tab-button';
import { EXAMPLES } from '@/scripts/data';

export default function TabExample() {
    const [selectedTab, setSelectedTab] = useState('state');

    const handleTabChange = (tabName: string) => {
        setSelectedTab(tabName);
    };

    const tabs = Object.keys(EXAMPLES);

    return (
        <div className="p-4 bg-slate-800 rounded-lg">
            <div className="flex flex-wrap border-b border-slate-700">
                {tabs.map((tab) => (
                    <TabButton
                        key={tab}
                        isSelected={selectedTab === tab}
                        onClick={() => handleTabChange(tab)}
                    >
                        {EXAMPLES[tab as keyof typeof EXAMPLES].title}
                    </TabButton>
                ))}
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-bold">
                    {EXAMPLES[selectedTab as keyof typeof EXAMPLES].title}
                </h3>
                <p className="mt-2">
                    {EXAMPLES[selectedTab as keyof typeof EXAMPLES].description}
                </p>
                <pre className="mt-4 p-4 bg-slate-900 rounded overflow-x-auto">
                    <code>
                        {EXAMPLES[selectedTab as keyof typeof EXAMPLES].code}
                    </code>
                </pre>
            </div>
        </div>
    );
}
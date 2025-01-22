import React, { useEffect, useRef, useState } from 'react';

interface CircularSkillBarProps {
    percentage: number;
    skillName: string;
    lightcolor: string;
    darkcolor: string;
}

const CircularSkillBar: React.FC<CircularSkillBarProps> = ({
    percentage,
    skillName,
    // color = '#3b82f6'
    lightcolor,
    darkcolor
}) => {
    const [progress, setProgress] = useState(0);
    const circleRef = useRef<HTMLDivElement>(null);

    const [color, setcolor] = useState(lightcolor);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {



                const [entry] = entries;
                if (entry.isIntersecting) {
                    setProgress(0); // Reset progress
                    const duration = 2000; // 2 seconds total duration
                    const steps = 60; // 60 steps for smooth animation
                    const increment = percentage / steps;
                    let step = 0;



                    const interval = setInterval(() => {
                        if (step >= steps) {
                            clearInterval(interval);
                            setProgress(percentage); // Ensure we reach exact percentage
                        } else {
                            setProgress(prev => Math.min(percentage, prev + increment));
                            step++;
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.5 }
        );

        if (circleRef.current) {
            observer.observe(circleRef.current);
        }

        return () => {
            if (circleRef.current) {
                observer.unobserve(circleRef.current);
            }
        };
    }, [percentage]);

    useEffect(() => {
        const themecolor = window.localStorage.getItem("theme");
        themecolor === "dark" ? setcolor(darkcolor) : setcolor(lightcolor);
        const handleStorage = () => {
            // Place for a function responsible for
            // pulling and displaying local storage data
            const themecolor = window.localStorage.getItem("theme");
            themecolor === "dark" ? setcolor(darkcolor) : setcolor(lightcolor);
        }

        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)
    }, [])

    const radius = 55; // Increased from 40
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div
            ref={circleRef}
            className="group flex flex-col items-center justify-center p-2 md:p-6 dark:bg-none md:dark:bg-gray-800 bg-transparent dark:bg-opacity-20 md:bg-white md:shadow-lg rounded-md hover:shadow-xl transition-shadow duration-300"
        >
            <div className="relative w-48 h-48"> {/* Increased from w-36 h-36 */}
                {/* Decorative background elements */}

                {/* Main SVG */}
                <svg className="w-full h-full transform -rotate-90">
                    {/* Background pattern */}

                    <circle
                        cx="96"
                        cy="96"
                        r={radius}
                        fill="url(#grid)"
                        className="opacity-50"
                    />

                    {/* Background track */}
                    <circle
                        cx="96"
                        cy="96"
                        r={radius}
                        stroke="#e5e7eb"
                        strokeWidth="10"
                        fill="none"
                        className="opacity-30"
                    />

                    {/* Progress circle */}
                    <circle
                        cx="96"
                        cy="96"
                        r={radius}
                        stroke={color}
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="butt"
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset,
                            transition: 'stroke-dashoffset 0.1s linear'
                        }}
                        className="drop-shadow-md"
                    />
                </svg>

                {/* Percentage display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-bold tracking-tight"
                        style={{ color }}
                    >
                        {Math.round(progress)}%
                    </span>
                    <div className="h-0.5 w-12 mt-2" style={{ backgroundColor: color }} />
                </div>
            </div>

            {/* Skill name */}
            <div className="mt-6 text-center">
                <h3 className="text-md md:text-xl font-semibold tracking-wide uppercase dark:text-gray-200 text-gray-700">
                    {skillName}
                </h3>
                <div className="h-0.5 w-16 mx-auto mt-2 transform transition-all duration-300 group-hover:w-20"
                    style={{ backgroundColor: color }} />
            </div>
        </div>
    );
};

export default CircularSkillBar;
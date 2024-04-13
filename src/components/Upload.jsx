import React, { useEffect, useRef } from "react";

export default function Upload(props) {
    const fileInputRef = useRef(null);

    useEffect(() => {
        const slider = document.querySelector('.slider');
        const tooltips = document.querySelectorAll('.absolute span');

        slider.addEventListener('input', function() {
            const value = this.value;
            tooltips.forEach((tooltip, index) => {
                if (index + 1 == value) {
                    tooltip.style.opacity = '1';
                } else {
                    tooltip.style.opacity = '0';
                }
            });
        });
    }, []);

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        onFileSelect(file);
    };

    const openFilePicker = () => {
        fileInputRef.current.click();
    };

    const supportedSources = [
        {
            language: "English",
            code: "EN",
        },
        {
            language: "French",
            code: "FR",
        },
        {
            language: "Spanish",
            code: "ES",
        },
        {
            language: "German",
            code: "DE",
        },
    ];
    const supportedDestinations = [
        {
            language: "English",
            code: "EN-GB",
        },
        {
            language: "French",
            code: "FR",
        },
        {
            language: "Spanish",
            code: "ES",
        },
        {
            language: "German",
            code: "DE",
        },
        {
            language: "Hindi",
            code: "HI",
        },
        {
            language: "Gujarati",
            code: "GU",
        },
        {
            language: "Mararthi",
            code: "MR",
        },
        {
            language: "Tamil",
            code: "TA",
        },
    ];

    return (
        <div className="w-[60vw] p-10">
            <form className="rounded-lg backdrop-blur-md text-white bg-white bg-opacity-10 p-5 h-full flex flex-col items-center pt-8">
                <h1 className="font-bold text-2xl">Translate {props.type}</h1>
                <input
                    type="text"
                    placeholder="Enter Youtube video link"
                    className="w-[80%] p-2 mb-5 bg-transparent border-b-2 border-white text-white"
                />
                <h1 className="text-2xl mb-5">Or</h1>
                <div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileInputChange}
                    />
                    <button
                        onClick={openFilePicker}
                        className="flex flex-row items-center mb-5 rounded-2xl bg-white bg-opacity-15 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        <span>Choose Files from your computer</span>
                        <img
                            className="ml-4 size-8 pt-2"
                            src="/upload-icon.png"
                            alt="Upload Icon"
                        ></img>
                    </button>
                </div>
                <div className="w-[80%] mb-5 ">
                    <h1 className="text-2xl font-bold">Choose the languages</h1>
                </div>
                <div className="flex flex-row w-[80%] justify-evenly items-center">
                    <select
                        className=" p-2 mb-5 bg-transparent border-b-2 border-white text-white"
                        name="source"
                        id="source"
                    >
                        {supportedSources.map((source, idx) => (
                            <option key={idx} value={source.code} className="bg-cyan">
                                {source.language}
                            </option>
                        ))}
                    </select>
                    <h1 className="text-2xl">To</h1>
                    <select
                        className=" p-2 mb-5 bg-transparent border-b-2 border-white text-white"
                        name="destination"
                        id="destination"
                    >
                        {supportedDestinations.map((destination, idx) => (
                            <option
                                key={idx}
                                value={destination.code}
                                className="bg-cyan"
                            >
                                {destination.language}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="w-[80%] relative">
                    <div className="w-[80%] mb-5 ">
                        <h1 className="text-2xl font-bold">Choose the modes</h1>
                    </div>
                    <input type="range" min="0" max="3" step="1" className="slider appearance-none w-full h-1 bg-gray-300 rounded-full focus:outline-none" />
                    <div className="absolute top-0 -mt-8 left-0 right-0 text-center">
                        <span className="inline-block w-20 text-xs bg-gray-800 text-white rounded-lg py-1 px-3 opacity-0 pointer-events-none transition-opacity duration-300">Best Quality</span>
                        <span className="inline-block w-20 text-xs bg-gray-800 text-white rounded-lg py-1 px-3 opacity-0 pointer-events-none transition-opacity duration-300" style={{ left: '25%' }}>Quality</span>
                        <span className="inline-block w-20 text-xs bg-gray-800 text-white rounded-lg py-1 px-3 opacity-0 pointer-events-none transition-opacity duration-300" style={{ left: '50%' }}>Performance</span>
                        <span className="inline-block w-20 text-xs bg-gray-800 text-white rounded-lg py-1 px-3 opacity-0 pointer-events-none transition-opacity duration-300" style={{ left: '75%' }}>Best Performance</span>
                    </div>
                </div>
            </form>
        </div>
    );
}

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Upload(props) {
    const fileInputRef = useRef(null);
    const [sourceLang, setSourceLang] = useState("EN");
    const [targetLang, setTargetLang] = useState("EN-GB");
    const [mode, setMode] = useState(1);

    const handleSourceChange = (e) => {
        setSourceLang(e.target.value);
    };

    const handleTargetChange = (e) => {
        setTargetLang(e.target.value);
    };

    const handleModeChange = (e) => {
        setMode(parseInt(e.target.value));
    };

    useEffect(() => {
        const slider = document.querySelector('.slider');
        const labels = document.querySelectorAll('.slider-label');

        slider.addEventListener('input', function () {
            const value = this.value;
            labels.forEach((label, index) => {
                label.style.opacity = index + 1 === Number(value) ? '1' : '0.5';
            });
        });
    }, []);

    const handleFileInputChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        uploadFile(formData, sourceLang, targetLang, mode);

        onFileSelect(file);
    };

    const uploadFile = (formData, source_lang, target_lang, mode) => {
        console.log(source_lang, target_lang, mode);
        axios.post(`http://localhost:5000/upload/?source_lang=${source_lang}&target_lang=${target_lang}&mode=${mode}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
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
            language: "Marathi",
            code: "MR",
        },
        {
            language: "Tamil",
            code: "TA",
        },
    ];

    return (
        <div className="w-[60vw] p-6">
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
                        className="flex flex-row items-center mb-5 rounded-2xl bg-white bg-opacity-15 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
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
                        value={sourceLang}
                        onChange={handleSourceChange}
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
                        value={targetLang}
                        onChange={handleTargetChange}
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
                <div className={`mb-5 w-[80%] relative ${!props.modes ? "hidden" : "visible"}`}>

                    <div className="w-[80%] mb-5 ">
                        <h1 className="text-2xl font-bold">Choose the modes</h1>
                    </div>
                    <div className="relatice w-full">
                        <input
                            type="range"
                            min="1"
                            max="4"
                            step="1"
                            className="slider appearance-none w-full h-1 bg-gray-300 rounded-full focus:outline-none"
                            onChange={handleModeChange}
                        />
                    </div>
                    <div className="flex justify-between w-full text-xs text-white mt-2 ml-0">
                        <span className={`slider-label ${mode === 1 ? 'opacity-100' : 'opacity-50'}`}>Best Performance</span>
                        <span className={`slider-label ${mode === 2 ? 'opacity-100' : 'opacity-50'}`}>Performance</span>
                        <span className={`slider-label ${mode === 3 ? 'opacity-100' : 'opacity-50'}`}>Quality</span>
                        <span className={`slider-label ${mode === 4 ? 'opacity-100' : 'opacity-50'}`}>Best Quality</span>
                    </div>
                </div>
                <div className={` ${!props.modes ? "mt-10" : ""}`}>
                    <input
                        type="submit"
                        value="Translate"
                        className=" text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
                        style={{ 'background': 'linear-gradient(to right, #003B41, #3597AE)' }}
                    />
                </div>
            </form>
        </div>
    );
}

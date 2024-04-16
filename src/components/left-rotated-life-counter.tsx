'use client'

import { useState, useEffect } from "react";
import { Colorful } from "@uiw/react-color";
const tinycolor = require("tinycolor2");

export default function LeftRotatedLifeCounter({ className, startLife = 20, scale = 100, isCommander = true}: { className?: string, startLife?: number, scale?: number, isCommander?: boolean}) {
    const [color, setColor] = useState("rgb(239, 68, 68)");
    const [backgroundColor, setBackgroundColor] = useState("rgb(254, 202, 202)");
    const [buttonColor, setButtonColor] = useState("rgb(248, 113, 113)");
    const [colorMenuVisible, setColorMenuVisibility] = useState(false);
    const [life, setLife] = useState(startLife);
    const [commanderDamage, setCommanderDamage] = useState(0);
    
    function changeColor(inputColor: any) {
        let newColor = tinycolor(inputColor);
        if (newColor.isValid()) {
            let colorStr = newColor.toHexString();
            setColor(colorStr);
            if (newColor.getBrightness() > 180) {
                setBackgroundColor(newColor.darken(20).toHexString());
                setButtonColor(newColor.darken(10).toHexString());
            } else {
                setBackgroundColor(newColor.lighten(20).toHexString());
                setButtonColor(newColor.lighten(10).toHexString());
            }
        }
    }

    function changeLifeTotal(change: number) {
        const newLife = life + change;
            setLife(newLife);
    }

    function changeCommanderDamage(change: number) {
        const newCommanderDamage = commanderDamage + change;
            setCommanderDamage(newCommanderDamage);
    }


    return (
        <div className={`flex flex-row items-center justify-center flex-wrap ${className}`} style={{backgroundColor: backgroundColor, color: color}}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,600,0,0"/>
            <div className={`absolute w-10 h-10 rounded-full bottom-4 right-4 ${"scale-" + scale}`} style={{backgroundColor: buttonColor}} onClick={(event) => {setColorMenuVisibility(!colorMenuVisible)}}><span className="material-symbols-outlined absolute top-3 left-3 w-10 h-10 scale-150">palette</span></div>
            <div className={`text-xs rotate-90 ${"scale-" + scale}`}>Deck</div>
            {isCommander ? <div
                className={`flex items-center justify-between w-44 h-18 text-3xl font-medium rounded-full rotate-90 ${"scale-" + scale}`}
                style={{color: color, background: "transparent"}}
            >
                <button className={`w-10 h-10 text-white rounded-full`} style={{backgroundColor: buttonColor}} onClick={(event) => {changeCommanderDamage(-1)}}>-</button>
                <div>{commanderDamage}</div>
                <button className={`w-10 h-10 text-white rounded-full`} style={{backgroundColor: buttonColor}} onClick={(event) => {changeCommanderDamage(1)}}>+</button>
            </div> : null}
            <div
                className={`flex items-center justify-between w-64 h-24 text-4xl font-black rounded-full rotate-90 ${"scale-" + scale}`}
                style={{color: color, background: "transparent"}}
            >
                <button className={`w-12 h-12 text-white rounded-full`} style={{backgroundColor: buttonColor}} onClick={(event) => {changeLifeTotal(-1)}}>-</button>
                <div>{life}</div>
                <button className={`w-12 h-12 text-white rounded-full`} style={{backgroundColor: buttonColor}} onClick={(event) => {changeLifeTotal(1)}}>+</button>
            </div>
            <div className={`text-s ${"scale-" + scale} rotate-90`}>Player</div>
            <Colorful className={`rotate-90 ${"scale-" + scale}`} style={colorMenuVisible ? {position: "fixed", visibility:"visible"} : {visibility: "hidden", position: "fixed"}} disableAlpha={true} color={color} onChange={(newColor) => {changeColor(newColor.hex)}} rotation={90}/>
        </div>
    );
}
'use client'

import { useState } from "react";
import { Colorful } from "@uiw/react-color";
const tinycolor = require("tinycolor2");

export default function LifeCounter({ className }: { className?: string}) {
    const [color, setColor] = useState("rgb(239, 68, 68)");
    const [backgroundColor, setBackgroundColor] = useState("rgb(254, 202, 202)");
    const [buttonColor, setButtonColor] = useState("rgb(248, 113, 113)");
    const [colorMenuVisible, setColorMenuVisibility] = useState(false);
    const [life, setLife] = useState(20);
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
        <div className={`relative pt-10 flex flex-col items-center justify-center ${className}`} style={{backgroundColor: backgroundColor, color: color}}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,600,0,0"/>
            <div className="absolute w-9 h-9 rounded-full top-4 right-4" style={{backgroundColor: buttonColor}} onClick={(event) => {setColorMenuVisibility(!colorMenuVisible)}}><span className="material-symbols-outlined scale">palette</span></div>
            <div className="text-xs">Player</div>
            <Colorful style={colorMenuVisible ? {position: "fixed", visibility:"visible"} : {visibility: "hidden", position: "fixed"}} disableAlpha={true} color={color} onChange={(newColor) => {changeColor(newColor.hex)}}/>
            <div
                className={`flex items-center justify-between w-64 h-24 text-4xl font-black rounded-full `}
                style={{color: color, background: backgroundColor}}
            >
                <button className={`w-12 h-12 text-white rounded-full`} style={{backgroundColor: buttonColor}} onClick={(event) => {changeLifeTotal(-1)}}>-</button>
                <div>{life}</div>
                <button className={`w-12 h-12 text-white rounded-full`} style={{backgroundColor: buttonColor}} onClick={(event) => {changeLifeTotal(1)}}>+</button>
            </div>
            <div
                className={`flex items-center justify-between pb-10 w-44 h-18 text-3xl font-medium rounded-full`}
                style={{color: color, background: backgroundColor}}
            >
                <button className={`w-10 h-10 text-white rounded-full`} style={{backgroundColor: buttonColor}} onClick={(event) => {changeCommanderDamage(-1)}}>-</button>
                <div>{commanderDamage}</div>
                <button className={`w-10 h-10 text-white rounded-full`} style={{backgroundColor: buttonColor}} onClick={(event) => {changeCommanderDamage(1)}}>+</button>
            </div>
            <div className="text-xs">Deck</div>
        </div>
    );
}
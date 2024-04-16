'use client'

export default function Home() {
    return (
      <div className="absolute w-full h-full bg-gray-700 flex-col text-center items-center justify-center content-center">
          <h1 className="font-black text-6xl p-5">Diese Funktion ist aktuell noch nicht implementiert!</h1>
          <h1 className="font-black text-4xl p-5">Dies soll sich aber in Zukunft ändern!</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-7" onClick={() => window.location.href = "/match"}>Zurück zur Modi Wahl</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-7" onClick={() => window.location.href = "mailto:yannick.braune@web.de"}>Feature Vorschläge</button>
      </div>
    );
  }
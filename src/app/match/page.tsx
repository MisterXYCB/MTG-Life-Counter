'use client'

import React, { useState } from 'react';
import Dropdown, { Group } from 'react-dropdown';
import '../../styles/dropdown.css';

const options: (any | Group)[] = [
  { type: 'group', name: "Normal", items: [
    { value: '/1v1', label: 'Eins gegen Eins' }
  ]},
  { type: 'group', name: "Commander", items: [
    { value: '/commander/1v1', label: 'Eins gegen Eins' },
    { value: '/coming-soon', label: '3 Spieler' },
    { value: '/coming-soon', label: '4 Spieler' },
  ]},
  { type: 'group', name: "Mehr unterstütze Modi kommen in Zukunft", items: []}
];

export default function Two() {

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-700">
      <Dropdown className="top-[40%] w-[20%] left-[40%]" options={options} onChange={(selectedElement) => window.location.href = selectedElement.value} placeholder="Was wird gespielt?" />
    </div>
  );
}

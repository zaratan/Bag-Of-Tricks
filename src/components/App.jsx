import React, { useState, useEffect } from 'react';
import HighlightDiv from './HighlightDiv';

export default function App() {
  return (
    <>
      <h1>Bag of Tricks</h1>
      <ul className="flex flex-center">
        <HighlightDiv />
      </ul>
    </>
  );
}

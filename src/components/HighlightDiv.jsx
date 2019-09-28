import React, { useState, useEffect } from 'react';
import Button from './Button';

export default function HighlightDiv() {
  const borderStyleId = 'bot-visible-border-style';
  const [borders, setBorders] = useState(false);
  useEffect(() => {
    const refreshActiveBorderState = () => {
      chrome.tabs.executeScript(
        null,
        { code: `document.getElementById("${borderStyleId}") !== null` },
        results => {
          setBorders(results[0]);
        }
      );
    };

    refreshActiveBorderState();
    chrome.tabs.onUpdated.addListener((id, changes, tab) => {
      if (!tab.active) return;
      refreshActiveBorderState();
    });
  }, [borderStyleId]);

  const actOnBorder = () => {
    if (borders) {
      setBorders(false);
      chrome.tabs.executeScript({
        code: `document.getElementById("${borderStyleId}").remove();`,
      });
      return;
    }

    chrome.tabs.executeScript({
      code: `
      {
        const head = document.getElementsByTagName("head")[0];
        const visibleBorderStyle = document.createElement("style");
        visibleBorderStyle.id = "${borderStyleId}";
        visibleBorderStyle.innerHTML = \`
        * { background-color: rgba(255,0,0,.2); }
        * * { background-color: rgba(0,255,0,.2); }
        * * * { background-color: rgba(0,0,255,.2); }
        * * * * { background-color: rgba(255,0,255,.2); }
        * * * * * { background-color: rgba(0,255,255,.2); }
        * * * * * * { background-color: rgba(255,255,0,.2); }
        * * * * * * * { background-color: rgba(255,0,0,.2); }
        * * * * * * * * { background-color: rgba(0,255,0,.2); }
        * * * * * * * * * { background-color: rgba(0,0,255,.2); }
        \`;
        head.append(visibleBorderStyle);
      }
      `,
    });
    setBorders(true);
  };
  return (
    <Button action={actOnBorder} active={borders}>
      {borders ? `Deactivate` : `Activate`} borders view
    </Button>
  );
}

// @flow
import React, { useState, useEffect } from 'react';
import Button from './Button';

const ReactivateSelect = () => {
  const reactivateSelectStyleId = 'bot-reactivate-select-style';
  const [reactivateSelect, setReactivateSelect] = useState(false);

  useEffect(() => {
    const refreshActiveReactivateSelectState = () => {
      chrome.tabs.executeScript(
        {
          code: `document.getElementById("${reactivateSelectStyleId}") !== null`,
        },
        (results) => {
          setReactivateSelect(!!results[0]);
        }
      );
    };

    refreshActiveReactivateSelectState();
    chrome.tabs.onUpdated.addListener((id, changes, tab) => {
      if (!tab.active) return;
      refreshActiveReactivateSelectState();
    });
  }, [reactivateSelectStyleId]);

  const actOnReactivateSelect = () => {
    if (reactivateSelect) {
      setReactivateSelect(false);
      chrome.tabs.executeScript({
        code: `
          document.getElementById("${reactivateSelectStyleId}").remove();
          `,
      });
      return;
    }

    chrome.tabs.executeScript({
      code: `
      {
        const head = document.getElementsByTagName("head")[0];
        const visibleBorderStyle = document.createElement("style");
        visibleBorderStyle.id = "${reactivateSelectStyleId}";
        visibleBorderStyle.innerHTML = \`
        * {
          user-select: text !important;
        }
        body {
          cursor: inherit !important;
        }
        \`;
        head.append(visibleBorderStyle);
        // Remove wp-content-copy-protection
        document.body.addEventListener('selectstart', (e) => {e.stopPropagation()}, true)
      }
      `,
    });
    setReactivateSelect(true);
  };
  return (
    <Button action={actOnReactivateSelect} active={reactivateSelect}>
      {reactivateSelect ? `Deactivate` : `Activate`} force select
    </Button>
  );
};

export default ReactivateSelect;

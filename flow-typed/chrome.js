// @flow

type MutedInfoReason = 'user' | 'capture' | 'extension';

type MutedInfo = {
  muted: boolean,
  mutedInfoReason?: MutedInfoReason,
  extensionId?: string,
};

type Tab = {
  id?: number,
  index: number,
  windowId: number,
  openerTabId?: number,
  selected: boolean,
  highlighted: boolean,
  active: boolean,
  pinned: boolean,
  audible?: boolean,
  discarded: boolean,
  autoDiscardable: boolean,
  mutedInfo?: MutedInfo,
  url?: string,
  pendingUrl?: string,
  title?: string,
  favicon?: string,
  status?: string,
  incognito: boolean,
  width?: number,
  height?: number,
  sessionId?: string,
};

type ZoomSettingsMode = 'automatic' | 'manual' | 'disabled';

type ZoomSettingsScope = 'per-origin' | 'per-tab';

type ZoomSettings = {
  mode?: ZoomSettingsMode,
  scope?: ZoomSettingsScope,
  defaultZoomFactor: float,
};

type TabStatus = 'loading' | 'complete';

type WindowType = 'normal' | 'popup' | 'panel' | 'app' | 'devtools';

type ChangeInfo = {
  status?: string,
  url?: string,
  pinned?: boolean,
  audible?: boolean,
  discarded?: boolean,
  autoDiscardable?: boolean,
  mutedInfo?: MutedInfo,
  faviconUrl?: string,
  title?: string,
};

type ExecuteScriptDetails = {
  code?: string,
  file?: string,
  allFrames?: boolean,
  frameId?: number,
  matchAboutBlank?: boolean,
  runAt?: 'document_start' | 'document-end' | 'document-idle',
  cssOrigin?: 'author' | 'user',
};

declare var chrome: {
  tabs: {
    get: (tabId: number, callback: (tab: Tab) => any) => void,
    getCurrent: (callback: (tab?: Tab) => any) => void,
    connect: (
      tabId: number,
      connectInfo: { name?: string, frameId?: number }
    ) => any, // TODO: Not Mapped yet. Map runtime.Port
    sendRequest: (
      tabId: number,
      request: any,
      responseCallback?: (response?: any) => any
    ) => void, // DEPRECATED
    sendMessage: (
      tabId: number,
      message: any,
      options?: { frameId?: number },
      responseCallback?: (response: any) => any
    ) => void,
    getSelected: (windowId?: integer, callback: (tab: Tab) => any) => void, // DEPRECATED
    getAllInWindow: (windowId?: number, callback: (tabs: [Tab]) => any) => void, // DEPRECATED
    create: Function,
    duplicate: Function,
    query: Function,
    highlight: Function,
    update: Function,
    move: Function,
    reload: Function,
    remove: Function,
    detectLanguage: Function,
    captureVisibleTab: Function,
    executeScript: (
      tabId: number | ExecuteScriptDetails,
      details?: ExecuteScriptDetails,
      callback?: (result: [any]) => any
    ) => void,
    insertCSS: Function,
    setZoom: Function,
    getZoom: Function,
    setZoomSettings: Function,
    getZoomSettings: Function,
    discard: Function,
    goForward: Function,
    goBack: Function,
    // Listeners
    onCreated: { addListener: Function },
    onUpdated: {
      addListener: (
        callback: (
          tabId: number | ChangeInfo,
          changeInfo: ChangeInfo,
          tab: Tab
        ) => any
      ) => void,
    },
    onMoved: { addListener: Function },
    onSelectionChanged: { addListener: Function },
    onActiveChanged: { addListener: Function },
    onActivated: { addListener: Function },
    onHighlightChanged: { addListener: Function },
    onHighlighted: { addListener: Function },
    onDetached: { addListener: Function },
    onAttached: { addListener: Function },
    onRemoved: { addListener: Function },
    onReplaced: { addListener: Function },
    onZoomChange: { addListener: Function },
  },
};

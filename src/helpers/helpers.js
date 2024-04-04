import React, { useEffect, useRef } from "react";
import axios from "axios";
import { EnvEnum } from "./enums/configEnums";
//import DisplayText from "../components/form/display/display-text";
//import { getLastActiveMoment } from "./ui";
//import { signOutUserAction } from "../reducers/user";
import { FilterStatusEnum } from "./enums/uiEnums";

export function useInterval(callback = () => {}, delay = null) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) {
      return;
    }

    savedCallback.current();
    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
}

/**
 *
 * @param env
 * @param path
 * @param setAppConfig
 */
export const requestConfigurationSettingsFile = (env, path, setAppConfig) => {
  axios({
    method: "GET",
    url:
      env === EnvEnum.Development
        ? `/${path}settings.json`
        : `${window.location.origin}/${path}settings.json`,
  })
    .then((response) => {
      const { data } = response;
      const { siteOrigin = "fairssl" } = data;
      const englishLabels = require(`../assets/language/en.json`);
      const portugueseLabels = require(`../assets/language/pt.json`);

      global.config = {
        labels: {
          en: englishLabels,
          da: danishLabels,
          pt: portugueseLabels,
          sv: swedishLabels,
        },
      };

      localStorage.setItem("appConfig", JSON.stringify(data));

      if (
        data &&
        data.matomoInfo &&
        process.env.NODE_ENV === EnvEnum.Production
      ) {
        handleMatomoStart(data.matomoInfo);
      }

      return setAppConfig(data);
    })
    .catch((error) => error.message);
};

/**
 *
 * @param matomoInfo
 */
export const handleMatomoStart = (matomoInfo) => {
  const _paq = (window._paq = window._paq || []);
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
  (function () {
    _paq.push(["setTrackerUrl", matomoInfo.trackerUrl]);
    _paq.push(["setSiteId", matomoInfo.siteId]);
    const d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.type = "text/javascript";
    g.async = true;
    g.src = matomoInfo.srcUrl;
    s.parentNode.insertBefore(g, s);
  })();
};

/**
 *
 * @returns {any}
 */
export const getAppConfig = () => {
  const appConfigString = localStorage.getItem("appConfig");
  return appConfigString ? JSON.parse(appConfigString) : {};
};

/**
 * @param array
 * @returns {boolean}
 */
export function isArrayEmpty(array) {
  return Array.isArray(array) && array.length === 0;
}

/**
 * @param obj
 * @returns {boolean}
 */
export function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

/**
 *
 * @returns {string}
 */
export const getLastNotificationBarReadMessage = () => {
  return getStringDisplayValue(
    localStorage.getItem("lastNotificationBarReadMessage")
  );
};

/**
 *
 * @param value
 * @returns {string}
 */
export const getStringDisplayValue = (value) => {
  return String(value || "");
};

/**
 *
 * @param value
 * @returns {*[]|*}
 */
export const getArray = (value) => {
  if (!value || !Array.isArray(value)) {
    return [];
  }

  return value;
};

/**
 *
 * @param value
 * @returns {null}
 */
export const getNullableValue = (value) => {
  return value || null;
};

/**
 *
 * @param value
 * @returns {{}|*}
 */
export const getObject = (value) => {
  if (!value || typeof value !== "object") {
    return {};
  }
  return value;
};

/**
 *
 * @param textValue
 * @param fileName
 */
export const downloadBlobTxt = (textValue, fileName) => {
  const blob = new Blob([textValue], { type: "text/plain" });
  const blobUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = blobUrl;
  link.download = `${fileName}.txt`;
  document.body.appendChild(link);

  link.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    })
  );

  document.body.removeChild(link);
};

/**
 *
 * @param label
 * @param text
 * @returns {boolean|JSX.Element}
 */
export const getDisplayData = (label, text) => {
  return Boolean(text) && <DisplayText label={label}>{text}</DisplayText>;
};

/**
 *
 * @param data
 * @returns {number}
 */
export const getArrayLength = (data) => {
  if (!data || !data.length || !data[0]) {
    return 0;
  }

  return Number(data.length);
};

/**
 *
 * @param millisecondsValue
 * @returns {number}
 */
export const getMillisecondsToDays = (millisecondsValue) => {
  if (!millisecondsValue || isNaN(millisecondsValue)) {
    return 0;
  }

  return millisecondsValue / 1000 / 60 / 60 / 24;
};

/**
 *
 * @param props
 * @param dispatch
 * @param label
 * @param lastActiveMoment
 * @param lastActiveTime
 */
export const getNewLastActiveTimeFromIdle = ({
  props,
  label,
  dispatch,
  lastActiveMoment,
  lastActiveTime,
}) => {
  if (props.isLogged) {
    const newLastActiveTime = lastActiveTime;
    const activeDiff = getLastActiveMoment(lastActiveMoment, newLastActiveTime);

    if (activeDiff && props.userTimeout && activeDiff >= props.userTimeout) {
      dispatch({
        type: signOutUserAction,
        payload: { label, shouldAlertUser: true },
      });

      return 0;
    }

    return newLastActiveTime;
  }
};

/**
 *
 * @param window
 * @returns {string}
 */
export const getWindowLocationHref = (window) =>
  window && window.location && window.location.href;

/**
 *
 * @param sortStatus
 * @returns {boolean|boolean}
 */
export const getNextSortStatus = (sortStatus) => {
  if (sortStatus === FilterStatusEnum.Null) {
    return FilterStatusEnum.On;
  }

  return sortStatus === FilterStatusEnum.On
    ? FilterStatusEnum.Off
    : FilterStatusEnum.On;
};

/**
 *
 * @param string
 * @returns {string}
 */
export const getTextWithFirstLetterAsUppercase = (string = "") =>
  string.charAt(0).toUpperCase() + string.slice(1);

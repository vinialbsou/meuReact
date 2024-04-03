import axios from "axios";
import { getCookie } from "../helpers/user/cookies";
import { EnvEnum } from "../helpers/enums/configEnums";
import { getAppConfig } from "../helpers/helpers";

export const POST = "post";
export const GET = "get";
export const UPDATE = "update";
export const DELETE = "delete";

export const v1 = "v1";
const appConfig = getAppConfig();
const localDevAPiUrl =
  appConfig.devApiUrl || "https://dev-testing.notyours.com/api";
const apiUrl = window.location.origin + `/api`;

const activeUrl =
  process.env.NODE_ENV === EnvEnum.Development ? localDevAPiUrl : apiUrl;

function getSiteOrigin() {
  const origin = getAppConfig();
  return origin.siteOrigin;
}

/**
 *
 * @param method
 * @param url
 * @param version
 * @param data
 * @param token
 * @param apiUrl
 * @returns {Promise<AxiosResponse<any>>}
 */
export function httpRequest(
  method,
  url,
  version,
  data,
  token = getCookie("currentUser"),
  apiUrl = activeUrl
) {
  const requestData = token ? data : { ...data, siteOrigin: getSiteOrigin(), origin: "react-client" };
  return axios({
    headers: {
      Authorization: `Bearer ${token ? token : ""}`,
      "Access-Control-Allow-Origin": "*",
    },
    method: method,
    url: version ? `${apiUrl}/${version}/${url}` : `${apiUrl}/${url}`,
    data: requestData,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => error.message);
}

export default httpRequest;

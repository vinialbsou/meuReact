import httpRequest, { POST, GET, v1 } from "./requests";

/**
 * @param data
 */

export const userRegisterApi = (data) => httpRequest(POST, "register", v1, data);
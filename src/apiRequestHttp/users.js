import httpRequest, { POST, GET, v1 } from "./requests";

/**
 *
 * @param data
 */

export const register = (data) => httpRequest(POST, "register", v1, data);
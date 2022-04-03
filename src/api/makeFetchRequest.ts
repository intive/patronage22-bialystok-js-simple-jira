import { retrieveAccessToken } from "src/contexts/authentication";

type METHOD = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

async function makeRequest(url: string, method: METHOD, body?: any) {
  const jsonBody = body ? JSON.stringify(body) : undefined;
  const accessToken = retrieveAccessToken();

  const headers = {
    "Content-Type": "application/json",
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
  };

  const response = await fetch(url, {
    method,
    headers,
    body: jsonBody,
  });

  return response;
}

export default makeRequest;

import { TOKEN_KEY } from "src/contexts/authentication";

type METHOD = "GET" | "POST" | "PUT" | "PATH" | "DELETE" | "PATCH";

async function makeRequest(url: string, method: METHOD, body?: any) {
  const jsonBody = body ? JSON.stringify(body) : undefined;
  const token = localStorage.getItem(TOKEN_KEY);

  const headers = {
    "Content-Type": "application/json",
    Authentication: `Bearer ${token}`,
  };

  const response = await fetch(url, {
    method,
    headers,
    body: jsonBody,
  });

  return response;
}

export default makeRequest;

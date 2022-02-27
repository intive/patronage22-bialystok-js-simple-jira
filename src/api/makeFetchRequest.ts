async function makeRequest(url: string, method: string, body: any) {
  const jsonBody = body ? JSON.stringify(body) : undefined;
  const headers: any = {
    "Content-Type": "application/json",
  };

  const response = await window.fetch(url, {
    method,
    headers,
    body: jsonBody,
  });

  return response;
}

export default makeRequest;

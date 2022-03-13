import { useEffect, useState } from "react";
import { BoardList, ProjectByID } from "../api/interfaces";

export const doFetch = (customUrl: string, method: string, body?: any) => {
  return fetch(customUrl, {
    method: method,
    body: JSON.stringify(body),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => err.message);
};

export const useSingleDataRequest = (
  url: string,
  method: string,
  body?: any
) => {
  const [singleDataFetch, setSingleDataFetch] = useState<ProjectByID>();

  useEffect(() => {
    doFetch(url, method).then((res) => setSingleDataFetch(res.data));
  }, []);

  return singleDataFetch;
};

export const useDataRequest = (url: string, method: string) => {
  const [dataFetch, setDataFetch] = useState<BoardList[]>();

  useEffect(() => {
    doFetch(url, method).then((res) => setDataFetch(res.data));
  }, []);

  return dataFetch;
};

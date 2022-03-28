import makeRequest from "../makeFetchRequest";

export const deleteBoard = (id: string) => {
  makeRequest(
    `https://patronageapi.herokuapp.com/api/board/delete/${id}`,
    "DELETE"
  );
};

import makeRequest from "../makeFetchRequest";

export const deleteBoard = (id: string) => {
  let response;
  makeRequest(
    `https://patronageapi.herokuapp.com/api/board/delete/${id}`,
    "DELETE"
  ).then((res) => {
    response = res;
    console.log(res);
  });
  return response;
};

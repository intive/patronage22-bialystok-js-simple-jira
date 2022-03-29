import makeRequest from "../makeFetchRequest";
// import { issueList } from "../../mockData/mockIssue";

interface DataObject {
  [key: string]: any;
}

const MockIssueAPI = {
  getIssue: async function () {
    // const res = { data: { ...issueList }, status: 200 };
    // return res;
  },
  addIssue: async function (data: any) {
    console.log(`${data.summary} issue added`);
    const res = { status: "200" };
    return res;
  },
};
export default MockIssueAPI;

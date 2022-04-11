function sleep(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const MockLoginAPI = {
  addData: async function (url: string, credentials: any) {
    await sleep();

    console.log("Logging in... response.status:", 200);
    return {
      responseCode: 200,
      data: {
        accessToken: "absdefghijklmnpqrstuvwxyz",
        refreshToken: { token: "abcdefghijklmnopqrstuvwxyz" },
      },
    };
  },
};

export default MockLoginAPI;

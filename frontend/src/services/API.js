import httpMethods from "./httpMethods";
// export const uploadResumeAndDescription = async (resume, description) => {
//   return await httpMethods.get("/");
// };

export const uploadDescription = async (description) => {
  return await httpMethods.post("/description", { description });
};
export const uploadResumeAndDescription = async (resume, description) => {
  console.log("sending resume", resume);
  return await httpMethods.post("/upload", {
    resume,
    description,
  });
};

export const upload = async (resume) => {
  console.log("sending resume", resume);
  return await httpMethods.post("/upload", {
    resume
  });
};


export const getCorrelation = async (wordList, paragraphs) => {
  return await httpMethods.post("/similarity", {
    words: wordList,
    sentences: paragraphs,
  });
};
export const fillInResume = async (toSend) => {
  return await httpMethods.post("/insertKeys", toSend);
};
export const getFinalResume = async () => {};
export default { uploadResumeAndDescription, getFinalResume };

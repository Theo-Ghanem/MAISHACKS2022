import httpMethods from "./httpMethods";
export const uploadResumeAndDescription = async (resume, description) => {
  return await httpMethods.get("/");
};
// export const uploadResumeAndDescription = async (resume, description) => {
//   return await httpMethods.post("/upload", { resume, description });
// };
export const getFinalResume = async () => {};
export default { uploadResumeAndDescription, getFinalResume };

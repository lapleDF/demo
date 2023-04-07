import * as httpRequest from "./httpRequest";

export async function getPost() {
  return httpRequest.getHttpRequest("posts");
}

let accessToken: string | null = "";
try {
  accessToken = localStorage.getItem("access_token");
} catch (e) {
  accessToken = null;
}
export default accessToken;

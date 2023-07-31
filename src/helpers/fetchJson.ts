const fetchJson = async (url: string, init?: RequestInit) => {
  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default fetchJson;

const apiData = async () => {
  const url = "https://picsum.photos/v2/list?page=2&limit=100.json";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const json = await response.json();

    const author = json[0].author;
    console.log(author);

    return json.map((data) => ({
      id: data.id,
      author: data.author,
      image: data.download_url,
    }));
  } catch (error) {
    console.error(error.message);
  }
};

export default apiData;

const callAPI = () => {
  console.log("callAPI. Hello World!");

  const paragraph = document.getElementById("text-input");
  const output = document.getElementById("text-output");
  const text = paragraph.value;

  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      {
        headers: {
          Authorization: "Bearer xxxxxxxxxxxxxxxxxxx",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }

  query({
    inputs: text,
  }).then((response) => {
    output.innerHTML = response[0]?.summary_text
  });
};

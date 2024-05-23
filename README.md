# Huggingface Inference Api With Javascript

This website utilizes the Hugging Face API to generate image descriptions based on user-provided text input. The application is built with HTML, CSS, and JavaScript, and it leverages the `facebook/bart-large-cnn` model for generating textual summaries.

![Screenshot 2024-05-23 at 11 17 02](https://github.com/Munya-Marinda/huggingface-inference-api-with-javascript/assets/84540577/441355b9-c4ce-414d-8f12-8d91996d3bb9)


## Features

- Input a text description and get a summarized version using the Hugging Face API.
- Simple and intuitive user interface.
- Asynchronous API calls for smooth user experience.

## Requirements

- A web browser (Chrome, Firefox, Safari, etc.).
- An API token from Hugging Face.

## Usage

1. **Get your Hugging Face API token:**

   If you don't have an API token, you need to create an account on [Hugging Face](https://huggingface.co/) and obtain your API token.

2. **Clone the repository:**

   ```bash
   git clone https://github.com/Munya-Marinda/huggingface-inference-api-with-javascript
   cd fusion-image-generator-website
   ```

3. **Open the HTML file:**

   Open `index.html` in your preferred web browser.

4. **Update the API token:**

   Open the `script.js` file and replace `xxxxxxxxxxxxxxxxxxx` with your Hugging Face API token:

   ```javascript
   Authorization: "Bearer xxxxxxxxxxxxxxxxxxx",
   ```

5. **Enter text and generate summary:**

   - Enter your text into the input field.
   - Click the button to generate a summary.
   - The summarized text will be displayed below the input field.

## Example Code

Here is a snippet of the JavaScript code used in this application:

```javascript
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
    output.innerHTML = response[0]?.summary_text;
  });
};
```

## Note

- Make sure you replace the placeholder `xxxxxxxxxxxxxxxxxxx` with your actual Hugging Face API token.
- The input text provided can be any description you want to summarize.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or suggestions.

## Contact

For any questions or support, please contact [munyathedev@gmail.com].

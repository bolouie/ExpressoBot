# Demystifying the Chatbot

`ExpressoBot` is a beginner-friendly project that demonstrates how to create a simple chatbot using Python, NLTK, and activating speech-to-text with Webkit API. This chatbot allows users to interact using both text and speech input, making it more engaging and interactive.

## Table of Contents

- [Demystifying the Chatbot](#demystifying-the-chatbot)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setting Up the Server](#setting-up-the-server)
    - [Configuration](#configuration)
    - [Installation](#installation)
    - [Running the Chatbot](#running-the-chatbot)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [License](#license)

## Features

- Speech-to-text input using Webkit API
- Text-based input with a simple user interface
- Exchanging messages with JQuery AJAX
- Rule-based chatbot using NLTK's chat module and customizable response pairs
- Real-time conversation with the chatbot

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

- Python 3.x
- NLTK
- Flask (optional, if you want to deploy the chatbot as a web app)
- A server setup to host the chatbot backend (e.g., using Flask, Django, or Express.js)

### Setting Up the Server

1. Set up a server to host the chatbot backend (e.g., using Flask, Django, or Express.js). You can follow the documentation of the respective web framework for server setup.
2. Deploy the `chat.py` file on your server. This file contains the chatbot's backend logic and should be accessible via a URL on your server.

### Configuration

1. Create a `config.json` file in your project directory. This file will store the server URL for your chatbot backend.

   ```json
   {
     "serverUrl": "https://your.server.com"
   }
   ```

2. Update the getServerUrl function in script.js to load the server URL from the config.json file:

   ```
   function getServerUrl() {
       // Load the server URL from the configuration file
       const config = JSON.parse($.ajax({type: "GET", url: "config.json", async: false}).responseText);
       return config.serverUrl;
   }
   ```

```
3.
```

### Installation

1. git clone https://github.com/bolouie/expressobot.git
2. cd <PROJECT_DIRECTORY>
3. pip nstall -r requirements.txt: This command installs the Python packages specified in the requirements.txt file. The -r option tells pip to read the package list from the provided file and install them accordingly. Installing these packages ensures that your project has all the necessary dependencies to run properly.
4. (Optional) python app.py: This command starts the local Flask server (if you have set it up). It runs the app.py script, which contains the Flask application that serves your chatbot as a web app. By running this script, you start the Flask development server, which allows you to interact with the chatbot via a web browser.

   ```
   from flask import Flask, render_template

   app = Flask(__name__)

   @app.route('/')
   def chatbot():
       return render_template('<HTML_FILE_NAME>.html')

   if __name__ == '__main__':
       app.run(debug=True)
   ```

### Running the Chatbot

1. Place the chat.py file in your project directory.
2. Make sure to replace <HTML_FILE_NAME> with the name of your HTML file (without the .html extension) when setting up the Flask app in the app.py file. This way, the Flask app will correctly render the HTML file when serving the chatbot.
3. Run the Flask app to start the local server: python app.py
4. Open your web browser and navigate to http://127.0.0.1:5000

### Usage

1. Open the HTML file in a web browser or visit the deployed chatbot URL if you have set up a server.
2. Interact with the chatbot by typing your questions or statements in the input field and clicking the "Send" button, or by clicking the "Speak" button to use speech-to-text input.
3. The chatbot will respond based on its understanding of the input and the predefined rules.
4. To customize the chatbot's behavior, modify the response pairs in the chat.py file. This file contains a list of regular expressions and corresponding responses that the chatbot uses to generate its replies.

### Contributing

Any contributions to this project are greatly appreciated. To contribute:

1. Fork the repository.
2. Create a new branch with a descriptive name (e.g., fix-speech-recognition).
3. Commit your changes to the branch.
4. Create a pull request.

Please make sure to update tests as appropriate and adhere to the project's coding style.

### License

This project is licensed under the MIT License. See the LICENSE file for more information.

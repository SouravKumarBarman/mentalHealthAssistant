import os
from dotenv import load_dotenv

load_dotenv()

# OpenAI API Key
GENAI_API_KEY = os.getenv("API_KEY")

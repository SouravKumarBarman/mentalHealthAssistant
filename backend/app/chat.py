from fastapi import APIRouter
import google.generativeai as genai
#from app.utils import extract_emotion
from app.schemas import ChatRequest, ChatResponse
from app.config import GENAI_API_KEY


router = APIRouter()

@router.post("/send", response_model=ChatResponse)
async def chat_with_ai(request: ChatRequest):
    # Emotion Detection
    # emotion = extract_emotion(request.message)
    genai.configure(api_key=GENAI_API_KEY)

    # LLM Response Generation
    model = genai.GenerativeModel("gemini-1.5-flash")
    prompt =  f"You are a mental health instuructor and the user messege is: {request.message} give adequate response"
    answer = model.generate_content(prompt)

    return {"response": answer.text}

    

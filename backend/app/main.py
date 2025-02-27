from fastapi import FastAPI
from app.chat import router as chat_router

app = FastAPI(title="AI Mental Health Assistant")

# Include Chat Router
app.include_router(chat_router, prefix="/chat", tags=["Chat"])

@app.get("/")
async def root():
    return {"message": "Welcome to AI Mental Health Assistant API"}

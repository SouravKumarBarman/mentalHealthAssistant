from fastapi import FastAPI
from app.chat import router as chat_router
from fastapi.middleware.cors import CORSMiddleware


origins = [
    "*"
]



app = FastAPI(title="AI Mental Health Assistant")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Chat Router
app.include_router(chat_router, prefix="/chat", tags=["Chat"])

@app.get("/")
async def root():
    return {"message": "Welcome to AI Mental Health Assistant API"}

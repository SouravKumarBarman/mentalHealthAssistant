from transformers import pipeline

# Sentiment Analysis Model
emotion_classifier = pipeline("sentiment-analysis", model="distilbert-base-uncased", framework="pt")

def extract_emotion(text: str):
    return emotion_classifier(text)[0]["label"]

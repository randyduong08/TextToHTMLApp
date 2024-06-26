from transformers import AutoModelForSequenceClassification, AutoTokenizer
import torch
from typing import Any, Literal

class GenreModel():
    
    _instance = None
    device: Literal["cuda:0", "cpu"]
    model_path: str
    genre_model: Any
    tokenizer: Any
    GENRES: list[str] = ['gaming', 'news', 'education', 'sports']
    
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(GenreModel, cls).__new__(cls)
            cls._instance._initialized = False
        
        return cls._instance
    
    
    def __init__(self) -> None:
        if self._initialized:
            return
            
        self.device = "cuda:0" if torch.cuda.is_available() else "cpu"
        
        self.model_path = "custom_models/genre_model"
        self.tokenizer = AutoTokenizer.from_pretrained(self.model_path)
        self.genre_model = AutoModelForSequenceClassification.from_pretrained(self.model_path)
        
        self.genre_model.eval()
        self._initialized = True
    
    
    def predict(self, sequence: str) -> str:
        model_inputs = self.tokenizer(sequence, return_tensors="pt", truncation=True, padding=True)
        
        with torch.no_grad():
            logits = self.genre_model(**model_inputs).logits
        
        predictions = torch.softmax(logits, dim=-1)
        
        print(predictions)
        
        _, predicted_index = torch.max(predictions, dim=1)
        
        genre = self.GENRES[predicted_index.item()] # type: ignore
        
        return genre


def main() -> None:
    model = GenreModel()
    
    sentence = "Dragons Dogma 2 is releasing soon."
    
    genre = model.predict(sentence)
    
    print(genre)


if __name__ == "__main__":
    main()
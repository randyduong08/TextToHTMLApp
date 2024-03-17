import nltk
from nltk.corpus import stopwords
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import torch.nn as nn
import string
from typing import Any, Literal
from transformers.modeling_outputs import SequenceClassifierOutput

class SentimentModel():
    
    _instance = None
    device: Literal["cuda:0", "cpu"]
    checkpoint: str
    tokenizer: Any
    sentiment_model: Any
    sample_sentence: str
    MAX_LENGTH: int = 510
    
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(SentimentModel, cls).__new__(cls)
            cls._instance._initialized = False
        
        return cls._instance
    
    
    def __init__(self) -> None:
        if self._initialized:
            return
        
        self.device = "cuda:0" if torch.cuda.is_available() else "cpu"
        
        # define tokenizer and model to be used
        self.checkpoint = "custom_models/sentiment_model"
        
        self.tokenizer = AutoTokenizer.from_pretrained(self.checkpoint)
        
        self.sentiment_model = AutoModelForSequenceClassification.from_pretrained(self.checkpoint)
        
        try:
            stopwords.words('english')
        except LookupError:
            nltk.download('stopwords')
        
        self.stop_words = set(stopwords.words('english'))
        self._initialized = True
        
        
        
        """
        Tokenizes sequence of words into numbers
        
        Parameters:
        sequence (str): The string of words to be tokenized
        
        Returns:
        tuple[list[int], list[int]]: a tuple of inputs for the model, and corresponding attention masks for the model
        """
    def custom_tokenize(self, sequence: str) -> tuple[list[int], list[int]]:
        word_tokens: list[str] = self.tokenizer.tokenize(sequence)
        
        # Define a set of punctuations that we wouldn't want inside the word tokens
        punctuations: set[str] = set(string.punctuation)
        allowed_punctuations: list[str] = ['!', '?', '.', '/']
        for punctuation in allowed_punctuations:
            punctuations.remove(punctuation)
        
        # filter stop words and punctuations out of the word tokens
        filtered_word_tokens: list[str] = word_tokens
        filtered_word_tokens = [word for word in filtered_word_tokens if word not in self.stop_words]
        filtered_word_tokens = [word for word in filtered_word_tokens if word not in punctuations]
        
        # tokenize -- map strings to integer values
        token_ids: list[int] = self.tokenizer.convert_tokens_to_ids(filtered_word_tokens)
        
        # pad all sequences to max length
        padded_token_ids: list[int] = token_ids + [self.tokenizer.pad_token_id]*(self.MAX_LENGTH - len(token_ids)) if len(token_ids) < self.MAX_LENGTH else token_ids[:self.MAX_LENGTH]
        
        final_inputs: Any = self.tokenizer.prepare_for_model(padded_token_ids)
        
        final_token_ids: list[int] = final_inputs["input_ids"]
        
        # create attention_masks for each sequence (1 = valid token, 0 = padded token)
        attention_masks: list[int] = [int(token_id > 0) for token_id in final_token_ids]
        
        return final_token_ids, attention_masks
    
    
        """
        Runs an input of tokens through a model to get two outputs
        
        Parameters:
        final_token_ids (list[int]): list of token_ids to input into the model
        attention_masks (list[int]): corresponding list of integers (0 or 1) to notify which tokens to actually factor
        
        Returns:
        SequenceClassifierOutput: object containing information regarding the output of the model
        """
    def run_model(self, final_token_ids, attention_masks) -> SequenceClassifierOutput:
        output = self.sentiment_model(torch.tensor([final_token_ids]), attention_mask=torch.tensor([attention_masks]))
        
        return output
    
    
        """
        Normalizes output values into values between 0-1 to determine sentiment
        
        Parameters:
        output (SequenceClassifierOutput): object containing some values to be normalized
        
        Returns:
        Literal['NEGATIVE', 'POSITIVE']: string NEGATIVE or POSITIVE, representing sentiment of the output parameter
        """
    def process_output(self, output) -> Literal['NEGATIVE', 'POSITIVE']:
        sigmoid = nn.Sigmoid()
        
        normalized_output = sigmoid(output.logits)
        
        sigmoid_sentiment: str = "NEGATIVE" if normalized_output[0][0] > normalized_output[0][1] else "POSITIVE"
        
        return sigmoid_sentiment


    def save_models(self) -> None:
        model_path = "../custom_models/sentiment_model"
        self.tokenizer.save_pretrained(model_path) 
        self.sentiment_model.save_pretrained(model_path)
        
    
    def predict(self, sequence: str) -> str:
        inputs, masks = self.custom_tokenize(sequence)
        
        output = self.run_model(inputs, masks)
        
        sentiment_label = self.process_output(output)
        
        return sentiment_label       


# function containing example of how you would get a sentiment for an inputted string
def main() -> None:
    model = SentimentModel()
    sentence = "THIS IS ASS!!!!! 😡"
    
    inputs, masks = model.custom_tokenize(sentence)
    
    output: SequenceClassifierOutput = model.run_model(inputs, masks)
    
    print(model.process_output(output))
    
    model.save_models()
    
    

if __name__ == "__main__":
    main()
    
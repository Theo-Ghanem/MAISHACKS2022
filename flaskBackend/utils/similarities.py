import math
from transformers import AutoTokenizer, AutoModel
import torch
import torch.nn.functional as F
import sentence_transformers.util as util

#Mean Pooling - Take attention mask into account for correct averaging
def mean_pooling(model_output, attention_mask):
    token_embeddings = model_output[0] #First element of model_output contains all token embeddings
    input_mask_expanded = attention_mask.unsqueeze(-1).expand(token_embeddings.size()).float()
    return torch.sum(token_embeddings * input_mask_expanded, 1) / torch.clamp(input_mask_expanded.sum(1), min=1e-9)

def getVectorization(sentences):
    tokenizer = AutoTokenizer.from_pretrained('sentence-transformers/all-MiniLM-L6-v2')
    model = AutoModel.from_pretrained('sentence-transformers/all-MiniLM-L6-v2')
    encoded_input = tokenizer(sentences, padding=True, truncation=True, return_tensors='pt')
    # Compute token embeddings
    with torch.no_grad():
        model_output = model(**encoded_input)
    sentence_embeddings = mean_pooling(model_output, encoded_input['attention_mask'])
    sentence_embeddings = F.normalize(sentence_embeddings, p=2, dim=1)
    return sentence_embeddings

#Returns list of 
# Outer list = words, inner list = sentences
# [[],[]]
def getSimilarity(words,sentences):
    sentence_embeddings = getVectorization(sentences)
    words_embeddings = getVectorization(words)
    similarities = []
    for i in range(len(words_embeddings)):
        word_sims = []
        for j in range(len(sentence_embeddings)):
            sim = util.pytorch_cos_sim(sentence_embeddings[j], words_embeddings[i])[0][0].item()
            word_sims.append(sim)
        similarities.append(word_sims)
    return similarities
import os
import openai

# Load your API key from an environment variable or secret management service
openai.api_key = ''

f = open('rewriteParagraph2.txt', 'r')
content = f.read()

response = openai.Completion.create(model="text-davinci-002", prompt=content, temperature=0, max_tokens=100)

print(response)
FROM python:3.9.14-buster
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
# CMD ["flask", "run", "--host", "0.0.0.0"]
ENTRYPOINT [ "python3" ]
CMD [ "wsgi.py" ]

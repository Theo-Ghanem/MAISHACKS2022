from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
import docx2txt


def get_resume(filename):
    if filename.endswith('.docx'):
        return docx2txt.process(filename)
    else:
        with open(filename, 'r') as f:
            return f.read()


def get_similarity(text1, text2):
    vectorizer = CountVectorizer().fit_transform([text1, text2])
    vectors = vectorizer.toarray()
    return cosine_similarity(vectors)[0][1]


def main():
    resume = get_resume("test1.txt")
    # resume = get_resume("python_resume.docx")
    # jobDescription = get_resume("job_description.docx")
    jobDescription = get_resume("test2.txt")
    # jobDescription = input("Enter the job description: ")

    # A list of text
    text = [resume, jobDescription]
    cv = CountVectorizer()
    count_matrix = cv.fit_transform(text)

    # get the match percentage
    matchPercentage = cosine_similarity(count_matrix)[0][1] * 100
    matchPercentage = round(matchPercentage, 2)  # round to two decimal
    print("Your resume matches about " +
          str(matchPercentage) + "% of the job description.")


if __name__ == '__main__':
    main()

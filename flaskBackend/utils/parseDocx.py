
from os import remove
from re import I
from docx import Document
import json
import copy

def allCharactersSame(s) :
    n = len(s)
    for i in range(1, n) :
        if s[i] != s[0] :
            return False
 
    return True


def removeExtras(text): 
    return text.replace(u'\xa0', u' ')
    
def parseDocx(name):
    document = Document(name)

    # text_dct = {}
    # sub_dct = {}
    # current = {"current_header": None, "current_sub": None}

    # headerSection = []
    # specificExperience = []
    # generalSection = []

    output = []
    current = {"header": None, "content": []}
    current_sub = {"subheader": None, "description": None}


    for paragraph in document.paragraphs: 
        print(paragraph.style.name)
        print(paragraph.text+'\n')
        if paragraph.style.name.startswith('Heading 1'):
            if current["header"] is None:
                current["header"] = paragraph.text
            else:
                print(current["header"] + " new header " + paragraph.text)
                current["content"].append(copy.deepcopy(current_sub))
                current_sub["subheader"] = None
                current_sub["description"] = None
                output.append(copy.deepcopy(current))
                current["header"] = paragraph.text
                current["content"] = []

        elif paragraph.style.name.startswith('Heading 2'): 
            if current_sub["subheader"] is None:
                current_sub["subheader"] = removeExtras(paragraph.text)
            else: 
                print("current " + current_sub["subheader"])
                current["content"].append(copy.deepcopy(current_sub))
                current_sub["subheader"] = removeExtras(paragraph.text)
                current_sub["description"] = None

        elif paragraph.style.name.startswith('Normal'): 
            if allCharactersSame(paragraph.text): 
                continue
            elif current["header"] is None: 
                continue
            elif current_sub["description"] is None: 
                current_sub["description"] = ""
            current_sub["description"] = current_sub["description"] + removeExtras(paragraph.text) + '\n'
    current["content"].append(copy.deepcopy(current_sub))
    output.append(copy.deepcopy(current))
    return output

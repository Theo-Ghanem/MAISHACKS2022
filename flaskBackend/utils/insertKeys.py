



def getRequest(words,paragraph):
    startText = "Add "
    endText = " into the paragraph:"
    seperator = ", "
    joined = seperator.join(words)
    out = paragraph + "\n\n" + startText + joined + endText
    return out
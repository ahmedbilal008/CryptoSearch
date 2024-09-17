import nltk 
from newspaper import Article

nltk.download('punkt')

def summarize_article(url):
    article = Article(url)
    article.download()
    article.parse()
    article.nlp()

    summary_data = {
        'authors': article.authors,
        'publish_date': article.publish_date,
        'title': article.title,
        'summary': article.summary
    }
    return summary_data

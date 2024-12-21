from flask import Flask, request, jsonify
from textblob import TextBlob
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Разрешает CORS для всех маршрутов


@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    text = data.get('text', '')
    blob = TextBlob(text)
    return jsonify({
        'score': blob.sentiment.polarity,
        'magnitude': blob.sentiment.subjectivity
    })

if __name__ == '__main__':
    app.run(port=5137)  
   

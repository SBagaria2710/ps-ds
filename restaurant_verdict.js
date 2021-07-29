const reviews = ["This restaurant was good", 'bad', 'asdf asdf as good', 'was bad', 'bad', 'good', 'good'];
const keywords = ['bad', 'better', 'good'];

function getVerdict(sentences, keywords) {
  const keywordMap = keywords.reduce((acc, word) => acc.set(word, 0), new Map());
  let result = '';
  sentences.forEach(sentence => {
    sentence.split(' ').forEach(word => {
      if (keywordMap.has(word)) {
        keywordMap.set(word, keywordMap.get(word) + 1);
        if (result) {
          result = keywordMap.get(word) > keywordMap.get(result) ? word : result;
        } else {
          result = word;
        }
      }
    });
  });
  return result;
}

getVerdict(reviews, keywords);
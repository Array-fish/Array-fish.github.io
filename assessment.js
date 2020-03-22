'use strict';
const userNameInput= document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  if(userName.length === 0){
    return;
  }
  removeAllChildren(resultDivided);
  const header=document.createElement('h3');
  header.innerText = '診断結果';
  resultDivided.appendChild(header);
  
  const paragraph = document.createElement('p');
  const result = assessment(userName);
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);

  removeAllChildren(tweetDivided);
  const tweet_parag = document.createElement('p');
  tweet_parag.innerText = 'テキスト';
  tweetDivided.appendChild(tweet_parag);
}
const answers = [
  '{userName}のいいところは頭です。{userName}は天才。',
  '{userName}のいいところは顔です。{userName}はイケメン。',
  '{userName}のいいところは手です。{userName}は幅広い音階をカバー出来ます。',
  '{userName}のいいところは指です。{userName}の指は細く長いです。',
  '{userName}のいいところは爪です。{userName}は桜貝のよう。',
  '{userName}のいいところは目です。{userName}の視力は2.0。',
  '{userName}のいいところは腕です。{userName}は達人です。',
  '{userName}のいいところは肩です。{userName}の球速は150 km/h。',
  '{userName}のいいところは瞳です。{userName}の瞳孔が開いている。',
  '{userName}のいいところは毛です。{userName}の毛はたくさん。',
  '{userName}のいいところはまつ毛です。{userName}はまつ毛が長い。'
]
/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */
function assessment(userName){
  // TODO: 診断処理を実装する
  let sumOfCharCode =0;
  for(let i=0;i<userName.length;i++){
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  const idx = sumOfCharCode % answers.length;
  let result = answers[idx];
  result = result.replace(/\{userName\}/g,userName);

  // TODO:replace {userName}
  return result;
}
/**
 * 指定した要素の子供を全て削除する
 * @param {htmlElement} element HTMLの要素
 */
function removeAllChildren(element){
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
}
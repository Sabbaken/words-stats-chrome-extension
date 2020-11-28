/*global chrome*/

import React, { useEffect } from 'react';
import Circle from 'react-circle';
import './styles/main.scss'
import Card from './components/card';
import { processPage } from './store/actions/textActions';

import { useDispatch, useSelector } from 'react-redux';

export const fetchPageText = (callback) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let currentTab = tabs[0];
    chrome.tabs.sendMessage(currentTab.id, { type: "getPage" }, {}, function (response) {
      callback(response);
    })
  });
}

const App = () => {
  const percentage = useSelector(state => state.text.percentage)
  const uniqueWordsInTotal = useSelector(state => state.text.uniqueWordsInTotal)
  const wordsInTotal = useSelector(state => state.text.wordsInTotal)

  // Не очень красиво но почему-то из action creator нельзя обратиться к chrome
  const callback = (response) => {
    processCurrentPage(response)
  }

  const dispatch = useDispatch();
  const processCurrentPage = (response) => dispatch(processPage(response));

  useEffect(() => {
    fetchPageText(callback);
  }, []);

  return (
    <div className="App">
      <Card title={"Общая информация"}>
        <p className="text text-secondary"><span
          className="text text-primary">Всего слов:</span> {wordsInTotal}</p>
        <p className="text text-secondary"><span
          className="text text-primary">Уникальных слов:</span> {uniqueWordsInTotal}</p>
      </Card>

      <Card title={"График"}>
        <Circle progress={(percentage * 100).toFixed(2)}/>
      </Card>
    </div>
  );
}

export default App;

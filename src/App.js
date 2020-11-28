/*global chrome*/

import React, { Component, useEffect } from 'react';
import './styles/main.scss'
import Card from './components/card';

const fetchPageText = () => {
  let query = { active: true, currentWindow: true };

  function callback(tabs) {
    var currentTab = tabs[0]; // there will be only one in this array
    console.log(currentTab); // also has properties like currentTab.id

    chrome.tabs.sendMessage(currentTab.id, {type: "getPage"}, {},  function (response) {
      console.log(response)
    })
  };

  chrome.tabs.query(query, callback);
}

const App = () => {
  useEffect(()=>{
   fetchPageText();
  }, []);

    return (
      <div className="App">
        <Card title={"Общая информация"}>
          Whatever
        </Card>

        <Card title={"График"}>
          Whatever 2
        </Card>
      </div>
    );
}

export default App;

import React, {useEffect} from 'react';
import Tts from 'react-native-tts';
import {options} from '../Constants/speakOptions';

const useTts = (language?: string) => {
  useEffect(() => {
    Tts.setDefaultLanguage('tr-TR');
    // Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
    Tts.getInitStatus().then(
      () => {},
      err => {
        if (err.code === 'no_engine') {
          Tts.requestInstallEngine();
        }
      },
    );
    //   Tts.voices().then(voices => console.log(voices));
  }, []);
  const speak = (text: string) => {
    Tts.speak(text, options);
  };
  return {speak};
};

export default useTts;

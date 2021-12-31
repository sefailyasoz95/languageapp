import React, {useEffect} from 'react';
import Tts from 'react-native-tts';
import {options} from '../Constants/speakOptions';

const useTts = (language?: string) => {
  useEffect(() => {
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
  const speakTR = async (text: string) => {
    await Tts.setDefaultLanguage('tr-TR');
    Tts.speak(text, options);
  };
  const speakEN = async (text: string) => {
    await Tts.setDefaultLanguage('en-US');
    Tts.speak(text, options);
  };
  return {speakTR, speakEN};
};

export default useTts;

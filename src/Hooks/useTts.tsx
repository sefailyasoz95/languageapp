import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import Tts from 'react-native-tts';
import {options, optionsTR} from '../Constants/speakOptions';

const useTts = () => {
  useEffect(() => {
    Tts.setDucking(true);
    // Tts.addEventListener('tts-start', async event => {
    //   console.log('start: ', event);
    // });
    // Tts.addEventListener('tts-progress', async event => {
    //   console.log('progress: ', event);
    // });
    // Tts.addEventListener('tts-finish', async event => {
    //   console.log('finish: ', event);
    // });
    // Tts.addEventListener('tts-cancel', event => console.log('cancel', event));
    Tts.getInitStatus().then(
      () => {},
      err => {
        if (err.code === 'no_engine') {
          console.log('err: ', err);

          Tts.requestInstallEngine();
          Tts.requestInstallData();
        }
      },
    );
    // Tts.voices().then(voices => console.log(voices));
    // Tts.engines().then(engines => console.log('engines: ', engines));
  }, []);
  const speakTR = async (text: string) => {
    Platform.OS === 'android'
      ? await Tts.setDefaultVoice('tr-TR-language').then(async res => {
          Tts.speak(text, optionsTR);
        })
      : await Tts.setDefaultLanguage('tr-TR').then(async res => {
          Tts.speak(text, optionsTR);
        });
  };
  const speakEN = async (text: string) => {
    Platform.OS === 'android'
      ? await Tts.setDefaultVoice('en-us-x-tpf-local').then(async res => {
          Tts.speak(text, options);
        })
      : await Tts.setDefaultLanguage('en-US').then(async res => {
          Tts.speak(text, options);
        });
  };
  return {speakTR, speakEN};
};

export default useTts;

// com.apple.ttsbundle.Samantha-compact

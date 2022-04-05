import {useEffect, useState} from 'react';
import Voice from '@react-native-voice/voice';

const useSpeechToText = () => {
  const [error, setError] = useState('');
  const [isRecognizing, setIsRecognizing] = useState(0);
  const [results, setResults] = useState(null);
  const [isSpeechRecognitionSupported, setIsSpeechRecognitionSupported] =
    useState(true);

  const onSpeechStart = async (e: any) => {
    // await checkIfRecognizing('onSpeechStart');
    setIsRecognizing(1);
  };
  const onSpeechError = (e: any) => {
    console.log('onSpeechError:', e);
    // setError(JSON.stringify(e.error));
  };
  const onSpeechResults = async (e: any) => {
    let x = e.value;
    console.log('x: ', x);
    // 203/The operation couldn’t be completed. (kAFAssistantErrorDomain error 203. bak buna
    setResults(x[0]);
    if (!isRecognizing) {
      // await checkIfRecognizing('onSpeechResults');
      setTimeout(async () => {
        await stopRecognizing();
        setIsRecognizing(0);
      }, 500);
    }
  };

  const onSpeechRecognized = (e: any) => {
    console.log('onSpeechRecognized: ', e);
  };

  const startRecognizing = async () => {
    try {
      setError('');
      setResults(null);
      await Voice.start('tr-TR');
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };
  const isSupporting = async () => {
    let result = await Voice.getSpeechRecognitionServices();
    console.log('issupporting result: ', result);
  };
  useEffect(() => {
    //Setting callbacks for the process status
    isSupporting();
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechRecognized = onSpeechRecognized;

    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return {
    isRecognizing,
    isSpeechRecognitionSupported,
    startRecognizing,
    results,
  };
};

export default useSpeechToText;

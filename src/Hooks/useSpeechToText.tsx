import {useEffect, useState} from 'react';
import Voice from '@react-native-voice/voice';

const useSpeechToText = () => {
  const [error, setError] = useState('');
  const [isRecognizing, setIsRecognizing] = useState(0);
  const [results, setResults] = useState(null);
  const [isSpeechRecognitionSupported, setIsSpeechRecognitionSupported] =
    useState(true);
  const checkIfRecognizing = async () => {
    let result = await Voice.isRecognizing();
    result !== isRecognizing && setIsRecognizing(result);
  };
  const onSpeechStart = async (e: any) => {
    await checkIfRecognizing();
  };
  const onSpeechError = (e: any) => {
    console.log('onSpeechError: ', e);
    // setError(JSON.stringify(e.error));
  };
  const onSpeechResults = async (e: any) => {
    let x = e.value;
    setResults(x[0]);
    if (!isRecognizing) {
      checkIfRecognizing();
      stopRecognizing();
    }
  };

  const onSpeechRecognized = (e: any) => {
    console.log('onSpeechRecognized: ', e);
    checkIfRecognizing();
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
      await checkIfRecognizing();
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

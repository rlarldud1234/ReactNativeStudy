import React, {useEffect, useRef} from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import logsSotrage from '../storages/logsSotrage';

const LogContext = createContext('안녕하세요');

export const LogContextProvider = ({children}) => {
  const initalLogsRef = useRef(null);
  const [logs, setLogs] = useState(
    Array.from({length: 10})
      .map((_, index) => ({
        id: uuidv4(),
        title: `Log ${index}`,
        body: `Log ${index}`,
        date: new Date().toISOString(),
      }))
      .reverse(),
  );

  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };
  const onModify = modified => {
    const nextLogs = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLogs);
  };
  const onRemove = id => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };

  useEffect(() => {
    (async () => {
      const savedLogs = await logsSotrage.get();
      if (savedLogs) {
        initalLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);

  useEffect(() => {
    if (logs === initalLogsRef.current) {
      return;
    }
    logsSotrage.set(logs);
  }, [logs]);

  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;

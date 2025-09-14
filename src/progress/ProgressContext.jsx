import React, { createContext, useContext, useEffect, useState } from "react";

const ProgressCtx = createContext(null);
const STORAGE_KEY = "escape-progress";

export function ProgressProvider({ children }) {
  const [highestLevel, setHighestLevel] = useState(0);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        if (typeof data.highestLevel === "number") setHighestLevel(data.highestLevel);
        if (typeof data.attempts === "number") setAttempts(data.attempts);
      }
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ highestLevel, attempts }));
  }, [highestLevel, attempts]);

  function addAttempt(n = 1) {
    setAttempts((a) => a + n);
  }

  function completeLevel(levelNumber) {
    setHighestLevel((prev) => (levelNumber > prev ? levelNumber : prev));
  }

  function resetProgress() {
    setHighestLevel(0);
    setAttempts(0);
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <ProgressCtx.Provider value={{ highestLevel, attempts, addAttempt, completeLevel, resetProgress }}>
      {children}
    </ProgressCtx.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressCtx);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}

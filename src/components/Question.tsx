import React from 'react';
import { Button } from './Button';

interface QuestionProps {
  question: string;
  onAnswer: (answer: boolean | null) => void;
}

export function Question({ question, onAnswer }: QuestionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">{question}</h2>
      <div className="flex gap-4">
        <Button onClick={() => onAnswer(true)} variant="primary">Sí</Button>
        <Button onClick={() => onAnswer(false)} variant="primary">No</Button>
        <Button onClick={() => onAnswer(null)} variant="secondary">No sé</Button>
      </div>
    </div>
  );
}
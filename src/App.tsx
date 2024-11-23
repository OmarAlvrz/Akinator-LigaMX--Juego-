import React, { useState, useCallback, useMemo } from 'react';
import { Brain } from 'lucide-react';
import { Question } from './components/Question';
import { Result } from './components/Result';
import { teams, Team } from './data/teams';
import { questions } from './utils/questions';

type Answer = {
  questionId: string;
  answer: boolean | null;
};

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [possibleTeams, setPossibleTeams] = useState(teams);
  const [result, setResult] = useState<Team | null>(null);

  // Función para evaluar si una pregunta es relevante para los equipos posibles actuales
  const isQuestionRelevant = useCallback((question: typeof questions[0], teams: Team[]) => {
    const trueResult = teams.some(team => question.evaluate(team));
    const falseResult = teams.some(team => !question.evaluate(team));
    // Una pregunta es relevante si puede dividir el conjunto de equipos
    return trueResult && falseResult;
  }, []);

  // Obtener la siguiente pregunta relevante
  const nextRelevantQuestion = useMemo(() => {
    const answeredQuestionIds = new Set(answers.map(a => a.questionId));
    return questions
      .filter(q => !answeredQuestionIds.has(q.id)) // Filtrar preguntas ya respondidas
      .find(q => isQuestionRelevant(q, possibleTeams));
  }, [possibleTeams, answers, isQuestionRelevant]);

  const handleAnswer = useCallback((answer: boolean | null) => {
    const currentQuestion = nextRelevantQuestion;
    
    if (!currentQuestion) {
      setResult(possibleTeams[0]);
      return;
    }

    setAnswers(prev => [...prev, { questionId: currentQuestion.id, answer }]);

    if (answer !== null) {
      setPossibleTeams(prev => 
        prev.filter(team => currentQuestion.evaluate(team) === answer)
      );
    }

    // Si solo queda un equipo o no hay más preguntas relevantes, mostrar resultado
    if (possibleTeams.length === 1 || !nextRelevantQuestion) {
      setResult(possibleTeams[0]);
    }
  }, [nextRelevantQuestion, possibleTeams]);

  const handleReset = useCallback(() => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setPossibleTeams(teams);
    setResult(null);
  }, []);

  const handleCorrect = useCallback((correct: boolean) => {
    if (correct) {
      alert('¡Excelente! He adivinado correctamente.');
    } else {
      alert('¡Lo siento! Intentaré mejorar mis predicciones.');
    }
    handleReset();
  }, [handleReset]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Brain className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Adivina tu Equipo de la Liga MX
          </h1>
          <p className="text-lg text-gray-600">
            Piensa en un equipo y responde las preguntas para ver si puedo adivinarlo
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {result ? (
            <Result team={result} onReset={handleReset} onCorrect={handleCorrect} />
          ) : nextRelevantQuestion ? (
            <Question 
              question={nextRelevantQuestion.text} 
              onAnswer={handleAnswer}
            />
          ) : (
            <div className="text-center">
              <p className="text-lg text-gray-700">
                No hay más preguntas relevantes para filtrar los equipos restantes.
              </p>
              <button
                onClick={() => setResult(possibleTeams[0])}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Ver resultado
              </button>
            </div>
          )}
        </div>
        {answers.length > 0 && !result && (
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Preguntas respondidas: {answers.length}
            </p>
            <p className="text-gray-600">
              Equipos posibles: {possibleTeams.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
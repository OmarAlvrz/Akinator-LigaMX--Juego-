import React from 'react';
import { Team } from '../data/teams';
import { Button } from './Button';

interface ResultProps {
  team: Team;
  onReset: () => void;
  onCorrect: (correct: boolean) => void;
}

export function Result({ team, onReset, onCorrect }: ResultProps) {
  return (
    <div className="space-y-6">
      <div className="aspect-video w-full max-w-2xl mx-auto overflow-hidden rounded-xl">
        <img 
          src={team.imageUrl} 
          alt={team.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">
          ¿Tu equipo es {team.name}?
        </h2>
        
        <div className="flex gap-4 justify-center">
          <Button onClick={() => onCorrect(true)}>
            ¡Sí, es correcto!
          </Button>
          <Button 
            variant="secondary"
            onClick={() => onCorrect(false)}
          >
            No, ese no es
          </Button>
        </div>
        
        <div className="pt-8">
          <Button variant="secondary" onClick={onReset}>
            Empezar de nuevo
          </Button>
        </div>
      </div>
    </div>
  );
}
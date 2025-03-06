import { History, Clock } from 'lucide-react';

interface GameHistoryProps {
  history: Array<{
    winner: string | null;
    board: Array<string | null>;
    date: Date;
  }>;
}

const GameHistory: React.FC<GameHistoryProps> = ({ history }) => {
  // Format date to a readable string
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(date);
  };

  // Get result text based on winner
  const getResultText = (winner: string | null) => {
    return winner ? `Player ${winner} won` : "Draw";
  };

  // Get appropriate color class based on winner
  const getResultColorClass = (winner: string | null) => {
    if (winner === 'X') return 'text-indigo-600';
    if (winner === 'O') return 'text-purple-600';
    return 'text-gray-600';
  };

  return (
    <div data-testid="game-history" className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold flex items-center gap-2">
        <History className="w-5 h-5" /> Game History
      </h2>
      {history.length === 0 ? (
        <p className="text-gray-500">No game history available.</p>
      ) : (
        <ul className="mt-2 space-y-2">
          {history.map((game, index) => (
            <li key={index} className={`p-2 rounded-md ${getResultColorClass(game.winner)}`}>
              <span className="block font-semibold">{getResultText(game.winner)}</span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="w-4 h-4" /> {formatDate(game.date)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GameHistory;


import { Link } from 'react-router-dom';
import CharacterForm from './CharacterForm';

export default function CharacterPage() {
  return <div>
    <h2 className='text-2xl font-bold text-white md-2 text-center'>Character Page</h2>
    <p className='text-zinc-400 text-center'> Fast and easy character creation </p>

    <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-6">
    <Link className="bg-zinc-800 hover:bg-zinc-700 transition p-16 rounded-xl text-center shadow-lg text-lg font-bold min-h-48 w-full" to="/character/characterCreate">
      Create New Character
    </Link>

    <Link className="bg-zinc-800 hover:bg-zinc-700 transition p-16 rounded-xl text-center shadow-lg text-lg font-bold min-h-48 w-full" to="/character/characterList">
      View Character List
    </Link>

  </div>
</div>;
}
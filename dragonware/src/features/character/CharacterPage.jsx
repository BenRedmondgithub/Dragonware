import { Link } from 'react-router-dom';
import CharacterForm from './CharacterForm';

export default function CharacterPage() {
  return <div>
    
    <h1>Character Page</h1>
    <p> Fast and easy character creation </p>

    <Link className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block" to="/character/characterCreate">
      Create New Character
    </Link>

    <Link className="bg-green-500 text-white px-4 py-2 rounded mt-4 inline-block ml-4" to="/character/characterList">
      View Character List
    </Link>

  </div>
}
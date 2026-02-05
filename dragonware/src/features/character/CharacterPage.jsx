import { Link } from 'react-router-dom';
import CharacterForm from './CharacterForm';

export default function CharacterPage() {
  return <div>
    <h1>Character Page</h1>
    <p> Fast and easy character creation </p>
    <CharacterForm />
    </div>;
}
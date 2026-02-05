import DiceRoller from './DiceRoller';

export default function DicePage() {
	return (
		<div>
			<h1 className='display-center text-white-500' >Dice Roller</h1>
			<p>Roll any dice combo with quick presets for your favorite checks.</p>
			<DiceRoller />
		</div>
	)
}

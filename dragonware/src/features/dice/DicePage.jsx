import DiceRoller from './DiceRoller';

export default function DicePage() {
	return (
		<div>
			<h1 className='text-4xl font-bold text-white-500 text-center'>Dice Roller</h1>
			<p className='text-center text-zinc-400'>Roll any dice combo with quick presets for your favorite checks.</p>
			<div className='flex justify-center mt-4 text-center'>
				<DiceRoller />
			</div>
		</div>
	)
}

import { h } from 'preact';
import { Button } from '../../stories/Button';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<div class={style.container}>
			<Button primary={true} label={'Primary Button'} size={'large'} />
			<Button label={'Secondary Button'} size={'large'} />
			<Button label={'Small Button'} size={'small'} />
		</div>
	</div>
);

export default Home;

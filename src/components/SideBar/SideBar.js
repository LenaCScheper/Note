
import css from './SideBar.module.css';
import s from './SideBar.module.css'
import {BiTresh} from 'react-icons';
import {BiPlus} from 'react-icons';
import {BiPencilMedical} from 'react-icons';
import {BiSearch} from 'react-icons';

 function SideBar() {
	return (
		<div className={s.container}>
			<button className={css.button}>
				<BiPlus className={css.icon}/>
			</button>
			<button className={css.button}>
				<BiTresh className={css.icon}/>
			</button>
			<button className={css.button}>
				<BiPencilMedical className={css.icon}/>
			</button>
			<button>
				<BiSearch className={css.icon} />
			</button>
		</div>
	);
}

export default SideBar
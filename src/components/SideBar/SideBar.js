import React from 'react';

export function SideBar() {
	return (
		<div>
			<button>
				<svg class='icon-plus' width='14' height='14'>
					<use href='./images/symbol-defs.svg#icon-plus'></use>
				</svg>
			</button>
			<button>
				<svg class='icon-bin' width='14' height='14'>
					<use href='./images/symbol-defs.svg#icon-bin'></use>
				</svg>
			</button>
			<button>
				<svg class='icon-pencil' width='14' height='14'>
					<use href='./images/symbol-defs.svg#icon-pencil'></use>
				</svg>
			</button>
			<button>
				<svg class='icon-search' width='14' height='14'>
					<use href='./images/symbol-defs.svg#icon-search'></use>
				</svg>
			</button>
		</div>
	);
}

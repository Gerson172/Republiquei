import React from 'react';

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limite, total, offset, setOffset }: any) => {
	const current = offset ? offset / limite + 1 : 1;
	const pages = Math.ceil(total / limite);
	const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
	const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst);

	function onPageChange(page: any) {
		setOffset((page - 1) * limite);
	}

	return (
		<ul className="pagination">
			<li>
				<button
					onClick={() => onPageChange(current - 1)}
					disabled={current === 1}
				>
					Anterior
				</button>
			</li>
			{Array.from({ length: Math.min(MAX_ITEMS, pages) })
				.map((_, index) => index + first)
				.map((page) => (
					<li key={page}>
						<button
							onClick={() => onPageChange(page)}
							className={`${page === current ? 'bg-sky-500 ' : null}`}
						>
							{page}
						</button>
					</li>
				))}
			<li>
				<button
					onClick={() => onPageChange(current + 1)}
					disabled={current === pages}
				>
					Próxima
				</button>
			</li>
		</ul>
	);
};

export default Pagination;

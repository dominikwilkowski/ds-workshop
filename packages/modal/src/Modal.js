import { useState, useEffect, useRef, Fragment } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';

import { Button } from '@ds-workshop/button';
import { Type } from '@ds-workshop/type';

export function Modal({ isOpen, onClose, children, title, header: Header, controls, ...props }) {
	const [isLoading, setIsLoading] = useState(false);
	const [wrapper] = useState(() => {
		if (typeof document !== 'undefined') {
			return document.createElement('div');
		}
	});

	useEffect(() => {
		const onKeyUp = (event) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};

		document.body.appendChild(wrapper);
		document.addEventListener('keyup', onKeyUp);
		return () => {
			setIsLoading(false);
			document.body.removeChild(wrapper);
			document.removeEventListener('keyup', onKeyUp);
			document.body.style.overflow = 'initial';
		};
	}, []);

	useEffect(() => {
		if (isOpen) {
			setIsLoading(false);
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'initial';
		}
	}, [isOpen]);

	const handleOutsideClick = (event) => {
		if (event.target === event.currentTarget && !isLoading) {
			onClose();
		}
	};

	const wrapCallback = (callback) => {
		if (typeof callback === 'function') {
			setIsLoading(true);
			callback();
		}
	};

	if (isOpen) {
		return createPortal(
			<FocusLock returnFocus>
				<div
					css={{
						position: 'fixed',
						top: 0,
						right: 0,
						bottom: 0,
						left: 0,
						display: 'grid',
						alignItems: 'center',
						justifyItems: 'center',
						zIndex: 100,
						background: 'var(--shadow1)',
					}}
					onClick={handleOutsideClick}
				>
					<div
						css={{
							display: 'flex',
							flexFlow: 'column nowrap',
							width: '480px',
							maxHeight: 'calc(100vh - 1em)',
							borderRadius: '12px',
							padding: '1.5rem 0',
							background: 'var(--app-bg)',
							textAlign: 'center',
							overflow: 'hidden',
							boxShadow: 'var(--shadow1) 0 4px 16px',
							zIndex: 101,
						}}
						{...props}
					>
						<div css={{ padding: '0 1.5rem' }}>
							{Header && Header}
							{title && (
								<Type as="h2" look="heading24" css={{ margin: '0.5rem 0' }}>
									{title}
								</Type>
							)}
						</div>
						<div
							css={{
								overflow: 'auto',
								padding: '0 1.5rem',
								background:
									'linear-gradient(var(--app-bg) 33%, var(--app-bg)),' +
									'linear-gradient(var(--app-bg), var(--app-bg) 66%) 0 100%,' +
									'radial-gradient(farthest-side at 50% 0, var(--shadow1), var(--shadow2)),' +
									'radial-gradient(farthest-side at 50% 100%, var(--shadow1), var(--shadow2)) 0 100%',
								backgroundColor: 'var(--app-bg)',
								backgroundRepeat: 'no-repeat',
								backgroundAttachment: 'local, local, scroll, scroll',
								backgroundSize: '100% 45px, 100% 45px, 100% 15px, 100% 15px',
							}}
						>
							{children}
						</div>
						<div
							css={{
								display: 'inline-flex',
								gap: '0.5rem',
								marginTop: '1rem',
								padding: '0 1.5rem',
								...controls.styles,
							}}
						>
							{controls.confirm && (
								<Button
									onClick={() => wrapCallback(controls.confirm.onClick)}
									look={controls.confirm.look}
									loading={controls.confirm.loading}
								>
									{controls.confirm.label}
								</Button>
							)}
							{controls.cancel && (
								<Button
									onClick={() => wrapCallback(controls.cancel.onClick)}
									look={controls.cancel.look || 'soft'}
									loading={controls.cancel.loading}
								>
									{controls.cancel.label}
								</Button>
							)}
						</div>
					</div>
				</div>
			</FocusLock>,
			wrapper
		);
	} else {
		return null;
	}
}

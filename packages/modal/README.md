---
title: The modal package
description: This is what the modal package is meant to do and why we have it
---

## A normal confirmation modal

The modal is typically used to confirm a thing.

```jsx live
const [open, setOpen] = useState(false);

const controls = {
	confirm: { label: 'Ok', onClick: () => {} },
	cancel: { label: 'Cancel', onClick: () => setOpen(false) },
};

return (
	<Fragment>
		<Button look="text" onClick={() => setOpen(!open)}>
			Open modal
		</Button>

		<Modal title="Please confirm" isOpen={open} controls={controls} onClose={() => setOpen(false)}>
			Contents
		</Modal>
	</Fragment>
);
```

## Styling

You can make changes to the styling of the controls of the modal itself.
You can also add an illustration or other components above the title.

```jsx live
const [open, setOpen] = useState(false);

const controls = {
	cancel: { label: 'Ok', look: 'danger', onClick: () => setOpen(false) },
	styles: {
		justifyContent: 'end',
	},
};

return (
	<Fragment>
		<Button look="text" onClick={() => setOpen(!open)}>
			Open modal
		</Button>

		<Modal
			title="Please confirm"
			isOpen={open}
			controls={controls}
			onClose={() => setOpen(false)}
			header={<Illustration />}
			css={{
				border: '3px red dashed',
			}}
		>
			This is where your contents goes.
		</Modal>
	</Fragment>
);
```

## Async actions

You may have async things to do on confirm and the modal supports this. It will disable the click on background to close as well during which time you're executing your thing.

```jsx live
const [open, setOpen] = useState(false);
const [isLoading, setLoading] = useState(false);

function confirmEdit() {
	setLoading(true);
	setTimeout(() => {
		setLoading(false);
		setOpen(false);
	}, 2000);
}

const controls = {
	confirm: { label: 'Ok', onClick: confirmEdit, loading: isLoading },
	cancel: { label: 'Cancel', onClick: () => setOpen(false) },
	styles: {
		justifyContent: 'end',
	},
};

return (
	<Fragment>
		<Button look="text" onClick={() => setOpen(!open)}>
			Open modal
		</Button>

		<Modal title="Please confirm" isOpen={open} controls={controls} onClose={() => setOpen(false)}>
			Contents
		</Modal>
	</Fragment>
);
```

## Long text modal

This is what the modal looks like when the content of the modal is larger than the window.

```jsx live
const [open, setOpen] = useState(false);

const controls = {
	confirm: { label: 'Ok', onClick: () => {} },
	cancel: { label: 'Cancel', onClick: () => setOpen(false) },
};

return (
	<Fragment>
		<Button look="text" onClick={() => setOpen(!open)}>
			Open modal
		</Button>

		<Modal title="Please confirm" isOpen={open} controls={controls} onClose={() => setOpen(false)}>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
		</Modal>
	</Fragment>
);
```

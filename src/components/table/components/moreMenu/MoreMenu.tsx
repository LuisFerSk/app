import { Icon } from '@iconify/react'
import { useRef, useState } from 'react'
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill'

import { Menu, IconButton, } from '@mui/material'

interface TableMoreMenuProps {
	children: JSX.Element
}

export default function MoreMenu(props: TableMoreMenuProps) {
	const { children } = props

	const ref = useRef(null)
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<>
			<IconButton ref={ref} onClick={() => setIsOpen(true)}>
				<Icon icon={moreVerticalFill} width={20} height={20} />
			</IconButton>
			<Menu
				open={isOpen}
				anchorEl={ref.current}
				onClose={() => setIsOpen(false)}
				PaperProps={{
					sx: { width: 200, maxWidth: '100%' }
				}}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			>
				{children}
			</Menu>
		</>
	)
}
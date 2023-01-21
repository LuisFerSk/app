import { useContext } from 'react';
import { IconButton, TableCell, Tooltip, useTheme } from '@mui/material'
import { Icon } from '@iconify/react';
import trash2Outline from '@iconify/icons-eva/trash-2-outline'
import editFill from '@iconify/icons-eva/edit-fill'
import baselineRemoveRedEye from '@iconify/icons-ic/baseline-remove-red-eye'

import { FloatAlert, Modal, Table } from '../../../../../components';
import { AlertContext, ModalContext } from '../../../../../context';
import ProductUpdate from '../productUpdate/ProductUpdate';
import ProductDelete from '../productDelete/ProductDelete';
import { HeadLabelInterface, ProductType } from '../../../../../interfaces';
import ProductView from '../productView/ProductView';
import { condition } from '../../../../../constants';

const headLabel: HeadLabelInterface[] = [
    { id: 'id', label: 'Id', alignRight: false },
    { id: 'serial', label: 'Serial', alignRight: false },
    { id: 'condition', label: 'Condition', alignRight: false },
    { id: '', label: '' },
    { id: '', label: '' },
    { id: '', label: '' },
]

interface Props {
    products: ProductType[]
}

export default function TableProduct(props: Props) {
    const { products } = props;

    const theme = useTheme()

    const modalContext = useContext(ModalContext)
    const alertContext = useContext(AlertContext)

    function createTableCells(row: ProductType) {
        const { id, serial } = row;

        return (
            <>
                <TableCell align='left'>{id}</TableCell>
                <TableCell align='left'>{serial}</TableCell>
                <TableCell align='left'>{condition[row.condition]}</TableCell>
                <TableCell padding='checkbox'>
                    <IconButton
                        sx={{ mr: 1, color: 'text.primary' }}
                        onClick={() => {
                            modalContext.setTitle('Product')
                            modalContext.setChildren(<ProductView product={row} />)
                            modalContext.open()
                        }}
                    >
                        <Tooltip title="To select">
                            <Icon color={theme.palette.info.main} icon={baselineRemoveRedEye} width={24} height={24} />
                        </Tooltip>
                    </IconButton >
                </TableCell>
                <TableCell padding='checkbox'>
                    <IconButton
                        sx={{ mr: 1, color: 'text.primary' }}
                        onClick={() => {
                            modalContext.setTitle(`Update product: ${serial}`)
                            modalContext.setChildren(<ProductUpdate product={row} />)
                            modalContext.open()
                        }}
                    >
                        <Tooltip title="Edit">
                            <Icon color={theme.palette.primary.main} icon={editFill} width={24} height={24} />
                        </Tooltip>
                    </IconButton >
                </TableCell>
                <TableCell padding='checkbox'>
                    <IconButton
                        sx={{ mr: 1, color: 'text.primary' }}
                        onClick={() => {
                            modalContext.setTitle(`Remove product: ${serial}`)
                            modalContext.setChildren(<ProductDelete id={id} serial={serial} />)
                            modalContext.open()
                        }}
                    >
                        <Tooltip title="Delete">
                            <Icon color={theme.palette.error.main} icon={trash2Outline} width={24} height={24} />
                        </Tooltip>
                    </IconButton >
                </TableCell>
            </>
        )
    }

    return (
        <>
            <Table
                createTableCells={createTableCells}
                headLabel={headLabel}
                data={products}
                selectBy='serial'
                searchBy='serial'
                placeholder='Search by serial'
            />
            <Modal title={modalContext.title} isOpen={modalContext.isOpen} onClose={modalContext.close}>
                <>
                    {modalContext.children}
                </>
            </Modal>
            <FloatAlert isOpen={alertContext.isOpen} close={alertContext.close} severity={alertContext.severity}>
                <>
                    {alertContext.title}
                </>
            </FloatAlert>
        </>
    )
}

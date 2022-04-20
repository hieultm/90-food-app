import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem(props) {
    const { product, handleAddToFirestore  } = props
    const { id, name, img, price, qnt } = product

    const onHandleAddToFirestore = (type) => {
        handleAddToFirestore(product, type)
    }
  return (
    <div 
        className='flex justify-between items-center mb-[15px]'
        id={id}
    >
        <div className='max-w-[75px] mr-[15px]'>
            <img 
                src={img} 
                alt={name} 
                className="w-full h-[75px] object-cover"
            />
        </div>
        <div className='flex-1'>
            <div className='text-sm font-bold overflow-hidden '>
                {name}
            </div>
            <div className='text-sm font-semibold text-red-500 my-2'>
                ${price}
            </div>
            <div className='flex items-center text-sm'>
                <Button
                    onClick={onHandleAddToFirestore("decrease")}
                    className="!min-w-[30px]"
                >
                    <RemoveIcon className='!fill-zinc-700 !w-4 !h-4 hover:!fill-red-500'/>
                </Button>
                <span className='px-3 text-zinc-700'>
                    {qnt}
                </span>
                <Button
                    onClick={onHandleAddToFirestore("increase")}
                    className="!min-w-[30px] "
                >
                    <AddIcon className='!fill-zinc-700 !w-4 !h-4 hover:!fill-red-500'/>
                </Button>
            </div>
        </div>
        <Button className='!min-w-[30px]'>
            <DeleteIcon className='!text-2xl !fill-zinc-400'/>
        </Button>
    </div>
  )
}

CartItem.propTypes = {
    cartProducts: PropTypes.object,
    handleAddToFirestore: PropTypes.func.isRequired,
}

export default CartItem

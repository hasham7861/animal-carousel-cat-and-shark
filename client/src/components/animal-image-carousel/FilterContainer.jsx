import React from 'react'
import {
    FaTimesCircle as IconNothing
} from "react-icons/fa";

import {
    GiSharkFin as IconShark,
    GiCat as IconCat
} from "react-icons/gi"

const FILTER_TYPES  = {
    CAT: 'cat',
    SHARK: 'shark',
    BOTH: undefined
}

export default function FilterContainer ({onUpdateFilter, filter}) {
    return (
    <div className="filter-container">
            <IconShark className="filter-icon" onClick={()=>onUpdateFilter('shark')} style={{color: filter === FILTER_TYPES.SHARK? 'orange': 'black'}} />
            <IconCat className="filter-icon" onClick={()=>onUpdateFilter('cat')} style={{color: filter === FILTER_TYPES.CAT? 'orange': 'black'}}/>
            <IconNothing className="filter-icon" onClick={()=>onUpdateFilter()} style={{color: filter === FILTER_TYPES.BOTH? 'orange': 'black'}}></IconNothing>
    </div>
)}
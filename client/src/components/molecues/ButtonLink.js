import React from 'react'
import Button from 'components/atoms/Button';
import {Link} from 'react-router-dom'
const ButtonLink = ({children,path,onClick}) => {
    return(
    <Link onClick={onClick} to={path}>
    <Button>{children}</Button>
    </Link>
    )
}
export default ButtonLink;
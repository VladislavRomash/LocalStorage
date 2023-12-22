import React, {FC} from 'react';

type Props = {
    name: string
    callback: () => void
}
export const Button: FC<Props> = ({callback, name}) => <button onClick={callback}
                                                               style={{margin: '10px'}}>{name}</button>
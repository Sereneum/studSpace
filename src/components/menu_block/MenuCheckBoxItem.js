import React, {useContext} from 'react';
import {Context} from "../../index";

const MenuCheckBoxItem = ({item, isLast, set}) => {

    // background-color: rgba(80, 169, 50, 0.7)

    const style = () =>
        item.value
            ?
            {"backgroundColor": "rgba(80, 169, 50, 0.7)"}
            :
            null


    return (
        <>
            <div className="content_elem_row">
                <p>{item.text}</p>
                <div className="switcher_body" style={style()} onClick={set}>
                    <div className={`switcher ${item.value && 'active-switcher'}`}></div>
                </div>
            </div>

            {!isLast && <div className="breaker"></div>}
        </>
    );
};

export default MenuCheckBoxItem;
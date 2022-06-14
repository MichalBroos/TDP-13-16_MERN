import {useState} from 'react';

const ProductTable = ({products}) => {
    const json = JSON.parse(products);
    console.log(json, typeof json);

    // const list = [];
    // j.forEach(element => {
    //     list.push(<p key={element.prodId}>{element.prodId}</p>)
    // });
    return (
        <>
            <h1>Product search</h1>
            <input
                type="text" name="search"
            />
            {json.map(prod => <p>{`id: ${prod.id} name: ${prod.name}`}</p>)}
        </>
    );
}

export default ProductTable;

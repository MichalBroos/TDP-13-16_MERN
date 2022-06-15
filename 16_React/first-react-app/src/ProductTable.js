import {useState} from 'react';

const ProductTable = ({products}) => {
    const json = JSON.parse(products);

    const [search, setSearch] = useState("");
    const productMapper = productsJson => productsJson.map(product => <p key={product.id}>{product.name}</p>);

    return (
        <>
            <h1>Product search</h1>
            <input
                type="text" name="search"
                value={search} onChange={e => setSearch(e.target.value)}
            />
            {!search ?
                productMapper(json)
                :
                productMapper(json.filter(product => product.name.toLowerCase().includes(search.toLowerCase())))
            }
        </>
    );
}

export default ProductTable;

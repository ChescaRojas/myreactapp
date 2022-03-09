import React from "react"

function ItemList({names, AddToTheCart}) {

return <>
	{
	names.map(names => <div key={names} onClick={AddToTheCart}>{names}</div>)
	}
</>;
}

export default ItemList;


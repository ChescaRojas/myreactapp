import React from "react"

function ItemList({names}) {

return <>
	{
	names.map(names => <div key={names}>{names}</div>)
	}
</>;
}

export default ItemList;


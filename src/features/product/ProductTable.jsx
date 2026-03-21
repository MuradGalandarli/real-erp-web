
export function ProductTable({ onProducts,getModal,onDelete}) {

    return (
        <div>
            <button onClick={getModal}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>BrandId</th>
                        <th>CategoryId</th>
                        <th>CompanyId</th>
                        <th>Image</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {console.log(onProducts)} */}
                    {onProducts.map((product, index) => (

                        <tr key={index++}>
                            <td>{++index}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.brandId}</td>
                            <td>{product.categoryId}</td>
                            <td>{product.companyId}</td>
                          
                            <td>
                                {product.productImages?.map((i, index) =>
                                
                                    i.isMain && !i.isDeleted ? (
                                        <img
                                            key={index}
                                            src={i.imageUrl}
                                            alt="images"
                                            width="40"
                                           
                                        />
                                       
                                    ) : null
                                )}
                            </td>
                              <td><button onClick={()=>{onDelete(product.id)}}>Delete</button></td>

                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

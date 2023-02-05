import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import * as data from "../../redux/reducer"
import {AiFillDelete} from "react-icons/ai"
import {FiEdit2} from "react-icons/fi"
import {toast} from "react-toastify"

export default function ListProduct() {

    const dispatch = useDispatch()
    const {products, proTypes} = useSelector(state => state.data)

    useEffect(() => {
        dispatch(data.getProductList())
        dispatch(data.getProductTypeList())
    }, [])

    function deleteById(id) {
        dispatch(data.deleteProductById(id)).then((res) => {
            toast.success(res?.payload)
            dispatch(data.getProductList())
        })
    }

    return (
        <table className={'border p-2'}>
            <thead className={"border p-2"}>
            <tr className={"px-2"}>
                <th className={'p-2'}>№</th>
                <th className={"w-auto"}>nomi</th>
                <th className={"w-16"}>narxi</th>
                <th className={"w-40"}>turi</th>
                <th className={"w-16"}>shahar</th>
                <th className={"w-16"}></th>
            </tr>
            </thead>
            <tbody>
            {
                products?.map((item, index) => <tr key={index.toString()}>
                    <td className={"font-bold text-center p-1"}>{index + 1}</td>
                    <td className={"px-3"}>{item?.name_uz}</td>
                    <td>{item?.cost}</td>
                    <td className={"px-3 font-semibold"}>{proTypes?.map(type => type?.id === item?.product_type_id ? type?.name_uz : "")}</td>
                    <td className={"px-3"}>{item?.address}</td>
                    <td className={"flex items-center justify-center gap-2 p-2"}>
                        <AiFillDelete className={"text-red-700 cursor-pointer"}
                                      onClick={() => deleteById(item?.id)}/>
                        {/*<FiEdit2 className={"text-yellow-700"}/>*/}
                    </td>
                </tr>)
            }
            </tbody>
        </table>
    )
}
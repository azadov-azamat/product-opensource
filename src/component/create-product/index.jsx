import React from 'react'
import * as Yup from "yup"
import {useFormik} from "formik"
import {useDispatch, useSelector} from "react-redux"
import * as data from "../../redux/reducer"
import {toast} from "react-toastify";

export default function CreateProduct() {

    const dispatch = useDispatch()
    const {byId, proTypes} = useSelector(state => state.data)

    const ValidateSchema = Yup.object().shape({
        name_uz: Yup.string().required(),
        cost: Yup.string().required(),
        address: Yup.string().required(),
        product_type_id: Yup.number().required()
    })

    const formik = useFormik({
        validationSchema: ValidateSchema,
        initialValues: {
            "created_date": "2023-02-05T21:48:37.086Z"
        },
        onSubmit: (val, {resetForm}) => {
            if (byId === null) {
                dispatch(data.createProduct(val)).then((res) => {
                    toast.success(res?.payload)
                    resetForm({values: ''})
                    dispatch(data.getProductList())
                })
            } else {
                // const data = {
                //     id: byId.id,
                //     text: val?.text,
                //     status: byId?.status
                // }
                //
                // dispatch(red.updateTodo(data)).then(() => {
                //     resetForm({values: ''})
                // })
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={"row-span-3"}>
            <div className="w-full flex">
                <div className="mb-1 flex flex-col w-1/2">
                    <label htmlFor="name_uz">Nomi</label>
                    <input
                        id={"name_uz"}
                        name={"name_uz"}
                        className={"h-8 border-none px-2"}
                        placeholder={"kiriting..."}
                        value={formik.values.name_uz}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="mb-1 flex flex-col w-1/2">
                    <label htmlFor="cost">Narxi</label>
                    <input
                        id={"cost"}
                        name={"cost"}
                        className={"h-8 border-none px-2"}
                        placeholder={"kiriting..."}
                        value={formik.values.cost}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
            <div className="w-full flex">
                <div className="mb-1 flex flex-col w-1/2">
                    <label htmlFor="address">Manzil</label>
                    <input
                        id={"address"}
                        name={"address"}
                        className={"h-8 border-none px-2"}
                        placeholder={"kiriting..."}
                        value={formik.values.address}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="mb-1 flex flex-col w-1/2">
                    <label htmlFor="product_type_id">Turi</label>
                    <select onChange={formik.handleChange} name={"product_type_id"}>
                        <option value="null" disabled>tanlang...</option>
                        {
                            proTypes.map(item => <option key={item?.id}
                                                         value={parseInt(item?.id)}>{item?.name_uz}</option>)
                        }
                    </select>
                </div>
            </div>
            <div className="w-full flex items-center justify-end gap-3 mt-3 mb-5">
                {/*<button className={"border border-red-600 bg-white text-red-600 font-semibold px-4 py-1"}*/}
                {/*        type={"reset"}>clear*/}
                {/*</button>*/}
                <button disabled={!formik.dirty || !formik.isValid}
                        className={"border border-none bg-green-700 text-white font-semibold px-4 py-1"}
                        type={"submit"}>submit
                </button>
            </div>
        </form>
    )
}
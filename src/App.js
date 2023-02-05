import React from "react"
import ListProduct from "./component/list-product"
import CreateProduct from "./component/create-product"

function App() {
  return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="">
            <h2 className={"font-bold text-center text-2xl my-8"}>Product CRUD</h2>
            <CreateProduct/>
            <ListProduct/>
        </div>
      </div>
  )
}

export default App
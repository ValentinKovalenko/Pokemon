import React from 'react'
import {Formik} from "formik";

const Main = ({findPokemon}) => {


    return (
        <Formik
            initialValues={{
                namePokemon: '',
            }}
            onSubmit={(values) => {
                findPokemon(values.namePokemon)
            }}
        >{({
               values,
               handleChange,
               handleSubmit,

           }) => (
            <form className="row g-3 mb-3">
                <div className="col-auto note">
                    <label htmlFor="" className="visually-hidden"></label>
                    <input
                        name="namePokemon"
                        type="text"
                        className="form-control"
                        placeholder=""
                        onChange={handleChange}
                        value={values.namePokemon}
                    />
                </div>
                <div className="col-auto">
                    <button type="submit"
                            className="btn btn-danger "
                            onClick={handleSubmit}
                    >Submit
                    </button>
                </div>
            </form>
        )}
        </Formik>
    )

}
export default Main
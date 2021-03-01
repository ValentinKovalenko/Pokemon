import React from 'react'
import {Formik} from "formik";
import * as yup from "yup";

const Main = ({findPokemon}) => {
    const validationsSchema = yup.object().shape({
        namePokemon: yup.string().required('Please enter name pokemon')
    })

    return (
        <Formik
            initialValues={{
                namePokemon: '',
            }}
            onSubmit={(values) => {
                findPokemon(values.namePokemon)
            }}
            validationSchema={validationsSchema}
        >{({
               errors,
               touched,
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
                        placeholder="Name pokemon"
                        onChange={handleChange}
                        value={values.namePokemon}
                    />
                    {touched.namePokemon && <p className='text-danger p1' >{errors.namePokemon}</p>}
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
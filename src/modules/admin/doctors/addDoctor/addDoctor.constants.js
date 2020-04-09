import * as Yup from 'yup'

const initModel = {
    firstName:'',
    lastName:'',
    qulification:'',
    mobile:''
}

const validation = Yup.object().shape({
    firstName:Yup.string().required('First Name is required'),
    lastName:Yup.string().required('Last Name is required'),
    qulification:Yup.string(),
    mobile:Yup.string().required('Mobile is required')
})

export {initModel, validation}
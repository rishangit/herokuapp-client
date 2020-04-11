import * as Yup from 'yup'

const initModel = {
    mobile:'',
}

const validation = Yup.object().shape({
    mobile:Yup.string().required('Mobile is required')
})

export {initModel, validation}
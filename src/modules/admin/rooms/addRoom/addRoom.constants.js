import * as Yup from 'yup'

const initModel = {
    roomNumber:'',
}

const validation = Yup.object().shape({
  roomNumber:Yup.number('Should be a Number').required('Room Number is required'),
})

export {initModel, validation}
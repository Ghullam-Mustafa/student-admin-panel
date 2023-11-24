import * as yup from 'yup'


export const userSchema = yup.object().shape({
    studentName: yup.string().required(),
    studentPhoneNumber: yup.number().required(),
    studentCnic: yup.number().required(),
    studentWhatsappNumbaer: yup.number().required(),
    markOfIdentification:  yup.string().required(),
    dateOfBirth: yup.date().required()

    
})
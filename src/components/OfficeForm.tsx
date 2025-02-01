import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Typography } from './Typography'
import { Button } from './Button'
import { Input } from './Input'
import { ColorPalette } from './ColorPalette'
import arrowLeftIcon from '../assets/arrow-left.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'

interface OfficeFormProps {
  onUpdate: (values: FormValues) => void;
  onSave: (values: FormValues) => void;
  error?: string | null;
  initialValues?: FormValues;
}

interface FormValues {
  officeName: string;
  address: string;
  email: string;
  phone: string;
  capacity: string;
  accent: string;
}

const validationSchema = Yup.object({
  officeName: Yup.string()
    .required('Office name is required')
    .min(2, 'Office name must be at least 2 characters')
    .max(50, 'Office name must be less than 50 characters'),
  address: Yup.string()
    .required('Address is required')
    .min(5, 'Address must be at least 5 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9+\-() ]+$/, 'Invalid phone number format'),
  capacity: Yup.number()
    .required('Capacity is required')
    .positive('Capacity must be a positive number')
    .integer('Capacity must be a whole number')
    .max(999999, 'Capacity is too large'),
  accent: Yup.string()
    .required('Color is required')
})

export const OfficeForm = ({ onUpdate, onSave, error, initialValues }: OfficeFormProps) => {
  const navigate = useNavigate()
  
  const formik = useFormik({
    initialValues: initialValues || {
      officeName: '',
      address: '',
      email: '',
      phone: '',
      capacity: '',
      accent: '#FFBE0B'
    },
    validationSchema,
    onSubmit: (values) => {
      if (initialValues) {
        onUpdate(values)
      } else {
        onSave(values)
      }
    }
  })

  return (
    <>
      <HeaderRow>
        <Button 
          className="back-button"
          variant="back"
          onClick={() => navigate(-1)}
          icon={arrowLeftIcon}
        />
        <Typography variant="h2">{initialValues ? 'Edit Office' : 'New Office'}</Typography>
      </HeaderRow>
      <Form onSubmit={formik.handleSubmit}>
        {error && (
          <ErrorMessage>
            {error}
          </ErrorMessage>
        )}
        <Input
          name="officeName"
          type="text"
          placeholder="Office Name"
          value={formik.values.officeName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.officeName ? formik.errors.officeName : undefined}
        />
        <Input
          name="address"
          type="text"
          placeholder="Physical Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address ? formik.errors.address : undefined}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email ? formik.errors.email : undefined}
        />
        <Input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone ? formik.errors.phone : undefined}
        />
        <Input
          name="capacity"
          type="number"
          placeholder="Capacity"
          value={formik.values.capacity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.capacity ? formik.errors.capacity : undefined}
        />
        <ColorPalette
          name="accent"
          value={formik.values.accent}
          onChange={(color) => formik.setFieldValue('accent', color)}
          onBlur={() => formik.setFieldTouched('accent')}
          error={formik.touched.accent ? formik.errors.accent : undefined}
        />
        <ButtonWrapper>
          <Button
            type="submit"
            text={initialValues ? 'Update Office' : 'Add Office'}
            variant="primary"
          />
          {initialValues && (
            <Button
              type="button"
              text="Delete Office"
              variant="secondary"
              onClick={() => navigate(-1)}
            />
          )}
        </ButtonWrapper>
      </Form>
    </>
  )
}

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 20px;
  margin-bottom: 2rem;

  .back-button {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`

const ErrorMessage = styled.div`
  color: #EF4444;
  background: #FEE2E2;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 8px;
`

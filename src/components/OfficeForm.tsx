import styled from 'styled-components'
import { Button } from './Button'
import { Input } from './Input'
import { ColorPalette } from './ColorPalette'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { PageHeader } from './PageHeader'
import { toLowerCase, capitalizeEachWord } from '../services/stringUtils'
import { getOfficeById } from '../services/officeService'

interface OfficeFormProps {
  onUpdate?: (values: FormValues) => void;
  onSave?: (values: FormValues) => void;
  onDelete?: () => void;
  error?: string | null;
  initialValues?: FormValues;
}

interface FormValues {
  id?: string;
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
    .max(999, 'Capacity is too large'),
  accent: Yup.string()
    .required('Color is required')
})

export const OfficeForm = ({ onUpdate, onSave, onDelete, error, initialValues }: OfficeFormProps) => {
  
  const formik = useFormik({
    initialValues: initialValues || {
      officeName: '',
      address: '',
      email: '',
      phone: '',
      capacity: '',
      accent: '#FFBE0B'
    },
    validate: (values) => {
      const errors: { [key: string]: string } = {};
      
      // If editing an existing office, check if new capacity is less than current staff count
      if (initialValues && initialValues.id) {
        const currentOffice = getOfficeById(initialValues.id);
        if (currentOffice && parseInt(values.capacity) < currentOffice.members.length) {
          errors.capacity = `Capacity cannot be less than current staff count (${currentOffice.members.length})`;
        }
      }
      
      return errors;
    },
    validationSchema,
    onSubmit: (values) => {
      const formattedValues = {
        ...values,
        officeName: capitalizeEachWord(values.officeName),
        email: toLowerCase(values.email),
        address: capitalizeEachWord(values.address)
      };
      
      if (initialValues && onUpdate) {
        onUpdate(formattedValues)
      } else if (onSave) {
        onSave(formattedValues)
      }
    }
  })

  // Handle email input change to show lowercase while typing
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    formik.setFieldValue('email', toLowerCase(value));
  };

  // Handle office name input change to show proper capitalization while typing
  const handleOfficeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    formik.setFieldValue('officeName', value);
  };

  return (
    <>
      <PageHeader title={initialValues ? 'Edit Office' : 'New Office'} />
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
          onChange={handleOfficeNameChange}
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
          onChange={handleEmailChange}
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
          placeholder="Maximum Capacity"
          value={formik.values.capacity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.capacity ? formik.errors.capacity : undefined}
        />
        <ColorPalette
          name="accent"
          value={formik.values.accent}
          onChange={(color: string) => formik.setFieldValue('accent', color)}
          onBlur={() => formik.setFieldTouched('accent')}
          error={formik.touched.accent ? formik.errors.accent : undefined}
        />
        <ButtonWrapper>
          <Button type="submit" variant="primary">
            {initialValues ? 'Update Office' : 'Add Office'}
          </Button>
          {onDelete && (
            <Button type="button" variant="warning" onClick={onDelete}>
              Delete Office
            </Button>
          )}
        </ButtonWrapper>
      </Form>
    </>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.layout.gap.md};
  max-width: ${({theme}) => theme.layout.maxContentWidth};
  margin: 0 auto;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: ${({theme}) => theme.layout.gap.md};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${({theme}) => theme.spacing.xl};
`

const ErrorMessage = styled.div`
  color: ${({theme}) => theme.colors.danger.main};
  background: ${({theme}) => theme.colors.danger.light};
  padding: ${({theme}) => theme.spacing.md};
  border-radius: ${({theme}) => theme.layout.borderRadius.xs};
  margin-bottom: ${({theme}) => theme.spacing.sm};
`

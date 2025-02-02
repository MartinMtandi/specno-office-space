import styled from 'styled-components'
import { CloseButton } from './CloseButton'
import { Button } from './Button'
import { Input } from './Input'
import { AvatarPalette } from './AvatarPalette'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import arrowLeft from '../assets/icons/arrow-left.svg'
import { v4 as uuidv4 } from 'uuid'
import { Office, updateOffice } from '../services/officeService'

interface StaffMemberFormProps {
  onClose: () => void
  onSave: () => void
  office: Office
}

interface StaffMemberValues {
  firstName: string
  lastName: string
  avatar: string
}

const validationSchemaStep1 = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
})

const validationSchemaStep2 = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  avatar: Yup.string().required('Please select an avatar')
})

export const StaffMemberForm = ({ onClose, onSave, office }: StaffMemberFormProps) => {
  const [step, setStep] = useState(1)
  const [error, setError] = useState<string | null>(null)

  const formik = useFormik<StaffMemberValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      avatar: ''
    },
    validationSchema: step === 1 ? validationSchemaStep1 : validationSchemaStep2,
    validateOnMount: false,
    validateOnChange: true,
    onSubmit: async (values) => {
      if (step === 1) {
        if (values.firstName && values.lastName) {
          setStep(2)
        }
        return
      }

      try {
        // Validate before submitting
        const errors = await formik.validateForm()
        if (Object.keys(errors).length > 0) {
          return
        }

        const newMember = {
          id: uuidv4(),
          firstName: values.firstName,
          lastName: values.lastName,
          avatar: values.avatar
        }

        const updatedOffice = {
          ...office,
          members: [...(office.members || []), newMember],
          updatedAt: new Date().toISOString()
        }

        await updateOffice(updatedOffice)
        onSave()
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to add staff member')
      }
    }
  })

  return (
    <ModalContent>
      <HeaderRow>
        <HeaderLeft>
          {step === 2 && (
            <BackButton onClick={() => setStep(1)} type="button" aria-label="Go back">
              <img src={arrowLeft} alt="" width={24} height={24} />
            </BackButton>
          )}
          <ModalHeader>New Staff Member</ModalHeader>
        </HeaderLeft>
        <CloseButton onClick={onClose} />
      </HeaderRow>
      <ModalBody>
        <Form onSubmit={formik.handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {step === 1 ? (
            <>
              <Input
                name="firstName"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName ? formik.errors.firstName : undefined}
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName ? formik.errors.lastName : undefined}
              />
            </>
          ) : (
            <AvatarPalette
              name="avatar"
              value={formik.values.avatar}
              onChange={(avatar: string) => {
                formik.setFieldValue('avatar', avatar, true);
              }}
              error={formik.touched.avatar ? formik.errors.avatar : undefined}
            />
          )}
          <ButtonWrapper>
            <Button type="submit" variant="primary">
              {step === 1 ? 'Next' : 'Add Staff Member'}
            </Button>
          </ButtonWrapper>
        </Form>
      </ModalBody>
    </ModalContent>
  )
}

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const ModalHeader = styled.h2`
  font-size: 24px;
  color: #1E293B;
  margin: 0;
`

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`

const BackButton = styled.button`
  background: none;
  border: none;
  padding: 8px 8px 8px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f1f5f9;
  }

  img {
    display: block;
  }
`

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  margin-bottom: 16px;
`

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
import { Office, updateOffice, updateMember, Member } from '../services/officeService'
import { Typography } from './Typography'

interface StaffMemberFormProps {
  onClose: () => void;
  onSubmit: (member: Member) => void;
  office: Office;
  initialValues?: Member;
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

export const StaffMemberForm = ({ onClose, onSubmit, office, initialValues }: StaffMemberFormProps) => {
  const [step, setStep] = useState(1)
  const [error, setError] = useState<string | null>(null)

  const formik = useFormik<StaffMemberValues>({
    initialValues: {
      firstName: initialValues?.firstName || '',
      lastName: initialValues?.lastName || '',
      avatar: initialValues?.avatar || ''
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

        if (initialValues) {
          // Update existing member
          const updatedMember = {
            ...initialValues,
            firstName: values.firstName,
            lastName: values.lastName,
            avatar: values.avatar
          }
          await updateMember(office.id, updatedMember)
          onSubmit(updatedMember)
        } else {
          // Create new member
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
          onSubmit(newMember)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : initialValues ? 'Failed to update staff member' : 'Failed to add staff member')
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
          <Typography color="#000000" variant="h3">{initialValues ? 'Edit Staff Member' : 'New Staff Member'}</Typography>
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
          <CarouselDots>
            <Dot $active={step === 1} />
            <Dot $active={step === 2} />
          </CarouselDots>
          <ButtonWrapper>
            <Button type="submit" variant="primary">
              {step === 1 ? 'Next' : initialValues ? 'Update Staff Member' : 'Add Staff Member'}
            </Button>
          </ButtonWrapper>
        </Form>
      </ModalBody>
    </ModalContent>
  )
}

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 16px;
`

const Dot = styled.div<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.$active ? '#489DDA' : 'transparent'};
  border: 2px solid #489DDA;
  transition: background-color 0.3s ease;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  border-radius: 8px;
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

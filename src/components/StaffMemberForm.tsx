import styled from 'styled-components'
import { CloseButton } from './CloseButton'
import { Button } from './Button'
import { Input } from './Input'
import { AvatarPalette } from './AvatarPalette'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState, useEffect } from 'react'
import arrowLeft from '../assets/icons/arrow-left.svg'
import { v4 as uuidv4 } from 'uuid'
import { Office, updateOffice, updateMember, Member } from '../services/officeService'
import { Typography } from './Typography'
import { theme } from '../theme'
import { capitalizeEachWord, cleanName } from '../services/stringUtils'

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
  firstName: Yup.string()
    .required('First name is required')
    .matches(/^[a-zA-Z\s-]*$/, 'Only letters, spaces, and hyphens are allowed'),
  lastName: Yup.string()
    .required('Last name is required')
    .matches(/^[a-zA-Z\s-]*$/, 'Only letters, spaces, and hyphens are allowed'),
})

const validationSchemaStep2 = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .matches(/^[a-zA-Z\s-]*$/, 'Only letters, spaces, and hyphens are allowed'),
  lastName: Yup.string()
    .required('Last name is required')
    .matches(/^[a-zA-Z\s-]*$/, 'Only letters, spaces, and hyphens are allowed'),
  avatar: Yup.string().required('Please select an avatar')
})

export const StaffMemberForm = ({ onClose, onSubmit, office, initialValues }: StaffMemberFormProps) => {
  const [step, setStep] = useState(1)
  const [error, setError] = useState<string | null>(null)
  const [isAtCapacity, setIsAtCapacity] = useState(!initialValues && office.members.length >= parseInt(office.capacity))

  useEffect(() => {
    setIsAtCapacity(!initialValues && office.members.length >= parseInt(office.capacity))
  }, [office, initialValues])

  const formik = useFormik<StaffMemberValues>({
    initialValues: {
      firstName: initialValues?.firstName || '',
      lastName: initialValues?.lastName || '',
      avatar: initialValues?.avatar || ''
    },
    validationSchema: step === 1 ? validationSchemaStep1 : validationSchemaStep2,
    validateOnMount: false,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      if (step === 1) {
        if (values.firstName && values.lastName) {
          setStep(2)
        }
        return
      }

      try {
        const errors = await formik.validateForm()
        if (Object.keys(errors).length > 0) {
          return
        }

        const formattedFirstName = capitalizeEachWord(cleanName(values.firstName))
        const formattedLastName = capitalizeEachWord(cleanName(values.lastName))

        if (initialValues) {
          const updatedMember = {
            ...initialValues,
            firstName: formattedFirstName,
            lastName: formattedLastName,
            avatar: values.avatar
          }
          await updateMember(office.id, updatedMember)
          onSubmit(updatedMember)
        } else {
          const newMember = {
            id: uuidv4(),
            firstName: formattedFirstName,
            lastName: formattedLastName,
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

  // Handle name input changes with immediate validation
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
    formik.setFieldTouched(name, true, true);
  };

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
          {isAtCapacity && <ErrorMessage>Office is at full capacity</ErrorMessage>}
          {step === 1 ? (
            <>
              <Input
                name="firstName"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={handleNameChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : undefined}
                disabled={isAtCapacity}
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={handleNameChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : undefined}
                disabled={isAtCapacity}
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
            <Button 
              type="submit" 
              variant="primary"
              disabled={isAtCapacity && !initialValues}
            >
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
  margin-top: ${theme.spacing.lg};
`

const Dot = styled.div<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: ${theme.layout.borderRadius.full};
  background-color: ${props => props.$active ? theme.colors.primary.main : 'transparent'};
  border: 2px solid ${theme.colors.primary.main};
  transition: background-color 0.3s ease;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.gap.lg};
  position: relative;
  border-radius: ${theme.layout.borderRadius.sm};
`

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.layout.gap.sm};
`

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.gap.md};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.gap.md};
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${theme.spacing.xxxl};
`

const BackButton = styled.button`
  background: none;
  border: none;
  padding: ${theme.spacing.sm} ${theme.spacing.md} ${theme.spacing.sm} 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.layout.borderRadius.full};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme.colors.secondary.light};
  }

  img {
    display: block;
  }
`

const ErrorMessage = styled.div`
  color: ${theme.colors.danger.main};
  background: ${theme.colors.danger.light};
  padding: ${theme.spacing.md};
  border-radius: ${theme.layout.borderRadius.xs};
  margin-bottom: ${theme.spacing.sm};
`

import styled from 'styled-components'
import { CloseButton } from './CloseButton'
import { Button } from './Button'
import { Input } from './Input'
import { AvatarPalette } from './AvatarPalette'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

interface StaffMemberFormProps {
  onClose: () => void
  onSave: () => void
}

interface StaffMemberValues {
  firstName: string
  lastName: string
  avatar: string
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  avatar: Yup.string().required('Please select an avatar')
})

export const StaffMemberForm = ({ onClose, onSave }: StaffMemberFormProps) => {
  const [step, setStep] = useState(2)

  const formik = useFormik<StaffMemberValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      avatar: ''
    },
    validationSchema,
    onSubmit: (values) => {
      if (step === 1) {
        if (formik.values.firstName && formik.values.lastName) {
          setStep(2)
        }
        return
      }
      onSave()
    }
  })

  return (
    <ModalContent>
      <HeaderRow>
        <ModalHeader>New Staff Member</ModalHeader>
        <CloseButton onClick={onClose} />
      </HeaderRow>
      <ModalBody>
        <Form onSubmit={formik.handleSubmit}>
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
              onChange={(avatar: string) => formik.setFieldValue('avatar', avatar)}
              onBlur={() => formik.setFieldTouched('avatar')}
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

'use client'
import { Button, Input, Textarea } from '@nextui-org/react'
import type { FC } from 'react'
import { Send } from 'react-feather'
import { useForm } from 'react-hook-form'

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm()
  const submitData = (data: any) => {
    console.log(data)
  }
  return (
    <div className='space-y-4'>
      <p className='text-default-600'>
        Need assistance or have questions? Fill out the form below, and
        we&apos;ll get back to you shortly. We&apos;re here to help!
      </p>
      <form
        className='flex-1 space-y-4'
        onSubmit={handleSubmit(submitData)}
        noValidate
      >
        <div className='grid grid-cols-2 gap-4'>
          <Input
            label='First Name'
            variant='bordered'
            {...register('firstName', {
              required: 'First name is required.',
            })}
            isInvalid={!!errors.firstName?.message as any}
            errorMessage={errors.firstName?.message as string}
          />
          <Input
            label='Last Name'
            variant='bordered'
            {...register('lastName', {
              required: 'Last name is required.',
            })}
            isInvalid={!!errors.lastName?.message as any}
            errorMessage={errors.lastName?.message as string}
          />
          <Input
            className='col-span-2'
            label='Email Address'
            type='email'
            variant='bordered'
            {...register('email', {
              required: 'Email address is required.',
            })}
            isInvalid={!!errors.email?.message as any}
            errorMessage={errors.email?.message as string}
          />
          <Textarea
            fullWidth
            className='col-span-2'
            label='Message'
            rows={10}
            variant='bordered'
            {...register('message', {
              required: 'Please type in a message.',
            })}
            isInvalid={!!errors.message?.message as any}
            errorMessage={errors.message?.message as string}
          />
        </div>
        <Button
          color='primary'
          type='submit'
          fullWidth
          endContent={<Send size={15} />}
          isLoading={isSubmitting}
        >
          Send
        </Button>
      </form>
    </div>
  )
}
export default ContactForm

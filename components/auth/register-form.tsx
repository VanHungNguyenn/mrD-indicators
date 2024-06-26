'use client'
import React, { useState, useTransition } from 'react'
import CardWrapper from './card-wrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { RegisterSchema } from '@/schemas'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import FormError from '@/components/auth/form-error'
import FormSuccess from '@/components/auth/form-success'

const RegisterForm = () => {
	const [error, setError] = useState<string | undefined>('')
	const [success, setSuccess] = useState<string | undefined>('')
	const [isPending, startTransition] = useTransition()

	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: '',
			password: '',
			name: '',
		},
	})

	const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
		setError('')
		setSuccess('')

		startTransition(() => {})
	}

	return (
		<CardWrapper
			headerLabel='Create an account'
			backButtonLabel='Already have an account?'
			backButtonHref='/login'
			showSocial
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-6'
				>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-white'>
									Name
								</FormLabel>
								<FormControl>
									<Input
										placeholder='John Doe'
										{...field}
										type='text'
										disabled={isPending}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-white'>
									Email
								</FormLabel>
								<FormControl>
									<Input
										placeholder='john.doe@example.com'
										{...field}
										type='email'
										disabled={isPending}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-white'>
									Password
								</FormLabel>
								<FormControl>
									<Input
										placeholder='********'
										{...field}
										type='password'
										disabled={isPending}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormError message={error} />
					<FormSuccess message={success} />
					<Button
						type='submit'
						className='w-full'
						disabled={isPending}
						variant={'blue'}
					>
						Create an account
					</Button>
				</form>
			</Form>
		</CardWrapper>
	)
}

export default RegisterForm

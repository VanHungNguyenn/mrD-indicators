'use client'
import React, { useState, useTransition } from 'react'
import CardWrapper from './card-wrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

import { LoginSchema } from '@/schemas'

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

const LoginForm = () => {
	const [error, setError] = useState<string | undefined>('')
	const [success, setSuccess] = useState<string | undefined>('')
	const [isPending, startTransition] = useTransition()

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		setError('')
		setSuccess('')

		startTransition(() => { })
	}

	return (
		<CardWrapper
			headerLabel='Log in to your LuxAlgo Account'
			backButtonLabel="Don't have an account?"
			backButtonHref='/signup'
			showSocial
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-6'
				>
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
						variant='blue'
						disabled={isPending}
					>
						Login
					</Button>
				</form>
				<Button
					variant={'link'}
					className='font-normal text-white w-full mt-0'
					size={'sm'}
					asChild
				>
					<Link href='forgot-password'>Forgot password?</Link>
				</Button>
			</Form>
		</CardWrapper>
	)
}

export default LoginForm

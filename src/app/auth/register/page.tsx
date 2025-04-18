'use client'

import Link from 'next/link'
import styles from './page.module.css'
import { SectionTitle } from '@/ui/Title'
import { Input, Label } from '@/ui/Form'
import { registerUser } from '@/lib/actions'
import { useActionState } from 'react'
import { ErrorField } from '@/ui/Form/ErrorField'
import { registerUserInitialFormState as initialFormState } from '@/lib/interfaces'
import { Button, RedirectButton } from '@/ui/Button'
import { LoaderCircle } from 'lucide-react'

export default function Register() {
	const [formState, formAction, isPending] = useActionState(registerUser, initialFormState)

	const { username, email, password, repeat_password } = formState.fieldValues

	return (
		<main className='page-container'>
			<section className={styles.container}>
				<SectionTitle>Registrarse</SectionTitle>

				<form action={formAction}>
					<fieldset>
						<Label htmlFor='username'>Nombre de usuario</Label>
						<Input type='text' name='username' id='username' defaultValue={username} />
					</fieldset>
					<fieldset>
						<Label htmlFor='email'>Correo</Label>
						<Input type='text' name='email' id='email' defaultValue={email} />
					</fieldset>
					<fieldset>
						<Label htmlFor='password'>Contraseña</Label>
						<Input type='password' name='password' id='password' defaultValue={password} />
					</fieldset>
					<fieldset>
						<Label htmlFor='repeat_password'>Repetir contraseña</Label>
						<Input type='password' name='repeat_password' id='repeat_password' defaultValue={repeat_password} />
					</fieldset>
					<ul className={styles.errors}>
						{formState.fieldErrors.map((err) => (
							<li key={err}>
								<ErrorField>{err}</ErrorField>
							</li>
						))}
					</ul>
					<fieldset>
						<Button type='submit' disabled={isPending} variant='primary'>
							{isPending ? <LoaderCircle size={24} className='loaderSpin' /> : 'Registrarse'}
						</Button>
						<div className={styles.loginButtonContainer}>
							<p className={styles.haveAccount}>¿Ya tienes una cuenta?</p>
							<RedirectButton variant='secondary' href='/auth/register'>
								Iniciar sesión
							</RedirectButton>
						</div>
					</fieldset>
				</form>
			</section>
		</main>
	)
}

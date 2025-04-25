'use client'

import styles from './page.module.css'
import { useActionState } from 'react'
import { SectionTitle } from '@/ui/Title'
import { Input, Label } from '@/ui/Form'
import { loginUser } from '@/lib/actions'
import { loginUserInitialFormState as initialFormState } from '@/lib/interfaces'
import { ErrorField } from '@/ui/Form/ErrorField'
import { LoaderCircle } from 'lucide-react'
import { Button, RedirectButton } from '@/ui/Button'

export default function Login() {
	const [formState, formAction, isPending] = useActionState(loginUser, initialFormState)

	const { username, password } = formState.fieldValues

	return (
		<main className='page-container'>
			<section className={styles.container}>
				<SectionTitle>Iniciar sesión</SectionTitle>
				<form action={formAction}>
					<fieldset>
						<Label htmlFor='username'>Nombre de usuario</Label>
						<Input type='text' name='username' id='username' defaultValue={username} />
					</fieldset>
					<fieldset>
						<Label htmlFor='password'>Contraseña</Label>
						<Input type='password' name='password' id='password' defaultValue={password} />
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
							{isPending ? <LoaderCircle size={24} className='loaderSpin' /> : 'Iniciar sesión'}
						</Button>
						<div className={styles.registerButtonContainer}>
							<p className={styles.noAccount}>¿No tienes una cuenta?</p>
							<RedirectButton variant='secondary' href='/auth/register'>
								Registrarse
							</RedirectButton>
						</div>
					</fieldset>
				</form>
			</section>
		</main>
	)
}

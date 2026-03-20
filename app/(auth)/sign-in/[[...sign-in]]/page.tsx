import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            logoBox: 'hidden',  // ← hides Clerk's default logo
            header: 'flex flex-col items-center gap-2',
            headerTitle: {
              backgroundImage: 'url(/icons/yoom-logo.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              height: '50px',
              color: 'transparent',
            },
          }
        }}
      />
    </main>
  )
}

export default SignInPage
"use client"
import React from 'react'
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import { GiPadlock } from 'react-icons/gi'
import BrandName from '@/components/ui/BrandName'
import { useForm } from 'react-hook-form'
import { loginSchema, LoginSchema } from '@/lib/schemas/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'

function LoginForm() {

    const { register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: "onTouched"
    })


    const onSubmitFn = (data: LoginSchema) => {
        console.log(data)
    }

    return (
        <Card className='w-80 mx-auto'>
            <CardHeader className='flex flex-col items-center justify-center'>
                <div className="flex flex-col gap-2 items-center text-secondary">
                    <div className="flex flex-row items-center gap-2">
                        <GiPadlock size={25} />
                        <h4 className="text-xl font-semibold">
                            Login
                        </h4>
                    </div>
                    <p className="text-neutral-500">
                        Welcome back to <BrandName />
                    </p>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmitFn)}>
                    <div className="space-y-4">
                        <Input
                            defaultValue=''
                            type="email"
                            label="Email"
                            variant="bordered"
                            {...register("email")}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message as string}
                        />
                        <Input
                            defaultValue=''
                            type="password"
                            label="Password"
                            variant="bordered"
                            {...register("password")}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message as string}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            color="primary"
                            isDisabled={!isValid}
                        >Login</Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    )
}

export default LoginForm

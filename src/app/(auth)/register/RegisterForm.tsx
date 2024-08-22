"use client"
import { loginSchema, LoginSchema } from '@/libs/schema/loginSchema'
import { registerSchema, RegisterSchema } from '@/libs/schema/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaUserPlus } from 'react-icons/fa6'

function RegisterForm() {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        mode: "onTouched"
    });

    const onSubmit = (data: any) => {
        return console.log(data)
    }

    return (
        <Card className="w-3/6 m-auto">
            <CardHeader
                className="
                flex 
                flex-col
                items-center 
                justify-center 
                border-b 
                border-slate-200">
                <div className='flex 
                flex-col 
                gap-2
                px-4
                items-center 
                justify-center'>
                    <div className="flex flex-row gap-3">
                        <FaUserPlus size={30} />
                        <h1 className='text-2xl text-sky-700'>Create Account</h1>
                    </div>
                    <p>
                        Welcome! You are signing up with LSofa!
                    </p>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col gap-4'>
                    <div className="space-y-4">
                        <Input
                            defaultValue=''
                            type="string"
                            label="Name"
                            variant="bordered"
                            {...register("name")}
                            isInvalid={!!errors.name}
                            errorMessage={errors.name?.message}
                        />
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
                    </div>
                    <Button isDisabled={!isValid} type="submit"
                        color="primary"
                    >Register with LSF</Button>
                </form>
            </CardBody>

        </Card>
    )
}

export default RegisterForm

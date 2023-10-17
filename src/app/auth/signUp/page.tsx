"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "../../../assets/register.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserSignUpMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FormValues = {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
};

const SignUpPage = () => {
  const [userSignUp] = useUserSignUpMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userSignUp({ ...data }).unwrap();
      if (res?.accessToken) {
        router.push("/");
        message.success("User signUp successfully!");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Row
      className=""
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >

<Col className="mx-10 md:mx-0" sm={12} md={8} lg={8}>
        <h1 className="my-4 text-center text-4xl mb-6 font-bold">Create an Account</h1>
        <div>
          <Form submitHandler={onSubmit}>

              <div className="mt-4">
                <FormInput
                  name="name.firstName"
                  type="text"
                  size="large"
                  label="First Name"
                />
              </div>

            <div className="mt-4">
                <FormInput
                  name="name.lastName"
                  type="text"
                  size="large"
                  label="Last Name"
                />
              </div>
            <div className="mt-4">
              <FormInput name="email" type="email" size="large" label="Email" />
            </div>
            <div className="mt-4">
              <FormInput
                name="mobileNumber"
                type="text"
                size="large"
                label="Mobile Number"
              />
            </div>
            <div className="mt-4">
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </div>
            <p className="text-sm mt-5 mb-5 text-start dark:text-gray-400 text">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="hover:underline text-blue-400"
              >
                Login
              </Link>
              .
            </p>
            <div className="flex justify-start">
              <Button className="mt-2" htmlType="submit" type="primary">
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </Col>

      <Col className="hidden md:block" sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
    </Row>
  );
};

export default SignUpPage;

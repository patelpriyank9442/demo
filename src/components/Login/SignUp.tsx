import React, { useState } from 'react'
import { getUserInfo, setUserInfo } from '../helper/utils/auth.utils';
import AppleSvg from "../AppleSvg";
import EyeSvg from "../EyeSvg";
import FaceBookSvg from "../FaceBookSvg";
import GoogleSvg from "../GoogleSvg";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
type ErrorType = {
    [key: string]: string;
};

interface UserDataable {
    email?: string;
    password?: string;
    userName?: string;
    contactNo?: string;
}

const SignUp: React.FC = () => {
    const [signUp, setSignUp] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserDataable>({});
    const [error, setError] = useState<ErrorType>({});
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/login")
        setUserData({})
        setError({})
    }

    const handelOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        setError({ ...error, [name]: "" });
    };

    const vaidation = () => {
        let formValid = true;
        let error: ErrorType = {};
        const REQUIRED_CONTACT_NO_LENGTH = 10;
        const regex = /^[\w-]+(\.[\w-]+)*@([a-z\d]+(-[a-z\d]+)*\.)+[a-z]{2,}$/i;
        if (!userData?.email?.trim()) {
            formValid = false;
            error["email"] = "Please enter email address";
        } else if (!regex.test(userData?.email)) {
            formValid = false;
            error["email"] = "Please enter a valid email address";
        }
        if (!userData?.password?.trim()) {
            formValid = false;
            error["password"] = "Please enter password";
        }
        if (!userData?.userName?.trim()) {
            formValid = false;
            error["userName"] = "Please enter userName";
        }
        if (!userData?.contactNo) {
            formValid = false;
            error["contactNo"] = "Please enter contactNo";
        } else if (userData.contactNo.length !== REQUIRED_CONTACT_NO_LENGTH) {
            formValid = false;
            error["contactNo"] = `Contact number must be ${REQUIRED_CONTACT_NO_LENGTH} characters long`;
        }

        setError(error);
        return formValid;
    };

    const handleSubmit = () => {
        if (vaidation()) {
            const data: UserDataable = {
                userName: userData?.userName,
                email: userData?.email,
                password: userData?.password,
                contactNo: userData?.contactNo
            }
            const signUpData = getUserInfo() as UserDataable[] || [];
            const userNameMatch = signUpData?.filter((item: UserDataable) => item?.userName === userData?.userName)
            const emailMatch = signUpData?.filter((item: UserDataable) => item?.email === userData?.email)
            if (userNameMatch?.length > 0) {
                toast.error("Username already exists")
            } else if (emailMatch?.length > 0) {
                toast.error("Email already exists")
            } else {
                toast.success("Successfully Sign up")
                setUserInfo([...signUpData, data])
                navigate("/login")
            }
        }
    };

    const bindInput1 = (value: any) => {
        const currentValue = value.target.value;
        const regex = new RegExp("^[0-9]*\\.?[0-9]*$");
        const keyPressed = String.fromCharCode(
            !value.charCode ? value.which : value.charCode
        );

        if (
            !regex.test(currentValue + keyPressed) ||
            (keyPressed === "." && currentValue.includes("."))
        ) {
            value.preventDefault();
            return false;
        }
    };
    return (
        <div className="h-[100vh] relative overflow-y-auto w-[100vw] flex justify-center items-center px-[26px]">
            <div className="before:w-[50vw] before:h-[100vh]  before:absolute before:z-[-1]  before:left-0 before:top-0  before:bg-[#ECBC76]"></div>
            <img
                src="./Saly-3.png"
                alt=""
                className="absolute left-[220px] top-[100px] hidden xl:block"
            />
            <div
                className={`w-[539px] rounded-[40px] shadow-custom  bg-[#FFFFFF] px-[26px] sm:px-[44px] pt-[52px] ${signUp ? "pb-[79px]" : "pb-[51px]"
                    } `}
            >
                {/* top title heading part  */}
                <div className="flex justify-between  ">
                    <div>
                        <p className="text-black text-[16px] sm:text-[21px] leading-[24px] sm:leading-[31.5px] font-[400]">
                            Welcome to lorem
                        </p>
                        <p className="text-[40px] sm:text-[55px] leading-[60px¯] sm:leading-[82.5px] font-[500] text-black">
                            Sign Up
                        </p>
                    </div>
                    <div className="text-[13px] leading-[19.5px] font-[400]" >
                        <p className="text-[#8D8D8D]" onClick={handleClick}>
                            Have an Account ?
                        </p>
                        <p className="text-[#B87514] cursor-pointer" onClick={handleClick}>
                            Sign In
                        </p>
                    </div>
                </div>
                {!signUp && (
                    <div className=" sm:hidden w-full flex gap-[12px] sm:gap-[20px] pt-[61px]">
                        <div className="bg-[#FFF4E3] items-center  cursor-pointermax-w-[298px] w-full rounded-[9px] flex justify-center gap-[10px] py-[15px]">
                            <div>
                                <GoogleSvg />
                            </div>
                            <p className="text-[12px] sm:text-[16px] leading-[18px] sm:leading-[24px] font-[400]">
                                Sign in with Google
                            </p>
                        </div>
                        <div className="flex gap-[7px] sm:gap-[13px]">
                            <div className="cursor-pointer bg-[#F6F6F6] rounded-[9px] h-[55px]  w-[36px] sm:w-[60px] flex justify-center items-center ">
                                <FaceBookSvg />
                            </div>
                            <div className="cursor-pointer bg-[#F6F6F6] rounded-[9px] h-[55px]  w-[36px] sm:w-[60px] flex justify-center items-center ">
                                <AppleSvg />
                            </div>
                        </div>
                    </div>
                )}

                <div
                    className="flex flex-col gap-y-[35px] pt-[45px] pb-[32px]"
                >
                    <div className="flex flex-col gap-[5px]">
                        <label
                            htmlFor="email"
                            className="text-[16px] leading-[21px] sm:leading-[24px] text-black font-[400]"
                        >
                            Enter your email address
                        </label>
                        <div className="px-[10px] sm:px-[25px] w-full py-[19px]  rounded-[9px] border-[1px]">
                            <input
                                type="text"
                                name="email"
                                value={userData?.email}
                                onChange={(e) => handelOnChange(e)}
                                className="focus:outline-none w-full"
                                placeholder="Please enter email address"
                            />
                        </div>
                        <span className="text-xs text-red-500">{error["email"]}</span>
                    </div>

                    <div className="flex justify-between w-full gap-[19px]">
                        <div className="flex flex-col gap-[5px]">
                            <label
                                htmlFor="userName"
                                className="text-[14px] sm:text-[16px] leading-[21px] sm:leading-[24px] text-black font-[400]"
                            >
                                User name
                            </label>
                            <div className="px-[7.8px] sm:px-[25px] w-full py-[19px]  max-w-[216px] rounded-[9px] border-[1px]">
                                <input
                                    type="text"
                                    name="userName"
                                    id="userName"
                                    value={userData?.userName}
                                    onChange={(e) => handelOnChange(e)}
                                    className="focus:outline-none w-full"
                                    placeholder="Enter user name"
                                />
                            </div>
                            <span className="text-xs text-red-500">{error["userName"]}</span>
                        </div>
                        <div className="flex flex-col gap-[5px] ">
                            <label
                                htmlFor="contactNo"
                                className="text-[14px] sm:text-[16px] leading-[21px] sm:leading-[24px] text-black font-[400]"
                            >
                                Contact Number
                            </label>
                            <div className="px-[7.8px] sm:px-[25px] py-[19px]  max-w-[216px] rounded-[9px] border-[1px]">
                                <input
                                    type="number"
                                    name="contactNo"
                                    id="contactNo"
                                    value={userData?.contactNo}
                                    maxLength={10}
                                    onChange={(e) => handelOnChange(e)}
                                    className="focus:outline-none w-full"
                                    placeholder="Enter Contact Number"
                                    onKeyPress={bindInput1}
                                    onKeyDown={(e) => {
                                        (e.key === "-" ||
                                            e.key === "e" ||
                                            e.key === "ArrowDown" ||
                                            e.key === "ArrowUp") &&
                                            e.preventDefault();
                                    }}
                                />
                            </div>
                            <span className="text-xs text-red-500">{error["contactNo"]}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <label
                            htmlFor="email"
                            className="text-[14px] sm:text-[16px] leading-[21px] sm:leading-[24px] text-black font-[400]"
                        >
                            Enter your Password
                        </label>
                        <div className="px-[10px] sm:px-[25px] w-full flex py-[19px]  rounded-[9px] border-[1px]">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={userData?.password}
                                onChange={(e) => handelOnChange(e)}
                                className="focus:outline-none w-full"
                                placeholder="Password"
                            />
                            <div className="cursor-pointer">
                                <FontAwesomeIcon
                                    icon={showPassword ? faEye : faEyeSlash}
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="cursor-pointer text-gray-600"
                                />
                            </div>
                        </div>
                        <span className="text-xs text-red-500">{error["password"]}</span>
                        {/* conditionaly showing forgot password if user already have an account */}
                        {!signUp && (
                            <p className="flex cursor-pointer justify-end text-[#AD3113] text-[13px] leading-[19.5px] font-[400]">
                                Forgot Password
                            </p>
                        )}
                    </div>
                </div>

                {/* button  */}
                <div>
                    <button className="w-full py-[16px] text-[16px] leading-[24px] font-[500] text-[#FFFFFF] shadow-buttonShadow  rounded-[10px] bg-[#E48700]" onClick={() => {
                        handleSubmit()
                    }}>
                        Sign Up
                    </button>
                </div>
            </div>


            <img
                src="./Saly-2.png"
                alt=""
                className="absolute right-[100px] top-[50px] hidden xl:block"
            />
        </div>
    )
}

export default SignUp
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () =>{
    const dispatch = useAppDispatch()

    const {register, handleSubmit} = useForm({
        defaultValues: {
            id: "A-0001",
            password: "admin123"
        }
    })

    const [login, { error}] = useLoginMutation()

    const onSubmit = async(data) =>{
        const loginInfo = {
            id: data.id,
            password: data.password
        }

        const res = await login(loginInfo).unwrap()
        const user = verifyToken(res.data.accessToken)
        dispatch(setUser({user: user, token: res.data.accessToken}))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" {...register("id")}/>
            </div>
            <div>
                <label htmlFor="id">Password:</label>
                <input type="text" id="password" {...register("password")}/>
            </div>
            <Button htmlType="submit">Login</Button>
        </form>
    )
}

export default Login;
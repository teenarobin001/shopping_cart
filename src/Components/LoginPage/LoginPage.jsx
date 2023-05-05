import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { login } from "../../features/slices/UserSlice";

const LoginPage = () => {
  const initialState = {
    name: "",
    password: "",
  };
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-1 items-center justify-items-center p-12 m-6">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Email"
            size="lg"
            name="name"
            onChange={changeHandler}
            value={values.name}
          />
          <Input
            type="password"
            label="Password"
            size="lg"
            name="password"
            value={values.password}
            onChange={changeHandler}
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={() => dispatch(login(values))}
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;

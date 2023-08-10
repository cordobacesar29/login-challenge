import {
  Button,
  Card,
  Input,
  Heading,
  FormControl,
  FormLabel,
  useBoolean,
  CircularProgress,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/form.schema";
import { TextError } from "./textError";
import { useSnackBar } from "../hook/useSnackbar.hook";
import { SnackbarEnum } from "../utils/snackbar.type";
import { useMemo, useState } from "react";
import { WhitUserView } from "./whitUserView";

interface FormValue {
  email: string;
  password: string;
}
export const LoginContainer = () => {
  const [loading, setLoading] = useBoolean();
  const [user, setUser] = useState<string | null>(null);
  const { snackbar } = useSnackBar();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: FormValue) => {
    snackbar({
      message: "Ganaste $50000 dolares!",
      type: SnackbarEnum.success,
    });
    setLoading.on();
    setUser(data.email);
    setTimeout(() => {
      setLoading.off();
    }, 2000);
  };

  const LayoutMemo = useMemo(() => {
    if (loading) return <CircularProgress isIndeterminate />;
    else if (user) return <WhitUserView onClick={()=>setUser(null)}/>;
    return (
      <Card
        justify={"center"}
        p={"2rem"}
        gap={"1rem"}
        alignItems={"center"}
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
        boxShadow={"0px 4px 10px rgba(61, 43, 112, 0.16)"}
        minW={"400px"}
      >
        <Heading>Login</Heading>
        <FormControl>
          <FormLabel>Introduce un email</FormLabel>
          <Input
            isInvalid={Boolean(errors.email)}
            {...register("email")}
            boxShadow={"0px 4px 10px rgba(61, 43, 112, 0.16)"}
          />
          <TextError error={errors.email?.message} />
        </FormControl>
        <FormControl>
          <FormLabel>Contraseña</FormLabel>
          <Input
            isInvalid={Boolean(errors.password)}
            type="password"
            {...register("password")}
            boxShadow={"0px 4px 10px rgba(61, 43, 112, 0.16)"}
          />
          <TextError error={errors.password?.message} />
        </FormControl>
        <Button type="submit" w={"full"} mt={"2rem"} isLoading={loading} colorScheme="teal">
          Submit
        </Button>
      </Card>
    );
  }, [loading, user]);

  return LayoutMemo;
};

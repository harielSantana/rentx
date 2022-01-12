declare namespace ReactNavigation {
  type CarDTO = import("../../../dtos/CarDTO").CarDTO;
  type ISignUpSecondStepParams =
    import("../../../screens/SignUp/SignUpSecondStep").ISignUpSecondStepParams;
  export interface RootParamList {
    Splash: undefined;
    SignIn: undefined;
    SignUpFirstStep: undefined;
    SignUpSecondStep: ISignUpSecondStepParams;
    Home: undefined;
    MyCars: undefined;
    CarDetails: { car: CarDTO } | undefined;
    Scheduling: { car: CarDTO } | undefined;
    SchedulingDetails: { car: CarDTO; dates: string[] } | undefined;
    SchedulingComplete: undefined;
  }
}

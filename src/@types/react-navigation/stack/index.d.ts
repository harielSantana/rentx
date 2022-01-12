import { ScreenDTO } from "../../../dtos/ScreenDTO";

declare namespace ReactNavigation {
  type CarDTO = import("../../../dtos/CarDTO").CarDTO;
  type ScreenDTO = import("../../../dtos/ScreenDTO").ScreenDTO;
  type ISignUpSecondStepParams =
    import("../../../screens/SignUp/SignUpSecondStep").ISignUpSecondStepParams;

  export interface RootParamList {
    Splash: undefined;
    SignIn: undefined;
    SignUpFirstStep: undefined;
    SignUpSecondStep: ISignUpSecondStepParams;
    Confirmation: ScreenDTO | any;
    Home: undefined;
    MyCars: undefined;
    CarDetails: { car: CarDTO } | undefined;
    Scheduling: { car: CarDTO } | undefined;
    SchedulingDetails: { car: CarDTO; dates: string[] } | undefined;
    SchedulingComplete: undefined;
  }
}

declare namespace ReactNavigation {
  type CarDTO = import("../../../dtos/CarDTO").CarDTO;
  export interface RootParamList {
    Splash: undefined;
    SignIn: undefined;
    SignUpFirstStep: undefined;
    SignUpSecondStep: undefined;
    Home: undefined;
    MyCars: undefined;
    CarDetails: { car: CarDTO } | undefined;
    Scheduling: { car: CarDTO } | undefined;
    SchedulingDetails: { car: CarDTO; dates: string[] } | undefined;
    SchedulingComplete: undefined;
  }
}

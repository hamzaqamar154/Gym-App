import { JSX } from "react";

export enum SelectedPage{
Home = "home",
Benefits = "benefits",
OurClasses = "ourclasses",
ContactUs = "contactus",
}

export interface BenefitType{
    // JSX ELEMENT IS FOR ICON 
    icon:JSX.Element;
    title: string;
    description: string;
}

export interface ClassType{
    name: string;
    description:string;
    image: string;
}
import { Fragment } from "react";
import MainNavigation from "./main-navigation";
import classes from './main-navigation.module.css'
import Logo from './logo'

export default function Layout (props) {
   return (
    <Fragment>
          <MainNavigation />
          <main>{props.children}</main>
    </Fragment>
  

   ) 
} 
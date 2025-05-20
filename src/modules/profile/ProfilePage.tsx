import React from "react";
import FormPage from "./FormPage";
import InforUser from "./InforUser";
import { Flex } from "antd";
 
export function ProfileModules() {
  return (
    <Flex gap='middle' >
      <InforUser></InforUser>
      <FormPage></FormPage>
    </Flex>
  )
}
import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $userName: String
    $middleName: String
    $lastname: String
    $motherLastName: String
    $birth: String
    $email: String
    $phone: Int
  ) {
    createUser(
      userName: $userName
      middleName: $middleName
      lastname: $lastname
      motherLastName: $motherLastName
      birth: $birth
      email: $email
      phone: $phone
    ) {
      id
      userName
      middleName
      lastname
      motherLastName
      birth
      email
      phone
    }
  }
`;

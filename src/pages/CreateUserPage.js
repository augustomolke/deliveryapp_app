import { useState } from "react";
import userServices from "../services/userServices";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CreateUserForm from "../components/CreateUserForm";

export default function CreateUserPage() {
  return (
    <>
      <CreateUserForm />
    </>
  );
}

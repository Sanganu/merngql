import React from "react";

import {useQuery} from "@apollo/client"//hook to fetch data

import { Button, Form, Message } from 'semantic-ui-react'

const Login = () => (
  <Form error>
    <Form.Input label='Email' placeholder='joe@schmoe.com' />
    <Form.Input label='Password' placeholder='Password' />
    <Message
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <Button>Submit</Button>
  </Form>
)

export default Login;

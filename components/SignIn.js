import {
  Stack,
  Heading,
  FormErrorMessage,
  Spinner
} from '@chakra-ui/core';

import Button from '../components/Button';
import ButtonLink from '../components/ButtonLink';
import Fade from './Fade';
import useInput from '../hooks/useInput';
import FormInput from './FormInput';


const SignIn = ({ toggleSignIn, fade }) => {
  const goToSignUp = (event) => {
    event.preventDefault();
    toggleSignIn(prevValue => !prevValue);
  }

  const { bind: bindEmail, value: email, reset: resetEmail } = useInput('');
  const { bind: bindPassword, value: password, reset: resetPassword } = useInput('');

  const _onSubmit = async (e) => {
    e.preventDefault();

    console.log('done');

    resetEmail();
    resetPassword();
  }

  return (
    <Fade w="100%" h="100%" as="form" method="POST" in={fade} onSubmit={_onSubmit} align="center" justify="center">
      <Stack spacing={6} w="100%" align="center" justify="center" h="100%">
        <Heading as="h1">Welcome to Whisperer</Heading>

        <Stack spacing={3} align="flex-start" justify="center">
          <FormInput
            inputId="signInEmail"
            label="Email Address"
            placeholder="Your email"
            type="email"
            {...bindEmail}
          />

          <FormInput
            inputId="signInPassword"
            label="Password"
            placeholder="Your password"
            type="password"
            {...bindPassword}
          />
        </Stack>

        <FormErrorMessage>Sorry o!</FormErrorMessage>
        {
          loading ? <Spinner size="xl" /> : <Button disabled={loading}><span>Sign In</span></Button>
        }

        <ButtonLink onClick={goToSignUp}>
          Don't have an account? Click here to Sign up for one.
        </ButtonLink>
      </Stack>
    </Fade>
  );
};

export default SignIn;

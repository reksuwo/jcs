import { useState } from "react";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
  Flex,
  Grid,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with Username: ${username} and Password: ${password}`);
    router.push("/dashboard");
  };

  return (
    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} height="100vh">
      {/* Left Section: Login Form */}
      <Flex
        align="center"
        justify="center"
        p={6}
        borderRight={{ base: "none", md: "1px solid #ddd" }}
      >
        <Box
          maxW="md"
          w="100%"
          p={8}
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
        >
          {/* Login Heading */}
          <Heading
            as="h2"
            size="lg"
            mb={6}
            textAlign="center"
            fontFamily="'Poppins', sans-serif"
          >
            LOGIN
          </Heading>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <FormControl mb={4}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </FormControl>

            {/* Password Field */}
            <FormControl mb={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </FormControl>

            {/* Submit Button */}
            <Button
              type="submit"
              bg="#16404d"
              color="white"
              width="full"
              mt={4}
              _hover={{ bg: "#133643" }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Flex>

      {/* Right Section: Logo/Image */}
      <Flex align="center" justify="center" bg="#16404d">
        <Image src="/LOGO.png" alt="Company Logo" boxSize="500px" />
      </Flex>
    </Grid>
  );
};

export default Login;

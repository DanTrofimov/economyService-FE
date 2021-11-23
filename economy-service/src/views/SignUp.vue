<template>
  <Container :width="250">
    <h1 class="app-title">sign up</h1>
    <img alt="Vue logo" class="eye" src="../assets/eye.gif" />
    <form action="" class="auth-form">
      <div v-if="isError" class="error-wrapper">
        <p class="error">fill email & password</p>
      </div>
      <TextInput
        name="email"
        type="email"
        placeholder="gmail"
        v-model="email"
      />
      <TextInput
        name="password"
        type="password"
        placeholder="password"
        v-model="password"
      />
      <Button :on-click="register">sign up</Button>
      <RouterLink to="/" class="link">back to login</RouterLink>
    </form>
  </Container>
</template>

<script>
import Container from "../components/shared/atoms/Container";
import TextInput from "../components/shared/atoms/TextInput";
import Button from "../components/shared/atoms/Button";

import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {
    Container,
    TextInput,
    Button,
  },
  data() {
    return {
      email: "",
      password: "",
      isError: false,
    };
  },
  methods: {
    ...mapActions(["signUp"]),
    async register() {
      if (this.email && this.password) {
        this.isError = false;
        await this.signUp({ email: this.email, password: this.password });
        await this.$router.push('/');
      } else {
        this.isError = true;
      }
    },
  },
};
</script>

<style>
.app-title {
  font-weight: 500;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
}

.eye {
  width: 100%;
  height: auto;
  margin-bottom: 100px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.link {
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
}

.error-wrapper {
  text-align: center;
  position: absolute;
  top: -50px;
  width: 100%;
}

.error {
  color: red;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
</style>
